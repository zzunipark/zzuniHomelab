import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const sectionMap = {
			"/": "home",
			"/services": "services",
			"/infrastructure": "infrastructure",
			"/status": "status",
			"/contact": "contact",
		};

		const targetId = sectionMap[pathname];
		if (!targetId) {
			window.scrollTo(0, 0);
			return;
		}

		const scrollToSection = () => {
			const target = document.getElementById(targetId);
			if (target) {
				target.scrollIntoView({ behavior: "smooth", block: "start" });
			} else {
				window.scrollTo(0, 0);
			}
		};

		const timeoutId = setTimeout(scrollToSection, 0);
		return () => clearTimeout(timeoutId);
	}, [pathname]);

	return null;
};

export default ScrollToTop;
