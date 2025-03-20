import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { LanguageContext } from "../../Context/LanguageContext";

const AboutusPage = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<Navbar />
			{language === "Korean" ? (
				<p>소개 내용 (한국어)</p>
			) : (
				<p>About Us content (English)</p>
			)}
		</>
	);
};

export default AboutusPage;
