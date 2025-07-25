import { useState, useEffect } from "react";

// 개선된 Intersection Observer 훅
export function useIntersectionObserver(options = {}) {
	const [isVisible, setIsVisible] = useState(false);
	const [hasBeenVisible, setHasBeenVisible] = useState(false);

	const {
		threshold = 0.1,
		rootMargin = "-100px",
		once = true,
		triggerOnce = true,
	} = options;

	const observe = (element) => {
		if (!element || (once && hasBeenVisible)) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const visible = entry.isIntersecting;
				setIsVisible(visible);

				if (visible && triggerOnce) {
					setHasBeenVisible(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(element);

		return () => observer.disconnect();
	};

	return [observe, isVisible || hasBeenVisible];
}

// 여러 요소를 한번에 관찰하는 훅
export function useMultipleIntersectionObserver(count, options = {}) {
	const [visibilityStates, setVisibilityStates] = useState(
		Array(count).fill(false)
	);

	const observers = Array(count)
		.fill(null)
		.map((_, index) => {
			const [observe, isVisible] = useIntersectionObserver(options);

			useEffect(() => {
				setVisibilityStates((prev) => {
					const newState = [...prev];
					newState[index] = isVisible;
					return newState;
				});
			}, [isVisible, index]);

			return observe;
		});

	return [observers, visibilityStates];
}

// 카운트업 애니메이션 훅
export function useCountUp(end, duration = 1000, animate = false) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!animate) {
			setCount(0);
			return;
		}

		let start = 0;
		const increment = end / (duration / 16);
		const interval = setInterval(() => {
			start += increment;
			if (start >= end) {
				start = end;
				clearInterval(interval);
			}
			setCount(Math.floor(start));
		}, 16);

		return () => clearInterval(interval);
	}, [animate, end, duration]);

	return count;
}
