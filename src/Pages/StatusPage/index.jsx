import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import { LanguageContext } from "../../Context/LanguageContext";

const StatusPage = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<Navbar />
			{language === "Korean" ? <></> : <></>}
		</>
	);
};

export default StatusPage;
