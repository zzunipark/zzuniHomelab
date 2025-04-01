import React, { useContext } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const NotFoundPage = () => {
	const { language } = useContext(LanguageContext);

	const subtitleText =
		language === "Korean"
			? "요청하신 페이지를 찾을 수 없습니다."
			: "The requested page could not be found.";

	return (
		<s.PageContainer>
			<Navbar />
			<s.MainContainer>
				<s.MainContainerTitle>404</s.MainContainerTitle>
				<s.MainContainerSubtitle>
					{subtitleText}
				</s.MainContainerSubtitle>
				<s.MainContainerButton
					onClick={() => (window.location.href = "/")}
				>
					{language === "Korean" ? "홈으로" : "Go to Home"}
				</s.MainContainerButton>
			</s.MainContainer>
			<Footerbar />
		</s.PageContainer>
	);
};

export default NotFoundPage;
