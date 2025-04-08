import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import * as s from "./style";
import { LanguageContext } from "../../Context/LanguageContext";
import VisionenPng from "../../Assets/images/png/vision_en.png";
import VisionkoPng from "../../Assets/images/png/vision_ko.png";
import Image1Jpg from "../../Assets/images/jpg/1.jpg";
import Image2Jpg from "../../Assets/images/jpg/2.jpg";
import Image3Jpg from "../../Assets/images/jpg/3.jpg";
import Image4Jpg from "../../Assets/images/jpg/4.jpg";
import Image5Jpg from "../../Assets/images/jpg/5.jpg";
import Image6Jpg from "../../Assets/images/jpg/6.jpg";

const AboutusPage = () => {
	const { language } = useContext(LanguageContext);
	const [activeTab, setActiveTab] = useState("greeting");
	const [modalImage, setModalImage] = useState(null);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const galleryImages = [
		Image1Jpg,
		Image2Jpg,
		Image3Jpg,
		Image4Jpg,
		Image5Jpg,
		Image6Jpg,
	];

	const historyData = [
		{
			year: 2023,
			month: "01",
			content:
				language === "Korean"
					? "zzuniHomelab 초기 구축"
					: "Initiated the zzuniHomelab project",
		},
		{
			year: 2023,
			month: "01",
			content:
				language === "Korean"
					? "RJ45기반 2.5Gbps 내부망 네트워크 구축"
					: "Deployed a 2.5Gbps RJ45-based internal network",
		},
		{
			year: 2023,
			month: "06",
			content:
				language === "Korean"
					? "Xeon E5-v2 기반 컴퓨팅 시스템 구축"
					: "Implemented an Xeon E5-v2-based computing infrastructure",
		},
		{
			year: 2023,
			month: "08",
			content:
				language === "Korean"
					? "LGA1150 기반 저전력 컴퓨팅 시스템 구축"
					: "Integrated a low-power computing system utilizing LGA1150 architecture",
		},
		{
			year: 2023,
			month: "10",
			content:
				language === "Korean"
					? "Dell PowerEdge R210 ii 서버 구축"
					: "Deployed a Dell PowerEdge R210 II server",
		},
		{
			year: 2023,
			month: "10",
			content:
				language === "Korean"
					? "zzuniMirror 서비스 시작"
					: "Launched the zzuniMirror service",
		},
		{
			year: 2023,
			month: "11",
			content:
				language === "Korean"
					? "총 용량 128GB 메모리의 Xeon E5-v1 기반 컴퓨팅 시스템 구축"
					: "Engineered an Xeon E5-v1-based computing system with 128GB of total memory",
		},
		{
			year: 2024,
			month: "02",
			content:
				language === "Korean"
					? "디스크 총 용량 10TB 달성"
					: "Expanded total disk capacity to 10TB",
		},
		{
			year: 2024,
			month: "03",
			content:
				language === "Korean"
					? "RJ45기반 2.5Gbps 내/외부망 네트워크 구축"
					: "Established a 2.5Gbps RJ45-based internal and external network",
		},
		{
			year: 2024,
			month: "04",
			content:
				language === "Korean"
					? "SFP+기반 10Gbps 내부망 네트워크 구축"
					: "Upgraded to a 10Gbps SFP+ link for internal networking",
		},
		{
			year: 2024,
			month: "05",
			content:
				language === "Korean"
					? "디스크 총 용량 20TB 달성"
					: "Expanded total disk capacity to 20TB",
		},
		{
			year: 2024,
			month: "06",
			content:
				language === "Korean"
					? "Dell PowerEdge R220 서버 구축"
					: "Commissioned a Dell PowerEdge R220 server",
		},
		{
			year: 2024,
			month: "09",
			content:
				language === "Korean"
					? "AM4 기반 저전력 스토리지 시스템 구축"
					: "Deployed a low-power storage system leveraging AM4 architecture",
		},
		{
			year: 2025,
			month: "01",
			content:
				language === "Korean"
					? "AM4 기반 고성능 컴퓨팅 시스템 구축"
					: "Implemented a high-performance computing system utilizing AM4 architecture",
		},
		{
			year: 2025,
			month: "01",
			content:
				language === "Korean"
					? "LGA1700 기반 저전력 컴퓨팅 시스템 구축"
					: "Deployed an energy-efficient computing system based on LGA1700",
		},
		{
			year: 2025,
			month: "01",
			content:
				language === "Korean"
					? "디스크 총 용량 30TB 달성"
					: "Expanded total disk capacity to 30TB",
		},
		{
			year: 2025,
			month: "02",
			content:
				language === "Korean"
					? "디스크 총 용량 40TB 달성"
					: "Expanded total disk capacity to 40TB",
		},
		{
			year: 2025,
			month: "04",
			content:
				language === "Korean"
					? "QSFP+ 기반 40Gbps 내부망 네트워크 구축"
					: "Upgraded to a 40Gbps QSFP+ link for internal networking",
		},
	];

	return (
		<>
			<Navbar />
			{language === "Korean" && (
				<>
					<s.MainContainer>
						<s.MainContainerTitle animate={true}>
							소개
						</s.MainContainerTitle>
						<s.MainContainerSubTitle animate={true}>
							홈랩의 한계를 뛰어넘다
						</s.MainContainerSubTitle>
					</s.MainContainer>
					<s.TabContainer>
						<s.TabItem
							active={activeTab === "greeting"}
							onClick={() => handleTabClick("greeting")}
						>
							PO 인사말
						</s.TabItem>
						<s.TabItem
							active={activeTab === "vision"}
							onClick={() => handleTabClick("vision")}
						>
							비전
						</s.TabItem>
						<s.TabItem
							active={activeTab === "history"}
							onClick={() => handleTabClick("history")}
						>
							연혁
						</s.TabItem>
						<s.TabItem
							active={activeTab === "gallery"}
							onClick={() => handleTabClick("gallery")}
						>
							갤러리
						</s.TabItem>
					</s.TabContainer>
					{activeTab === "greeting" && (
						<s.GreetingContainer>
							<s.GreetingTitle animate={true}>
								PO 인사말
							</s.GreetingTitle>
							<s.GreetingDesc animate={true}>
								zzuniHomelab은 단순한 홈서버 구축을 넘어,
								최적화된 네트워크 환경과 고성능 IT 인프라를 직접
								설계하고 운영하며, 보다 신뢰할 수 있는 시스템을
								구축하는 것을 목표로 하고 있습니다. 우리는
								상업용 솔루션에 의존하지 않고, 필요한 기능과
								성능을 직접 구현하며, 완전한 제어권과 유연성을
								확보하는 것을 최우선 가치로 삼고 있습니다.
								<br />
								<br />
								zzuniHomelab은 단순한 취미가 아닙니다. 이것은
								우리가 직접 설계하고 운영하는 독립적인
								데이터센터이자, 최신 오픈소스 기술과
								엔터프라이즈급 인프라를 연구하고 실험하는
								공간입니다.
								<br />
								고성능 스토리지 기술을 활용하여 안정적인 데이터
								저장 환경을 조성하고, 초고속 네트워크 인프라를
								통해 원활한 통신을 실현하며, 가상화 및 컨테이너
								기술을 적극 도입하여 확장성과 유연성을
								극대화하는 데 집중하고 있습니다.
								<br />
								<br />
								안정성과 성능은 우리의 핵심 가치입니다. 우리는
								시스템의 신뢰성을 확보하면서도 최고의 퍼포먼스를
								유지할 수 있도록 지속적인 개선과 최적화를
								진행하고 있으며, 언제든 확장과 업그레이드가
								가능한 유연한 운영 환경을 구축하는 데 힘쓰고
								있습니다. zzuniHomelab은 단순히 개인적인 연구로
								끝나는 것이 아닙니다. 우리가 직접 경험하고 배운
								것들을 공유함으로써, 더 많은 사람들이 자신만의
								IT 인프라를 구축하고 운영할 수 있도록 돕는 것
								또한 우리의 중요한 목표입니다.
								<br />
								<br />
								zzuniHomelab은 '최적의 IT 환경을 직접 설계하고
								운영한다'는 철학 아래, 새로운 가능성을 실험하고,
								보다 효율적이고 강력한 홈서버 환경을 만들어
								나가고 있으며, 나아가 개인이 운영할 수 있는
								데이터센터의 새로운 기준을 정립해 나가고자
								합니다. 지금 이 순간에도 우리는 더 나은 성능과
								완벽한 안정성을 고민하며, 새로운 기술을 도입하고
								테스트하며, 보다 효율적인 운영 방식을 찾아
								나가고 있습니다. zzuniHomelab은 단순한 서버
								공간이 아니라, 우리가 원하는 최적의 IT 환경을
								직접 만들어 나가는 곳입니다.
								<br />
								<br />
								앞으로도 끊임없이 발전해 나가는 zzuniHomelab을
								지켜봐 주시기 바랍니다. 감사합니다.
							</s.GreetingDesc>
							<s.GreetingSignature animate={true}>
								PO. 박민준
							</s.GreetingSignature>
						</s.GreetingContainer>
					)}
					{activeTab === "vision" && (
						<s.VisionContainer>
							<s.VisionTitle animate={true}>비전</s.VisionTitle>
							<s.VisionBar />
							<s.VisionImageContainer animate={true}>
								<s.VisionImage
									src={VisionkoPng}
									alt="비전 이미지"
								/>
							</s.VisionImageContainer>
							<s.VisionBar />
						</s.VisionContainer>
					)}
					{activeTab === "history" && (
						<s.HistoryContainer>
							<s.HistoryTitle>연혁</s.HistoryTitle>
							<s.HistoryTimeline>
								{historyData.map((item, index) => (
									<s.HistoryItem key={index}>
										<s.HistoryMarker>
											<s.HistoryNumber>
												{String(index + 1).padStart(
													2,
													"0"
												)}
											</s.HistoryNumber>
										</s.HistoryMarker>
										<s.HistoryCard>
											<s.HistoryYearMonth>
												{item.year}.{item.month}
											</s.HistoryYearMonth>
											<s.HistoryDesc>
												{item.content}
											</s.HistoryDesc>
										</s.HistoryCard>
									</s.HistoryItem>
								))}
							</s.HistoryTimeline>
						</s.HistoryContainer>
					)}
					{activeTab === "gallery" && (
						<s.GalleryContainer>
							<s.GalleryTitle>
								{language === "Korean" ? "갤러리" : "Gallery"}
							</s.GalleryTitle>
							<s.GalleryGrid>
								{galleryImages.map((src, index) => (
									<s.GalleryItem
										key={index}
										onClick={() => setModalImage(src)}
									>
										<s.GalleryImg
											src={src}
											alt={`gallery-${index}`}
										/>
									</s.GalleryItem>
								))}
							</s.GalleryGrid>
						</s.GalleryContainer>
					)}
				</>
			)}
			{language === "English" && (
				<>
					<s.MainContainer>
						<s.MainContainerTitle animate={true}>
							About Us
						</s.MainContainerTitle>
						<s.MainContainerSubTitle animate={true}>
							Transcending the Limits of Homelab
						</s.MainContainerSubTitle>
					</s.MainContainer>
					<s.TabContainer>
						<s.TabItem
							active={activeTab === "greeting"}
							onClick={() => handleTabClick("greeting")}
						>
							PO Greeting
						</s.TabItem>
						<s.TabItem
							active={activeTab === "vision"}
							onClick={() => handleTabClick("vision")}
						>
							Vision
						</s.TabItem>
						<s.TabItem
							active={activeTab === "history"}
							onClick={() => handleTabClick("history")}
						>
							History
						</s.TabItem>
						<s.TabItem
							active={activeTab === "gallery"}
							onClick={() => handleTabClick("gallery")}
						>
							Gallery
						</s.TabItem>
					</s.TabContainer>
					{activeTab === "greeting" && (
						<s.GreetingContainer>
							<s.GreetingTitle animate={true}>
								PO Greeting
							</s.GreetingTitle>
							<s.GreetingDesc animate={true}>
								zzuniHomelab is more than just building a home
								server; it is about designing and operating an
								optimized network environment and
								high-performance IT infrastructure, with the
								goal of creating a reliable system. We do not
								depend on commercial solutions but instead
								implement the necessary features and performance
								ourselves, prioritizing complete control and
								flexibility.
								<br />
								<br />
								zzuniHomelab is not merely a hobby. It is an
								independent data center that we design and
								operate, as well as a space where we explore and
								experiment with the latest open-source
								technologies and enterprise-grade
								infrastructure.
								<br />
								By utilizing high-performance storage
								technology, we establish a stable data storage
								environment, ensuring smooth communication
								through an ultra-fast network infrastructure,
								and maximizing scalability and flexibility by
								actively adopting virtualization and
								containerization technologies.
								<br />
								<br />
								Reliability and performance are our core values.
								We continuously improve and optimize our system
								to ensure top performance while maintaining
								reliability, and we focus on building a flexible
								operating environment that can be easily
								expanded and upgraded. At zzuniHomelab, we not
								only conduct personal research; we also share
								our experiences and knowledge to help others
								build and manage their own IT infrastructure.
								<br />
								<br />
								Under the philosophy of "designing and operating
								the optimal IT environment ourselves,"
								zzuniHomelab constantly experiments with new
								possibilities, creating a more efficient and
								powerful home server environment, and setting
								new standards for privately operated data
								centers. Even now, we are striving for better
								performance and impeccable reliability by
								adopting and testing new technologies, as well
								as seeking more efficient operating methods.
								zzuniHomelab is the place where we build the
								optimal IT environment we desire.
								<br />
								<br />
								Please continue to support the ever-evolving
								zzuniHomelab. Thank you.
							</s.GreetingDesc>
							<s.GreetingSignature animate={true}>
								PO. MinJun Park
							</s.GreetingSignature>
						</s.GreetingContainer>
					)}
					{activeTab === "vision" && (
						<s.VisionContainer>
							<s.VisionTitle animate={true}>Vision</s.VisionTitle>
							<s.VisionBar />
							<s.VisionImageContainer animate={true}>
								<s.VisionImage
									src={VisionenPng}
									alt="Vision Image"
								/>
							</s.VisionImageContainer>
							<s.VisionBar />
						</s.VisionContainer>
					)}
					{activeTab === "history" && (
						<s.HistoryContainer>
							<s.HistoryTitle>History</s.HistoryTitle>
							<s.HistoryTimeline>
								{historyData.map((item, index) => (
									<s.HistoryItem key={index}>
										<s.HistoryMarker>
											<s.HistoryNumber>
												{String(index + 1).padStart(
													2,
													"0"
												)}
											</s.HistoryNumber>
										</s.HistoryMarker>
										<s.HistoryCard>
											<s.HistoryYearMonth>
												{item.year}.{item.month}
											</s.HistoryYearMonth>
											<s.HistoryDesc>
												{item.content}
											</s.HistoryDesc>
										</s.HistoryCard>
									</s.HistoryItem>
								))}
							</s.HistoryTimeline>
						</s.HistoryContainer>
					)}
					{activeTab === "gallery" && (
						<s.GalleryContainer>
							<s.GalleryTitle>
								{language === "Korean" ? "갤러리" : "Gallery"}
							</s.GalleryTitle>
							<s.GalleryGrid>
								{galleryImages.map((src, index) => (
									<s.GalleryItem
										key={index}
										onClick={() => setModalImage(src)}
									>
										<s.GalleryImg
											src={src}
											alt={`gallery-${index}`}
										/>
									</s.GalleryItem>
								))}
							</s.GalleryGrid>
						</s.GalleryContainer>
					)}
				</>
			)}
			{modalImage && (
				<s.ModalOverlay onClick={() => setModalImage(null)}>
					<s.ModalContent onClick={(e) => e.stopPropagation()}>
						<s.ModalImg src={modalImage} alt="Modal" />
					</s.ModalContent>
				</s.ModalOverlay>
			)}
			<Footerbar />
		</>
	);
};

export default AboutusPage;
