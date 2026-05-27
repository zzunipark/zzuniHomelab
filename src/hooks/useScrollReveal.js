import { useEffect } from "react";

const useScrollReveal = (deps = []) => {
	useEffect(() => {
	const elements = Array.from(document.querySelectorAll(".reveal"));
	if (!elements.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.dataset.revealed = "true";
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
	);

	elements.forEach((element) => {
		if (element.dataset.revealed === "true") return;
		observer.observe(element);
	});

		return () => observer.disconnect();
	}, deps);
};

export default useScrollReveal;
