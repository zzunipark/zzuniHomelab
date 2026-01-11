import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import * as s from "./style";
import { LanguageContext } from "../../Context/LanguageContext";

const VisionenPng =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Vision_EN.png";
const VisionkoPng =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Vision_KO.png";
const Image1Jpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Gallery1.jpeg";
const Image2Jpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Gallery2.jpeg";

const AboutusPage = () => {
	const { language } = useContext(LanguageContext);
	const [activeTab, setActiveTab] = useState("greeting");
	const [modalImage, setModalImage] = useState(null);

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const galleryImages = [Image1Jpg, Image2Jpg];

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
			// image: HistoryServerImg,
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
		{
			year: 2025,
			month: "06",
			content:
				language === "Korean"
					? "디스크 총 용량 50TB 달성"
					: "Expanded total disk capacity to 50TB",
		},
		{
			year: 2025,
			month: "06",
			content:
				language === "Korean"
					? "LGA1700 기반 고성능 컴퓨팅 시스템 구축"
					: "Implemented a high-performance computing system utilizing LGA1700",
		},
		{
			year: 2025,
			month: "09",
			content:
				language === "Korean"
					? "디스크 총 용량 60TB 달성"
					: "Expanded total disk capacity to 60TB",
		},
		{
			year: 2025,
			month: "10",
			content:
				language === "Korean"
					? "디스크 총 용량 70TB 달성"
					: "Expanded total disk capacity to 70TB",
		},
		{
			year: 2026,
			month: "01",
			content:
				language === "Korean"
					? "디스크 총 용량 110TB 달성"
					: "Expanded total disk capacity to 110TB",
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
								zzuniHomelab은 우리가 직접 설계하고 운영하는
								개인 인프라 프로젝트이자, 작은 데이터센터와 같은
								실험 공간입니다. 상업용 솔루션에만 의존하지
								않고, 필요한 기능과 성능을 스스로 구현하고
								검증해 보며, 운영 전반에 대한 이해와 통제력을
								넓혀 가고 있습니다. 네트워크와 스토리지, 가상화
								환경을 하나씩 구축하고 다듬어 가는 과정 속에서,
								더 나은 구조와 안정적인 시스템 운영이 무엇인지
								꾸준히 고민하고 있습니다.
								<br />
								<br />
								이곳은 단순히 서버를 운용하는 취미 공간을 넘어,
								새로운 기술을 실제 환경에서 시험해 보고 경험을
								축적하는 학습의 장이기도 합니다. 오픈소스 기반의
								다양한 기술을 적용하고 비교하며, 성능과 신뢰성을
								균형 있게 높여 가는 것을 중요한 목표로 두고
								있습니다. 구축과 운영 과정에서 만나는 문제들을
								스스로 해결해 나가며, 그 과정이 하나의 경험이자
								자산이 되고 있습니다.
								<br />
								<br />
								zzuniHomelab에서 얻은 배움과 기록은 혼자만을
								위한 결과물로 남기지 않으려 합니다. 우리가 겪은
								시행착오와 개선 과정, 그리고 운영 경험을
								공유함으로써, 비슷한 길을 걷는 분들께 작은
								참고가 되기를 바랍니다. 혼자 만드는
								인프라일지라도, 함께 나누고 이야기할 수 있는
								공간이 되었으면 합니다. <br />
								<br />
								앞으로도 zzuniHomelab은 더 나은 성능과 안정적인
								운영 환경을 향해 천천히, 그러나 꾸준히 발전해
								나가겠습니다. 지켜봐 주시고 함께해 주셔서
								감사합니다.
							</s.GreetingDesc>
							<s.GreetingSignature animate={true}>
								<span>zzuniHomelab PO.</span>
								<img
									src="https://mirror.zzunipark.com/.assets/zzuniPark_Signature.png"
									alt="PO. 박민준"
								/>
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
							<s.HistorySubtitle>
								zzuniHomelab이 걸어온 길을 소개합니다.
							</s.HistorySubtitle>
							<s.HistoryTimeline>
								{[
									...new Set(
										historyData.map((item) => item.year)
									),
								]
									.sort((a, b) => a - b)
									.map((year) => {
										const yearItems = historyData.filter(
											(item) => item.year === year
										);
										let itemIndex = 0;
										return (
											<s.HistoryYearGroup
												key={year}
												$isEven={year % 2 === 0}
											>
												<s.HistoryYearLabelContainer>
													<s.HistoryYearLabel
														$isEven={year % 2 === 0}
													>
														{year}
													</s.HistoryYearLabel>
												</s.HistoryYearLabelContainer>
												<s.HistoryEventList
													$isEven={year % 2 === 0}
												>
													{yearItems.map(
														(item, idx) => (
															<s.HistoryItem
																key={idx}
																index={
																	itemIndex++
																}
																$isEven={
																	year % 2 ===
																	0
																}
															>
																<s.HistoryCard
																	$isEven={
																		year %
																			2 ===
																		0
																	}
																>
																	<s.HistoryCardHeader
																		$isEven={
																			year %
																				2 ===
																			0
																		}
																	>
																		<s.HistoryYearMonth
																			$isEven={
																				year %
																					2 ===
																				0
																			}
																		>
																			{
																				item.month
																			}
																			월
																		</s.HistoryYearMonth>
																		<s.HistoryDesc
																			$isEven={
																				year %
																					2 ===
																				0
																			}
																		>
																			{
																				item.content
																			}
																		</s.HistoryDesc>
																	</s.HistoryCardHeader>
																	{item.image && (
																		<s.HistoryItemImage
																			src={
																				item.image
																			}
																			alt={
																				item.content
																			}
																		/>
																	)}
																</s.HistoryCard>
															</s.HistoryItem>
														)
													)}
												</s.HistoryEventList>
											</s.HistoryYearGroup>
										);
									})}
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
								zzuniHomelab is a personal infrastructure
								project that we design and operate ourselves—an
								experimental space akin to a small data center.
								Rather than relying solely on commercial
								solutions, we implement and validate the
								features and performance we need on our own,
								expanding our understanding and control over the
								entire operation. Through the process of
								building and refining our network, storage, and
								virtualization environments one step at a time,
								we continuously explore what it means to achieve
								better architecture and stable system operation.
								<br />
								<br />
								This place goes beyond being just a hobby space
								for running servers, it is also a learning
								ground where we test new technologies in a real
								environment and accumulate hands-on experience.
								We apply and compare various open-source
								technologies, with the important goal of
								achieving a balanced improvement in both
								performance and reliability. By solving the
								challenges we encounter during setup and
								operation on our own, each experience becomes a
								valuable asset.
								<br />
								<br />
								We do not intend to keep the lessons and records
								from zzuniHomelab solely for ourselves. By
								sharing the trial and error, improvement
								processes, and operational experiences we have
								gone through, we hope to serve as a small
								reference for those walking a similar path. Even
								if it is infrastructure built alone, we hope it
								becomes a space where we can share and discuss
								together.
								<br />
								<br />
								Moving forward, zzuniHomelab will continue to
								evolve slowly but steadily toward better
								performance and a more stable operating
								environment. Thank you for watching over us and
								being part of this journey.
							</s.GreetingDesc>
							<s.GreetingSignature animate={true}>
								<span>zzuniHomelab PO.</span>
								<img
									src="https://mirror.zzunipark.com/.assets/zzuniPark_Signature.png"
									alt="PO. MinJun Park"
								/>
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
							<s.HistorySubtitle>
								A journey through zzuniHomelab's milestones.
							</s.HistorySubtitle>
							<s.HistoryTimeline>
								{[
									...new Set(
										historyData.map((item) => item.year)
									),
								]
									.sort((a, b) => a - b)
									.map((year) => {
										const yearItems = historyData.filter(
											(item) => item.year === year
										);
										let itemIndex = 0;
										return (
											<s.HistoryYearGroup
												key={year}
												$isEven={year % 2 === 0}
											>
												<s.HistoryYearLabelContainer>
													<s.HistoryYearLabel
														$isEven={year % 2 === 0}
													>
														{year}
													</s.HistoryYearLabel>
												</s.HistoryYearLabelContainer>
												<s.HistoryEventList
													$isEven={year % 2 === 0}
												>
													{yearItems.map(
														(item, idx) => (
															<s.HistoryItem
																key={idx}
																index={
																	itemIndex++
																}
																$isEven={
																	year % 2 ===
																	0
																}
															>
																<s.HistoryCard
																	$isEven={
																		year %
																			2 ===
																		0
																	}
																>
																	<s.HistoryCardHeader
																		$isEven={
																			year %
																				2 ===
																			0
																		}
																	>
																		<s.HistoryYearMonth
																			$isEven={
																				year %
																					2 ===
																				0
																			}
																		>
																			{
																				item.month
																			}
																		</s.HistoryYearMonth>
																		<s.HistoryDesc
																			$isEven={
																				year %
																					2 ===
																				0
																			}
																		>
																			{
																				item.content
																			}
																		</s.HistoryDesc>
																	</s.HistoryCardHeader>
																	{item.image && (
																		<s.HistoryItemImage
																			src={
																				item.image
																			}
																			alt={
																				item.content
																			}
																		/>
																	)}
																</s.HistoryCard>
															</s.HistoryItem>
														)
													)}
												</s.HistoryEventList>
											</s.HistoryYearGroup>
										);
									})}
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
