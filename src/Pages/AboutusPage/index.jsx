import React from "react";
import Navbar from "../../Components/Navbar";

const AboutusPage = ({ language, toggleLanguage }) => {
	return (
		<>
			<Navbar language={language} toggleLanguage={toggleLanguage} />
			{language === "Korean" ? (
				<p>소개 내용 (한국어)</p>
			) : (
				<p>About Us content (English)</p>
			)}
		</>
	);
};

export default AboutusPage;
