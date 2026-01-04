import React, { useState, useRef, useEffect, useContext } from "react";
import * as s from "./style";
import { CountUpStyle } from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";
import { useNavigate } from "react-router-dom";

const BackgroundVideoKO =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_KO.webm";
const BackgroundVideoEN =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_EN.webm";

function useHasBeenVisible(ref, rootMargin = "0px") {
	const [hasBeenVisible, setHasBeenVisible] = useState(false);
	useEffect(() => {
		if (hasBeenVisible) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasBeenVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin }
		);
		if (ref.current) observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref, rootMargin, hasBeenVisible]);
	return hasBeenVisible;
}

const CountUp = ({ end, duration, suffix = "", prefix = "", animate }) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!animate) return;
		let start = 0;
		const increment = end / (duration / 16);
		const interval = setInterval(() => {
			start += increment;
			if (start >= end) {
				start = end;
				clearInterval(interval);
			}
			setCount(Math.floor(start));
		}, 16);
		return () => clearInterval(interval);
	}, [animate, end, duration]);
	return (
		<CountUpStyle>
			{prefix}
			{count}
			{suffix}
		</CountUpStyle>
	);
};

const MainPage = () => {
	const { language } = useContext(LanguageContext);
	const navigate = useNavigate();
	const handleVideoClick = (e) => {
		e.currentTarget.paused
			? e.currentTarget.play()
			: e.currentTarget.pause();
	};

	const GotoAbout = () => {
		navigate("/about-us");
	};

	const sub1LeftRef = useRef(null);
	const sub1RightRef = useRef(null);
	const sub2TopRef = useRef(null);
	const sub2BottomRef = useRef(null);
	const sub3DescRef = useRef(null);

	const sub1LeftVisible = useHasBeenVisible(sub1LeftRef, "-100px");
	const sub1RightVisible = useHasBeenVisible(sub1RightRef, "-100px");
	const sub2TopVisible = useHasBeenVisible(sub2TopRef, "-100px");
	const sub2BottomVisible = useHasBeenVisible(sub2BottomRef, "-100px");
	const sub3DescVisible = useHasBeenVisible(sub3DescRef, "-100px");

	return (
		<>
			<Navbar />
			{language === "Korean" ? (
				<>
					<s.MainContainer>
						<video
							key="Korean"
							controls={false}
							muted
							autoPlay
							loop
							onClick={handleVideoClick}
							playsInline
						>
							<source src={BackgroundVideoKO} type="video/webm" />
							귀하의 브라우저는 영상 재생 기능을 지원하지
							않습니다. 다른 브라우저로 시도하세요.
						</video>
					</s.MainContainer>
					<s.SubContainer1>
						<s.SubContainer1SectionLeft
							ref={sub1LeftRef}
							animate={sub1LeftVisible}
						>
							<s.SubContainer1SectionSubTitle
								animate={sub1LeftVisible}
							>
								홈랩의 한계를 뛰어넘다
							</s.SubContainer1SectionSubTitle>
							<s.SubContainer1SectionTitle
								animate={sub1LeftVisible}
							>
								가정에서 구현하는
								<br />
								데이터센터
							</s.SubContainer1SectionTitle>
							<s.SubContainer1SectionDescription
								animate={sub1LeftVisible}
							>
								최대 40Gbps QSFP+ 기반 네트워크, 고성능 가상화,
								그리고 최적화된 스토리지.
								<br />
								홈랩도 충분히 강력할 수 있음을 실험하고
								증명합니다.
								<br />
								기업급 인프라를 가정에서도 구축할 수 있다는
								가능성을 탐구합니다.
							</s.SubContainer1SectionDescription>
							<s.SubContainer1SectionButton
								animate={sub1LeftVisible}
								onClick={GotoAbout}
							>
								자세히 보기
							</s.SubContainer1SectionButton>
						</s.SubContainer1SectionLeft>
						<s.SubContainer1SectionRight
							ref={sub1RightRef}
							animate={sub1RightVisible}
						/>
					</s.SubContainer1>
					<s.SubContainer2>
						<s.SubContainer2SectionTop
							ref={sub2TopRef}
							animate={sub2TopVisible}
						>
							<s.SubContainer2SectionSubTitle
								animate={sub2TopVisible}
							>
								고성능을 위한 완벽한 설계
							</s.SubContainer2SectionSubTitle>
							<s.SubContainer2SectionTitle
								animate={sub2TopVisible}
							>
								고속 네트워크와 대용량 스토리지가 만드는 최적의
								성능
							</s.SubContainer2SectionTitle>
						</s.SubContainer2SectionTop>
						<s.SubContainer2SectionBottom
							ref={sub2BottomRef}
							animate={sub2BottomVisible}
						>
							<s.StatsContainer>
								<s.StatsItem>
									<CountUp
										end={40}
										duration={1000}
										suffix="Gbps"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Ethernet Link
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={300}
										duration={1000}
										suffix="Gbps+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Switching Capacity
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={50}
										duration={1000}
										suffix="TB+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Monthly Traffic
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={70}
										duration={1000}
										suffix="TB+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Storage Capacity
									</s.StatsItemDescription>
								</s.StatsItem>
							</s.StatsContainer>
						</s.SubContainer2SectionBottom>
					</s.SubContainer2>
					<s.SubContainer3>
						<s.SubContainer3Section>
							<s.SubContainer3SectionDescription
								ref={sub3DescRef}
								animate={sub3DescVisible}
							>
								zzuniHomelab은 최신 IT 기술과 효율적인 네트워크
								환경을 바탕으로 개인 연구와 실험을 위한 최적의
								인프라를 구축하고 있습니다.
								<br />
								또한 끊임없는 발전과 혁신을 통해 안정적이고
								신뢰성 높은 서비스를 제공하고 있습니다.
							</s.SubContainer3SectionDescription>
						</s.SubContainer3Section>
					</s.SubContainer3>
					<Footerbar />
				</>
			) : (
				<>
					<s.MainContainer>
						<video
							key="English"
							controls={false}
							muted
							autoPlay
							loop
							onClick={handleVideoClick}
							playsInline
						>
							<source src={BackgroundVideoEN} type="video/webm" />
							Your browser does not support video playback. Please
							try another browser.
						</video>
					</s.MainContainer>
					<s.SubContainer1>
						<s.SubContainer1SectionLeft
							ref={sub1LeftRef}
							animate={sub1LeftVisible}
						>
							<s.SubContainer1SectionSubTitle
								animate={sub1LeftVisible}
							>
								Beyond the Limits of a Homelab
							</s.SubContainer1SectionSubTitle>
							<s.SubContainer1SectionTitle
								animate={sub1LeftVisible}
							>
								Datacenter at
								<br />
								Home
							</s.SubContainer1SectionTitle>
							<s.SubContainer1SectionDescription
								animate={sub1LeftVisible}
							>
								Up to 40Gbps QSFP+ based network,
								high-performance virtualization, and optimized
								storage.
								<br />
								We experiment and prove that a homelab can be
								powerful enough.
								<br />
								We explore the possibility of building
								enterprise-level infrastructure at home.
							</s.SubContainer1SectionDescription>
							<s.SubContainer1SectionButton
								animate={sub1LeftVisible}
								onClick={GotoAbout}
							>
								Learn More
							</s.SubContainer1SectionButton>
						</s.SubContainer1SectionLeft>
						<s.SubContainer1SectionRight
							ref={sub1RightRef}
							animate={sub1RightVisible}
						/>
					</s.SubContainer1>
					<s.SubContainer2>
						<s.SubContainer2SectionTop
							ref={sub2TopRef}
							animate={sub2TopVisible}
						>
							<s.SubContainer2SectionSubTitle
								animate={sub2TopVisible}
							>
								A Perfect Design for High Performance
							</s.SubContainer2SectionSubTitle>
							<s.SubContainer2SectionTitle
								animate={sub2TopVisible}
							>
								Optimal Performance Enabled by High-Speed
								Networking and High-Capacity Storage
							</s.SubContainer2SectionTitle>
						</s.SubContainer2SectionTop>
						<s.SubContainer2SectionBottom
							ref={sub2BottomRef}
							animate={sub2BottomVisible}
						>
							<s.StatsContainer>
								<s.StatsItem>
									<CountUp
										end={40}
										duration={1000}
										suffix="Gbps"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Ethernet Link
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={300}
										duration={1000}
										suffix="Gbps+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Switching Capacity
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={50}
										duration={1000}
										suffix="TB+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Monthly Traffic
									</s.StatsItemDescription>
								</s.StatsItem>
								<s.StatsItem>
									<CountUp
										end={70}
										duration={1000}
										suffix="TB+"
										animate={sub2BottomVisible}
									/>
									<s.StatsItemDescription>
										Storage Capacity
									</s.StatsItemDescription>
								</s.StatsItem>
							</s.StatsContainer>
						</s.SubContainer2SectionBottom>
					</s.SubContainer2>
					<s.SubContainer3>
						<s.SubContainer3Section>
							<s.SubContainer3SectionDescription
								ref={sub3DescRef}
								animate={sub3DescVisible}
							>
								zzuniHomelab builds an optimal infrastructure
								for personal research and experimentation based
								on the latest IT technologies and an efficient
								network environment.
								<br />
								Additionally, through continuous development and
								innovation, it provides stable and highly
								reliable services.
							</s.SubContainer3SectionDescription>
						</s.SubContainer3Section>
					</s.SubContainer3>
					<Footerbar />
				</>
			)}
		</>
	);
};

export default MainPage;
