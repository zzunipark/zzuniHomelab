import React, { useContext } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const StatusPage = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<Navbar />
			{language === "Korean" ? (
				<>
					<s.MainContainer>
						<s.MainContainerTitle>현황</s.MainContainerTitle>
						<s.MainContainerSubTitle>
							zzuniHomelab의 컴퓨팅 리소스를 확인하세요.
						</s.MainContainerSubTitle>
					</s.MainContainer>
					<s.SubContainer1>
						<s.SubContainer1Section>
							<s.SubContainer1SectionLeft>
								fdafa
							</s.SubContainer1SectionLeft>
							<s.SubContainer1SectionRight>
								fda
							</s.SubContainer1SectionRight>
						</s.SubContainer1Section>
					</s.SubContainer1>
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

export default StatusPage;
