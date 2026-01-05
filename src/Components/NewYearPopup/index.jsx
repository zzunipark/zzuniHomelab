import React, { useState, useEffect, useContext } from "react";
import * as s from "./style";
import { LanguageContext } from "../../Context/LanguageContext";

const STORAGE_KEY = "zzuniHomelab_newYearPopup2026_hideUntil";

const NewYearPopup = () => {
	const { language } = useContext(LanguageContext);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const hideUntil = localStorage.getItem(STORAGE_KEY);
		if (hideUntil) {
			const hideUntilDate = new Date(hideUntil);
			if (new Date() < hideUntilDate) {
				return;
			}
		}
		setIsVisible(true);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
	};

	const handleDontShowFor7Days = () => {
		const hideUntil = new Date();
		hideUntil.setDate(hideUntil.getDate() + 7);
		localStorage.setItem(STORAGE_KEY, hideUntil.toISOString());
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<>
			<s.Overlay onClick={handleClose} />
			<s.PopupContainer>
				{language === "Korean" ? (
					<>
						<s.Title>2026, 붉은 말의 해</s.Title>
						<s.SubTitle>丙午年</s.SubTitle>

						<s.Content>
							<s.Paragraph>
								지난 한 해를 돌아보면, zzuniHomelab에게는 그 어느 때보다
								변화와 도전이 가득한 시간이었습니다. QSFP+ 기반의 40Gbps
								내부망을 구축하며 네트워크 인프라의 큰 전환점을 맞았고,
								LGA1700 플랫폼을 바탕으로 한 고성능 컴퓨팅 시스템을
								도입해 연산 환경의 수준을 한 단계 끌어올렸습니다.
							</s.Paragraph>

							<s.Paragraph>
								스토리지 환경 또한 꾸준히 확장하여 총 70TB 규모에
								이르렀고, 원격 관리 체계를 정비해 KVM/IPMI를 통해
								대부분의 서버를 BIOS 단계까지 관리할 수 있는 환경을
								완성했습니다.
							</s.Paragraph>

							<s.Paragraph>
								2026년에도 zzuniHomelab은 멈추지 않고 발전을
								이어가겠습니다. 새로운 기술을 탐구하고, 더 나은 성능과
								운영 경험을 향해 차근차근 나아가며, 그 과정에서 얻은
								배움과 경험을 계속해서 나누겠습니다.
							</s.Paragraph>

							<s.Paragraph>
								올 한 해도 지켜봐 주시고 함께해 주셔서 감사합니다.
							</s.Paragraph>
						</s.Content>

						<s.Greeting>
							2026년, 힘차게 도약하는 한 해 되시길 바랍니다.
						</s.Greeting>

						<s.Signature>
							<span>zzuniHomelab PO.</span>
							<img
								src="https://mirror.zzunipark.com/.assets/zzuniPark_Signature.png"
								alt="PO. 박민준"
							/>
						</s.Signature>

						<s.ButtonContainer>
							<s.DontShowButton onClick={handleDontShowFor7Days}>
								7일간 보지 않기
							</s.DontShowButton>
							<s.CloseButton onClick={handleClose}>닫기</s.CloseButton>
						</s.ButtonContainer>
					</>
				) : (
					<>
						<s.Title>2026, Year of the Red Horse</s.Title>
						<s.SubTitle>丙午年</s.SubTitle>

						<s.Content>
							<s.Paragraph>
								Looking back at the past year, it has been a time of
								unprecedented change and challenge for zzuniHomelab.
								We reached a major turning point in our network infrastructure
								by building a QSFP+ based 40Gbps internal network, and elevated
								our computing environment by introducing high-performance
								systems based on the LGA1700 platform.
							</s.Paragraph>

							<s.Paragraph>
								Our storage environment has also steadily expanded to a total
								of 70TB, and we have completed a remote management system that
								allows us to manage most servers down to the BIOS level via
								KVM/IPMI.
							</s.Paragraph>

							<s.Paragraph>
								In 2026, zzuniHomelab will continue to evolve. We will explore
								new technologies, steadily move toward better performance and
								operational experience, and continue to share the lessons and
								experiences we gain along the way.
							</s.Paragraph>

							<s.Paragraph>
								Thank you for watching over us and being part of this journey.
							</s.Paragraph>
						</s.Content>

						<s.Greeting>
							Wishing you a year of powerful leaps forward in 2026.
						</s.Greeting>

						<s.Signature>
							<span>zzuniHomelab PO.</span>
							<img
								src="https://mirror.zzunipark.com/.assets/zzuniPark_Signature.png"
								alt="PO. MinJun Park"
							/>
						</s.Signature>

						<s.ButtonContainer>
							<s.DontShowButton onClick={handleDontShowFor7Days}>
								Don't show for 7 days
							</s.DontShowButton>
							<s.CloseButton onClick={handleClose}>Close</s.CloseButton>
						</s.ButtonContainer>
					</>
				)}
			</s.PopupContainer>
		</>
	);
};

export default NewYearPopup;
