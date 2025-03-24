import React, { useContext } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const RefuseEmailCollectionPage = () => {
	const { language } = useContext(LanguageContext);

	return (
		<>
			<Navbar />
			{language === "Korean" ? (
				<>
					<s.MainContainer>
						<s.MainContainerTitle animate={true}>
							이메일무단수집거부
						</s.MainContainerTitle>
					</s.MainContainer>
					<s.SubContainer>
						<s.SubContainerDesc animate={true}>
							본 웹사이트에 게시된 이메일 주소가 전자우편 수집
							프로그램이나 그 밖의 기술적 장치를 이용하여
							"무단으로 수집되는 것을 거부"하며, 이를 위반시
							정보통신망법에 의해 형사처벌됨을 유념하시기
							바랍니다.
						</s.SubContainerDesc>
						<s.SubContainerSubTitle animate={true}>
							정보통신망 이용촉진 및 정보보호 등에 관한 법률
						</s.SubContainerSubTitle>
						<s.SubContainerSubDesc animate={true}>
							제50조의2 (전자우편주소의 무단 수집행위 등 금지)
							<br />
							누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전
							동의 없이 인터넷 홈페이지에서 자동으로
							전자우편주소를 수집 하는 프로그램 그 밖의 기술적
							장치를 이용하여 전자우편주소를 수집하여서는
							아니된다.
							<br />
							누구든지 제1항의 규정을 위반하여 수집된
							전자우편주소를 판매ㆍ유통하여서는 아니된다.
							<br />
							누구든지 제1항 및 제2항의 규정에 의하여 수집ㆍ판매
							및 유통이 금지된 전자우편주소임을 알고 이를 정보
							전송에 이용하여서는 아니된다.
							<br />
							<br />
							제74조 (벌칙) 다음 각호의 1에 해당하는 자는 1천만원
							이하의 벌금에 처한다. 제8조제4항의 규정을 위반하여
							표시ㆍ판매 또는 판매할 목적으로 진열한 자
							<br />
							제44조의7제1항제1호의 규정을 위반하여 음란한
							부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을
							배포ㆍ판매ㆍ임대하거나 공연히 전시한 자
							<br />
							제44조의7제1항제3호의 규정을 위반하여 공포심이나
							불안감을 유발하는 부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을
							반복적으로 상대방에게 도달하게 한 자
							<br />
							제50조제6항의 규정을 위반하여 기술적 조치를 한 자
							<br />
							제50조의8의 규정을 위반하여 광고성 정보를 전송한 자
							<br />
							제50조의2의 규정을 위반하여 전자우편 주소를
							수집ㆍ판매ㆍ유통 또는 정보전송에 이용한 자
							<br />
							제50조의8의 규정을 위반하여 광고성 정보를 전송한 자
							<br />
							제53조제4항을 위반하여 등록사항의 변경등록 또는
							사업의 양도ㆍ양수 또는 합병ㆍ상속의 신고를 하지
							아니한 자
						</s.SubContainerSubDesc>
					</s.SubContainer>
					<Footerbar />
				</>
			) : (
				<>
					<s.MainContainer>
						<s.MainContainerTitle animate={true}>
							Unauthorized Email Collection Refusal
						</s.MainContainerTitle>
					</s.MainContainer>
					<s.SubContainer>
						<s.SubContainerDesc animate={true}>
							Please note that the email addresses posted on this
							website are strictly prohibited from being collected
							without authorization using email collection
							programs or other technical devices, and any
							violation will be subject to criminal penalties
							under the Information and Communications Network
							Act.
						</s.SubContainerDesc>
						<s.SubContainerSubTitle animate={true}>
							Act on Promotion of Information and Communications
							Network Utilization and Information Protection, etc.
						</s.SubContainerSubTitle>
						<s.SubContainerSubDesc animate={true}>
							Article 50-2 (Prohibition of Unauthorized Collection
							of Email Addresses, etc.)
							<br />
							No one shall collect email addresses using any
							program or other technical device that automatically
							collects email addresses from an internet homepage
							without the prior consent of the website operator or
							administrator.
							<br />
							No one shall sell or distribute email addresses
							collected in violation of the provisions of
							paragraph 1.
							<br />
							No one shall use, for the purpose of information
							transmission, email addresses that are prohibited
							from being collected, sold, or distributed under the
							provisions of paragraphs 1 and 2.
							<br />
							<br />
							Article 74 (Penalties) Any person falling under any
							one of the following items shall be subject to a
							fine not exceeding 10,000,000 won.
							<br />
							Those who, in violation of Article 8, paragraph 4,
							display, mark, or exhibit for sale or for the
							purpose of sale.
							<br />
							Those who, in violation of Article 44-7, paragraph
							1, item 1, distribute, sell, lease, or publicly
							display obscene symbols, texts, sounds, images, or
							videos.
							<br />
							Those who, in violation of Article 44-7, paragraph
							1, item 3, repeatedly deliver symbols, texts,
							sounds, images, or videos that induce fear or
							anxiety.
							<br />
							Those who take technical measures in violation of
							Article 50, paragraph 6.
							<br />
							Those who transmit advertising information in
							violation of Article 50-8.
							<br />
							Those who, in violation of Article 50-2, collect,
							sell, distribute, or use email addresses for
							information transmission.
							<br />
							Those who transmit advertising information in
							violation of Article 50-8.
							<br />
							Those who, in violation of Article 53, paragraph 4,
							fail to report changes in registered details or the
							transfer, acquisition, merger, or inheritance of the
							business.
						</s.SubContainerSubDesc>
					</s.SubContainer>
					<Footerbar />
				</>
			)}
		</>
	);
};

export default RefuseEmailCollectionPage;
