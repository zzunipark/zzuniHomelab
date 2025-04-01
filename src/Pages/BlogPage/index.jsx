import React, { useContext, useEffect, useState, useRef } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const BlogPage = () => {
	const { language } = useContext(LanguageContext);
	const [remainingTime, setRemainingTime] = useState(5000);
	const [isPaused, setIsPaused] = useState(false);
	const lastTickRef = useRef(Date.now());

	useEffect(() => {
		if (!isPaused) {
			lastTickRef.current = Date.now();
			const interval = setInterval(() => {
				const now = Date.now();
				const delta = now - lastTickRef.current;
				lastTickRef.current = now;
				setRemainingTime((prev) =>
					prev - delta > 0 ? prev - delta : 0
				);
			}, 50);
			return () => clearInterval(interval);
		}
	}, [isPaused]);

	useEffect(() => {
		if (remainingTime <= 0) {
			window.location.href = "https://blog.zzunipark.com";
		}
	}, [remainingTime]);

	const countdown = Math.ceil(remainingTime / 1000);
	const progressPercent = (remainingTime / 5000) * 100;
	const messageText =
		remainingTime > 0
			? language === "Korean"
				? `5초 후 https://blog.zzunipark.com 으로 이동됩니다. 남은 시간: ${countdown}초`
				: `Redirecting to https://blog.zzunipark.com in 5 seconds. Time left: ${countdown} seconds`
			: language === "Korean"
			? "이동중입니다.."
			: "Redirecting...";
	const pauseResumeText = isPaused
		? language === "Korean"
			? "재개"
			: "Resume"
		: language === "Korean"
		? "일시정지"
		: "Pause";
	const redirectNowText =
		language === "Korean" ? "즉시 이동" : "Redirect Now";
	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};
	const handleRedirectNow = () => {
		window.location.href = "https://blog.zzunipark.com";
	};

	return (
		<s.PageContainer>
			<Navbar />
			<s.MainContainer>
				<s.Message>{messageText}</s.Message>
				<s.ProgressBarContainer>
					<s.ProgressBar progress={progressPercent} />
				</s.ProgressBarContainer>
				<s.ButtonContainer>
					<s.Button onClick={handlePauseResume}>
						{pauseResumeText}
					</s.Button>
					<s.Button onClick={handleRedirectNow}>
						{redirectNowText}
					</s.Button>
				</s.ButtonContainer>
			</s.MainContainer>
			<Footerbar />
		</s.PageContainer>
	);
};

export default BlogPage;
