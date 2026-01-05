import React, { useState, useEffect } from "react";
import * as s from "./style";

const STORAGE_KEY = "zzuniHomelab_newYearPopup2026_hideUntil";

const NewYearPopup = () => {
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
				<s.Title>2026, 붉은 말의 해</s.Title>
				<s.SubTitle>丙午年</s.SubTitle>

				<s.Content>
					<s.Paragraph>
						지난 한 해를 돌아보면, zzuniHomelab에게는 그 어느 때보다 변화와 도전이 가득한 시간이었습니다. QSFP+ 기반의 40Gbps 내부망을 구축하며 네트워크 인프라의 큰 전환점을 맞았고, LGA1700 플랫폼을 바탕으로 한 고성능 컴퓨팅 시스템을 도입해 연산 환경의 수준을 한 단계 끌어올렸습니다.
					</s.Paragraph>

					<s.Paragraph>
						스토리지 환경 또한 꾸준히 확장하여 총 70TB 규모에 이르렀고, 원격 관리 체계를 정비해 KVM/IPMI를 통해 대부분의 서버를 BIOS 단계까지 관리할 수 있는 환경을 완성했습니다.
					</s.Paragraph>

					<s.Paragraph>
						2026년에도 zzuniHomelab은 멈추지 않고 발전을 이어가겠습니다. 새로운 기술을 탐구하고, 더 나은 성능과 운영 경험을 향해 차근차근 나아가며, 그 과정에서 얻은 배움과 경험을 계속해서 나누겠습니다.
					</s.Paragraph>

					<s.Paragraph>
						올 한 해도 지켜봐 주시고 함께해 주셔서 감사합니다.
					</s.Paragraph>
				</s.Content>

				<s.Greeting>
					2026년, 힘차게 도약하는 한 해 되시길 바랍니다.
				</s.Greeting>

				<s.Signature>
					<img src="https://mirror.zzunipark.com/.assets/zzuniPark_Signature.png" alt="PO. 박민준" />
				</s.Signature>

				<s.ButtonContainer>
					<s.DontShowButton onClick={handleDontShowFor7Days}>
						7일간 보지 않기
					</s.DontShowButton>
					<s.CloseButton onClick={handleClose}>
						닫기
					</s.CloseButton>
				</s.ButtonContainer>
			</s.PopupContainer>
		</>
	);
};

export default NewYearPopup;
