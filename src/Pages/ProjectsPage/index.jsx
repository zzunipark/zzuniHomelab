import React, { useContext } from "react";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import * as s from "./style";
import { LanguageContext } from "../../Context/LanguageContext";

const ProjectsPage = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<Navbar />
			{language === "Korean" ? (
				<>
					<s.MainContainer>
						<s.MainContainerTitle animate={true}>
							프로젝트
						</s.MainContainerTitle>
						<s.MainContainerSubTitle animate={true}>
							zzuniHomelab의 핵심 가치를 위한 프로젝트를 확인해
							보세요.
						</s.MainContainerSubTitle>
					</s.MainContainer>
					<s.SubContainer1>dafa</s.SubContainer1>
					<Footerbar />
				</>
			) : (
				<>
					<Footerbar />
				</>
			)}
		</>
	);
};

export default ProjectsPage;
