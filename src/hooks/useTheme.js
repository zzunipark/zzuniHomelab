import { useEffect, useState } from "react";

const STORAGE_KEY = "zzuniHomelab_theme";

const getSystemTheme = () =>
	window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";

const applyTheme = (theme) => {
	document.documentElement.setAttribute("data-theme", theme);
};

const useTheme = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const savedTheme = localStorage.getItem(STORAGE_KEY);
		const initialTheme = savedTheme || getSystemTheme();
		setTheme(initialTheme);
		applyTheme(initialTheme);

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (event) => {
			if (!localStorage.getItem(STORAGE_KEY)) {
				const nextTheme = event.matches ? "dark" : "light";
				setTheme(nextTheme);
				applyTheme(nextTheme);
			}
		};

		media.addEventListener("change", handleChange);
		return () => media.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			const nextTheme = prevTheme === "dark" ? "light" : "dark";
			localStorage.setItem(STORAGE_KEY, nextTheme);
			applyTheme(nextTheme);
			return nextTheme;
		});
	};

	return { theme, toggleTheme };
};

export default useTheme;
