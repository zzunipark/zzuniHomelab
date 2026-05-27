import React, { useContext, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";
import useScrollReveal from "../../hooks/useScrollReveal";
import useServiceStatus from "../../hooks/useServiceStatus";

const HERO_VIDEO = {
	ko: "https://mirror.zzunipark.com/.assets/zzuniHomelab.webm",
	en: "https://mirror.zzunipark.com/.assets/zzuniHomelab.webm",
};

const GALLERY_IMAGES = [
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Gallery1.jpeg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Gallery2.jpeg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Main_SubContainer1.jpg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Main_SubContainer2.jpg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniMirror.jpg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniPark-Log.jpg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniAPI.jpg",
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_AboutusTitle.jpg",
];

const PRIMARY_GALLERY_COUNT = 3;
const MODAL_GALLERY_COUNT = 6;

const SERVICE_ITEMS = [
	{
		title: "zzuniMirror",
		image: "https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniMirror.jpg",
		link: "https://mirror.zzunipark.com",
		description: {
			ko: "오픈 소스 패키지 미러링 서비스",
			en: "Open-source package mirroring service",
		},
		techStack: ["Nginx", "FTPSync", "Rsync", "Shell Script", "OCI"],
	},
	{
		title: "zzuniPark-log",
		image: "https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniPark-Log.jpg",
		link: "https://blog.zzunipark.com",
		description: {
			ko: "배우고 경험한 것을 공유하는 블로그 서비스",
			en: "zzuniPark's blog service",
		},
		techStack: ["Nginx", "Hextra"],
	},
	{
		title: "zzuniAPI",
		image: "https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniAPI.jpg",
		link: "https://api.zzunipark.com",
		description: {
			ko: "공공재로 개방된 무료 API 서비스",
			en: "Publicly available free API service",
		},
		techStack: ["Node.js", "Express", "pm2"],
	},
];

const HISTORY_HIGHLIGHTS = {
	ko: [
		{ date: "2023.01", text: "zzuniHomelab 초기 구축" },
		{ date: "2023.10", text: "zzuniMirror 서비스 시작" },
		{ date: "2024.04", text: "SFP+ 기반 10Gbps 내부망 네트워크 구축" },
		{ date: "2025.04", text: "QSFP+ 기반 40Gbps 내부망 네트워크 구축" },
		{ date: "2026.02", text: "디스크 총 용량 140TB 달성" },
		{ date: "2026.02", text: "광주 · 안양 멀티 사이트 인프라 구축" },
	],
	en: [
		{ date: "2023.01", text: "Initiated the zzuniHomelab project" },
		{ date: "2023.10", text: "Launched the zzuniMirror service" },
		{ date: "2024.04", text: "Upgraded to a 10Gbps SFP+ internal network" },
		{
			date: "2025.04",
			text: "Upgraded to a 40Gbps QSFP+ internal network",
		},
		{ date: "2026.02", text: "Expanded total disk capacity to 140TB" },
		{ date: "2026.02", text: "Established a multi-site infrastructure" },
	],
};

const INFRA_STATS = {
	ko: [
		{ value: "40Gbps", label: "이더넷 링크" },
		{ value: "850Gbps+", label: "스위칭 용량" },
		{ value: "60TB+", label: "월간 트래픽" },
		{ value: "140TB+", label: "스토리지 용량" },
	],
	en: [
		{ value: "40Gbps", label: "Ethernet Link" },
		{ value: "850Gbps+", label: "Switching Capacity" },
		{ value: "60TB+", label: "Monthly Traffic" },
		{ value: "140TB+", label: "Storage Capacity" },
	],
};

const VISION_ITEMS = {
	ko: [
		{
			number: "01",
			icon: "fa-university",
			title: "완전한 자율성과 제어권 확보",
			description:
				"모든 인프라를 직접 구축하고 운영하며 독립적인 데이터센터를 실현합니다.",
			label: "Autonomy",
		},
		{
			number: "02",
			icon: "fa-server",
			title: "고성능, 고효율 인프라 구축",
			description:
				"고속 네트워킹과 컴퓨팅 리소스로 엔터프라이즈급 성능을 구현합니다.",
			label: "Reliability",
		},
		{
			number: "03",
			icon: "fa-tasks",
			title: "지속적인 연구와 기술 발전",
			description:
				"새로운 기술을 실험하고 운영 경험을 바탕으로 꾸준히 개선합니다.",
			label: "Improvement",
		},
		{
			number: "04",
			icon: "fa-share-alt",
			title: "지식 공유와 커뮤니티 기여",
			description:
				"경험과 노하우를 공유하며 커뮤니티의 성장과 발전에 기여합니다.",
			label: "Share",
		},
	],
	en: [
		{
			number: "01",
			icon: "fa-university",
			title: "Full Autonomy and Control",
			description:
				"Build and operate every layer directly to realize an independent datacenter.",
			label: "Autonomy",
		},
		{
			number: "02",
			icon: "fa-server",
			title: "High-Performance Infrastructure",
			description:
				"Deliver enterprise-grade capacity through fast networking and compute resources.",
			label: "Reliability",
		},
		{
			number: "03",
			icon: "fa-tasks",
			title: "Continuous Research and Growth",
			description:
				"Experiment with new technologies and improve through operational experience.",
			label: "Improvement",
		},
		{
			number: "04",
			icon: "fa-share-alt",
			title: "Knowledge Sharing",
			description:
				"Share experience and know-how to contribute to the community's growth.",
			label: "Share",
		},
	],
};

const HARDWARE_HIGHLIGHTS = {
	ko: [
		"40Gbps QSFP+ 내부 네트워크",
		"2.5Gbps RJ45 외부 네트워크",
		"UPS를 통한 전원 백업",
		"3-2-1 백업 전략 준수",
		"RAID 구성으로 데이터 보호",
		"자동화된 모니터링 및 알림",
	],
	en: [
		"40Gbps QSFP+ internal network",
		"2.5Gbps RJ45 external network",
		"Power backup via UPS",
		"Adheres to the 3-2-1 backup strategy",
		"Data protection with RAID configuration",
		"Automated monitoring and alerts",
	],
};

const ABOUT_GREETING_DETAIL = {
	ko: [
		"zzuniHomelab은 우리가 직접 설계하고 운영하는 개인 인프라 프로젝트이자, 작은 데이터센터와 같은 실험 공간입니다. 상업용 솔루션에만 의존하지 않고, 필요한 기능과 성능을 스스로 구현하고 검증해 보며, 운영 전반에 대한 이해와 통제력을 넓혀 가고 있습니다. 네트워크와 스토리지, 가상화 환경을 하나씩 구축하고 다듬어 가는 과정 속에서, 더 나은 구조와 안정적인 시스템 운영이 무엇인지 꾸준히 고민하고 있습니다.",
		"이곳은 단순히 서버를 운용하는 취미 공간을 넘어, 새로운 기술을 실제 환경에서 시험해 보고 경험을 축적하는 학습의 장이기도 합니다. 오픈소스 기반의 다양한 기술을 적용하고 비교하며, 성능과 신뢰성을 균형 있게 높여 가는 것을 중요한 목표로 두고 있습니다. 구축과 운영 과정에서 만나는 문제들을 스스로 해결해 나가며, 그 과정이 하나의 경험이자 자산이 되고 있습니다.",
		"zzuniHomelab에서 얻은 배움과 기록은 혼자만을 위한 결과물로 남기지 않으려 합니다. 우리가 겪은 시행착오와 개선 과정, 그리고 운영 경험을 공유함으로써, 비슷한 길을 걷는 분들께 작은 참고가 되기를 바랍니다. 혼자 만드는 인프라일지라도, 함께 나누고 이야기할 수 있는 공간이 되었으면 합니다.",
		"앞으로도 zzuniHomelab은 더 나은 성능과 안정적인 운영 환경을 향해 천천히, 그러나 꾸준히 발전해 나가겠습니다. 지켜봐 주시고 함께해 주셔서 감사합니다.",
	],
	en: [
		"zzuniHomelab is a personal infrastructure project that we design and operate ourselves—an experimental space akin to a small data center. Rather than relying solely on commercial solutions, we implement and validate the features and performance we need on our own, expanding our understanding and control over the entire operation. Through the process of building and refining our network, storage, and virtualization environments one step at a time, we continuously explore what it means to achieve better architecture and stable system operation.",
		"This place goes beyond being just a hobby space for running servers, it is also a learning ground where we test new technologies in a real environment and accumulate hands-on experience. We apply and compare various open-source technologies, with the important goal of achieving a balanced improvement in both performance and reliability. By solving the challenges we encounter during setup and operation on our own, each experience becomes a valuable asset.",
		"We do not intend to keep the lessons and records from zzuniHomelab solely for ourselves. By sharing the trial and error, improvement processes, and operational experiences we have gone through, we hope to serve as a small reference for those walking a similar path. Even if it is infrastructure built alone, we hope it becomes a space where we can share and discuss together.",
		"Moving forward, zzuniHomelab will continue to evolve slowly but steadily toward better performance and a more stable operating environment. Thank you for watching over us and being part of this journey.",
	],
};

const HISTORY_FULL = {
	ko: [
		{ date: "2023.01", text: "zzuniHomelab 초기 구축" },
		{ date: "2023.01", text: "RJ45기반 2.5Gbps 내부망 네트워크 구축" },
		{ date: "2023.06", text: "Xeon E5-v2 기반 컴퓨팅 시스템 구축" },
		{ date: "2023.08", text: "LGA1150 기반 저전력 컴퓨팅 시스템 구축" },
		{ date: "2023.10", text: "Dell PowerEdge R210 ii 서버 구축" },
		{ date: "2023.10", text: "zzuniMirror 서비스 시작" },
		{
			date: "2023.11",
			text: "총 용량 128GB 메모리의 Xeon E5-v1 기반 컴퓨팅 시스템 구축",
		},
		{ date: "2024.02", text: "디스크 총 용량 10TB 달성" },
		{ date: "2024.03", text: "RJ45기반 2.5Gbps 내/외부망 네트워크 구축" },
		{ date: "2024.04", text: "SFP+기반 10Gbps 내부망 네트워크 구축" },
		{ date: "2024.05", text: "디스크 총 용량 20TB 달성" },
		{ date: "2024.06", text: "Dell PowerEdge R220 서버 구축" },
		{ date: "2024.09", text: "AM4 기반 저전력 스토리지 시스템 구축" },
		{ date: "2025.01", text: "AM4 기반 고성능 컴퓨팅 시스템 구축" },
		{ date: "2025.01", text: "LGA1700 기반 저전력 컴퓨팅 시스템 구축" },
		{ date: "2025.01", text: "디스크 총 용량 30TB 달성" },
		{ date: "2025.02", text: "디스크 총 용량 40TB 달성" },
		{ date: "2025.04", text: "QSFP+ 기반 40Gbps 내부망 네트워크 구축" },
		{ date: "2025.06", text: "디스크 총 용량 50TB 달성" },
		{ date: "2025.06", text: "LGA1700 기반 고성능 컴퓨팅 시스템 구축" },
		{ date: "2025.09", text: "디스크 총 용량 60TB 달성" },
		{ date: "2025.10", text: "디스크 총 용량 70TB 달성" },
		{ date: "2026.01", text: "디스크 총 용량 110TB 달성" },
		{ date: "2026.02", text: "디스크 총 용량 140TB 달성" },
		{
			date: "2026.02",
			text: "광주·안양 2개 지역에 분산된 멀티 사이트 인프라 구축",
		},
	],
	en: [
		{ date: "2023.01", text: "Initiated the zzuniHomelab project" },
		{
			date: "2023.01",
			text: "Deployed a 2.5Gbps RJ45-based internal network",
		},
		{
			date: "2023.06",
			text: "Implemented an Xeon E5-v2-based computing infrastructure",
		},
		{
			date: "2023.08",
			text: "Integrated a low-power computing system utilizing LGA1150 architecture",
		},
		{ date: "2023.10", text: "Deployed a Dell PowerEdge R210 II server" },
		{ date: "2023.10", text: "Launched the zzuniMirror service" },
		{
			date: "2023.11",
			text: "Engineered an Xeon E5-v1-based computing system with 128GB of total memory",
		},
		{ date: "2024.02", text: "Expanded total disk capacity to 10TB" },
		{
			date: "2024.03",
			text: "Established a 2.5Gbps RJ45-based internal and external network",
		},
		{
			date: "2024.04",
			text: "Upgraded to a 10Gbps SFP+ link for internal networking",
		},
		{ date: "2024.05", text: "Expanded total disk capacity to 20TB" },
		{ date: "2024.06", text: "Commissioned a Dell PowerEdge R220 server" },
		{
			date: "2024.09",
			text: "Deployed a low-power storage system leveraging AM4 architecture",
		},
		{
			date: "2025.01",
			text: "Implemented a high-performance computing system utilizing AM4 architecture",
		},
		{
			date: "2025.01",
			text: "Deployed an energy-efficient computing system based on LGA1700",
		},
		{ date: "2025.01", text: "Expanded total disk capacity to 30TB" },
		{ date: "2025.02", text: "Expanded total disk capacity to 40TB" },
		{
			date: "2025.04",
			text: "Upgraded to a 40Gbps QSFP+ link for internal networking",
		},
		{ date: "2025.06", text: "Expanded total disk capacity to 50TB" },
		{
			date: "2025.06",
			text: "Implemented a high-performance computing system utilizing LGA1700",
		},
		{ date: "2025.09", text: "Expanded total disk capacity to 60TB" },
		{ date: "2025.10", text: "Expanded total disk capacity to 70TB" },
		{ date: "2026.01", text: "Expanded total disk capacity to 110TB" },
		{ date: "2026.02", text: "Expanded total disk capacity to 140TB" },
		{
			date: "2026.02",
			text: "Established a multi-site infrastructure distributed across two locations: Gwangju and Anyang",
		},
	],
};

const COPY = {
	ko: {
		heroTitle: "가정에서 구현하는 데이터센터",
		heroSubtitle: "홈랩의 한계를 뛰어넘다",
		heroDescription:
			"최대 40Gbps QSFP+ 기반 네트워크, 고성능 가상화, 그리고 최적화된 스토리지로 엔터프라이즈급 인프라를 구축합니다.",
		heroPrimary: "서비스 보기",
		heroSecondary: "인프라 살펴보기",
		servicesTitle: "서비스",
		servicesSubtitle: "zzuniHomelab의 핵심 비전을 위한 프로젝트",
		infraTitle: "인프라",
		infraSubtitle: "직접 설계하고 운영하는 멀티 사이트 홈랩 스택",
		aboutTitle: "PO 인사말",
		aboutBody: [
			"zzuniHomelab은 우리가 직접 설계하고 운영하는 개인 인프라 프로젝트입니다. 상업용 솔루션에만 의존하지 않고 네트워크, 스토리지, 가상화를 꾸준히 고도화합니다.",
			"오픈소스 기술을 실제 환경에서 시험하고 운영 경험을 공유해, 함께 성장할 수 있는 학습 공간을 지향합니다.",
		],
		visionTitle: "비전",
		historyTitle: "연혁 하이라이트",
		galleryTitle: "갤러리",
		statusTitle: "현황",
		statusSubtitle: "zzuniHomelab의 리소스를 확인하세요.",
		statusButton: "상태 페이지 열기",
		statusDetailsOpen: "상세 사양 보기",
		statusDetailsClose: "상세 사양 닫기",
		statusDetailsTitle: "상세 사양",
		statusHardwareTitle: "하드웨어 특징",
		statusServersTitle: "서버 상세",
		statsTitle: "인프라 규모",
		galleryMore: "갤러리 더보기",
		galleryClose: "닫기",
		contactTitle: "문의 및 연결",
		contactSubtitle: "기술 문의와 협업 제안을 기다립니다.",
		serviceInfoTitle: "서비스 정보",
		contactInfoTitle: "문의 및 신고",
		emailRefusalTitle: "이메일 무단 수집 거부",
		emailRefusalBody:
			"본 웹사이트에 게시된 이메일 주소의 무단 수집을 거부합니다. 위반 시 정보통신망법에 따라 처벌될 수 있습니다.",
		emailRefusalOpen: "전문 보기",
		emailRefusalClose: "전문 닫기",
		emailRefusalLawTitle: "정보통신망 이용촉진 및 정보보호 등에 관한 법률",
		serviceInfo: {
			location: "광주 · 안양, 대한민국",
			bandwidth: "40Gbps 내부망 / 2.5Gbps 외부망",
			hours: "24시간 연중무휴",
			stack: "Proxmox VE / TrueNAS / ZFS",
		},
		statusLabels: {
			servers: "서버",
			regions: "리전",
			memory: "총 메모리",
			storage: "총 스토리지",
		},
		statusDetailLabels: {
			server: "서버",
			cpu: "CPU",
			memory: "RAM",
			storage: "스토리지",
			os: "운영체제",
			location: "위치",
			motherboard: "메인보드",
			network: "네트워크",
		},
	},
	en: {
		heroTitle: "Datacenter at Home",
		heroSubtitle: "Beyond the Limits of a Homelab",
		heroDescription:
			"We build enterprise-grade infrastructure with up to 40Gbps QSFP+ networking, high-performance virtualization, and optimized storage.",
		heroPrimary: "Explore Services",
		heroSecondary: "See Infrastructure",
		servicesTitle: "Services",
		servicesSubtitle: "Projects that power the zzuniHomelab vision",
		infraTitle: "Infrastructure",
		infraSubtitle:
			"A multi-site homelab stack designed and operated in-house",
		aboutTitle: "PO Greeting",
		aboutBody: [
			"zzuniHomelab is a personal infrastructure project we design and operate ourselves. We keep refining networking, storage, and virtualization without relying solely on commercial solutions.",
			"By testing open-source technologies in real environments and sharing operations experience, we aim to be a learning space that grows together.",
		],
		visionTitle: "Vision",
		historyTitle: "Milestone Highlights",
		galleryTitle: "Gallery",
		statusTitle: "Status",
		statusSubtitle: "Check out zzuniHomelab's computing resources.",
		statusButton: "Open Status Page",
		statusDetailsOpen: "Show Details",
		statusDetailsClose: "Hide Details",
		statusDetailsTitle: "Detailed Specs",
		statusHardwareTitle: "Hardware Highlights",
		statusServersTitle: "Server Details",
		statsTitle: "Infrastructure Scale",
		galleryMore: "View More",
		galleryClose: "Close",
		contactTitle: "Contact",
		contactSubtitle: "We welcome technical inquiries and collaboration.",
		serviceInfoTitle: "Service Info",
		contactInfoTitle: "Contact & Report",
		emailRefusalTitle: "Unauthorized Email Collection Refusal",
		emailRefusalBody:
			"Unauthorized collection of email addresses posted on this site is prohibited and may be penalized under applicable law.",
		emailRefusalOpen: "View Full Text",
		emailRefusalClose: "Hide Full Text",
		emailRefusalLawTitle:
			"Act on Promotion of Information and Communications Network Utilization and Information Protection, etc.",
		serviceInfo: {
			location: "Gwangju · Anyang, South Korea",
			bandwidth: "40Gbps internal / 2.5Gbps external",
			hours: "24/7 Available",
			stack: "Proxmox VE / TrueNAS / ZFS",
		},
		statusLabels: {
			servers: "Servers",
			regions: "Regions",
			memory: "Total Memory",
			storage: "Total Storage",
		},
		statusDetailLabels: {
			server: "Server",
			cpu: "CPU",
			memory: "RAM",
			storage: "Storage",
			os: "OS",
			location: "Location",
			motherboard: "Motherboard",
			network: "Network",
		},
	},
};

const EMAIL_REFUSAL_DETAILS = {
	ko: [
		"제50조의2 (전자우편주소의 무단 수집행위 등 금지)",
		"누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.",
		"누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매ㆍ유통하여서는 아니된다.",
		"누구든지 제1항 및 제2항의 규정에 의하여 수집ㆍ판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보 전송에 이용하여서는 아니된다.",
		"제74조 (벌칙) 다음 각호의 1에 해당하는 자는 1천만원 이하의 벌금에 처한다. 제8조제4항의 규정을 위반하여 표시ㆍ판매 또는 판매할 목적으로 진열한 자",
		"제44조의7제1항제1호의 규정을 위반하여 음란한 부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을 배포ㆍ판매ㆍ임대하거나 공연히 전시한 자",
		"제44조의7제1항제3호의 규정을 위반하여 공포심이나 불안감을 유발하는 부호ㆍ문언ㆍ음향ㆍ화상 또는 영상을 반복적으로 상대방에게 도달하게 한 자",
		"제50조제6항의 규정을 위반하여 기술적 조치를 한 자",
		"제50조의8의 규정을 위반하여 광고성 정보를 전송한 자",
		"제50조의2의 규정을 위반하여 전자우편 주소를 수집ㆍ판매ㆍ유통 또는 정보전송에 이용한 자",
		"제50조의8의 규정을 위반하여 광고성 정보를 전송한 자",
		"제53조제4항을 위반하여 등록사항의 변경등록 또는 사업의 양도ㆍ양수 또는 합병ㆍ상속의 신고를 하지 아니한 자",
	],
	en: [
		"Article 50-2 (Prohibition of Unauthorized Collection of Email Addresses, etc.)",
		"No one shall collect email addresses using any program or other technical device that automatically collects email addresses from an internet homepage without the prior consent of the website operator or administrator.",
		"No one shall sell or distribute email addresses collected in violation of paragraph 1.",
		"No one shall use, for information transmission, email addresses that are prohibited from being collected, sold, or distributed under paragraphs 1 and 2.",
		"Article 74 (Penalties) Any person falling under any of the listed violations shall be subject to a fine not exceeding 10,000,000 won.",
		"Those who, in violation of Article 8, paragraph 4, display, mark, or exhibit for sale or for the purpose of sale.",
		"Those who, in violation of Article 44-7, paragraph 1, item 1, distribute, sell, lease, or publicly display obscene symbols, texts, sounds, images, or videos.",
		"Those who, in violation of Article 44-7, paragraph 1, item 3, repeatedly deliver symbols, texts, sounds, images, or videos that induce fear or anxiety.",
		"Those who take technical measures in violation of Article 50, paragraph 6.",
		"Those who transmit advertising information in violation of Article 50-8.",
		"Those who, in violation of Article 50-2, collect, sell, distribute, or use email addresses for information transmission.",
		"Those who transmit advertising information in violation of Article 50-8.",
		"Those who, in violation of Article 53, paragraph 4, fail to report changes in registered details or the transfer, acquisition, merger, or inheritance of the business.",
	],
};

const SERVER_DATA = [
	{
		name: "pve01.gj",
		cpu: "Intel Core i7-13700K @ 3.4GHz",
		memory: "DDR5-5200 96GB On-Die-ECC",
		motherboard: "MSI MAG B760 TOMAHAWK WIFI",
		storage: ["120GB SATA SSD x 2", "500GB SATA SSD x 1"],
		network: [
			"Mellanox ConnectX-3 VPI CX354A (40Gbps)",
			"Realtek RTL8125BG (2.5Gbps)",
		],
		os: "Proxmox VE 9.1",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "pve02.gj",
		cpu: "Intel Core i5-13600K @ 3.5GHz",
		memory: "DDR4-3200 32GB Non-ECC",
		motherboard: "GIGABYTE B760M DS3H D4",
		storage: ["120GB SATA SSD x 2", "500GB SATA SSD x 1"],
		network: ["Intel X520-DA2 (10Gbps)", "Realtek RTL8125BG (2.5Gbps)"],
		os: "Proxmox VE 9.1",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "pve03.gj",
		cpu: "AMD Ryzen 3 4350G @ 3.8GHz",
		memory: "DDR4-3200 8GB Non-ECC",
		motherboard: "GIGABYTE A520M K V2",
		storage: ["128GB Gen3 NVMe x 2"],
		network: ["Realtek RTL8125 (2.5Gbps)"],
		os: "Proxmox VE 9.1",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "pve01.ay",
		cpu: "Intel Xeon E-2144G @ 3.6GHz",
		memory: "DDR4-2400 32GB ECC-Unbuffered",
		motherboard: "ASRockRack E3C242D4U-2T",
		storage: [
			"500GB Gen4 NVMe x 1",
			"4TB SAS HDD x 6",
			"800GB SAS HDD x 2",
		],
		network: ["Intel X550-AT2 (10Gbps)", "Realtek RTL8125 (2.5Gbps)"],
		os: "Proxmox VE 9.1",
		location: "zzuniHomelab Anyang",
	},
	{
		name: "tns01.gj",
		cpu: "AMD Ryzen 7 5700G @ 3.8GHz",
		memory: "DDR4-3200 48GB Non-ECC",
		motherboard: "ASUS PRIME X570-Pro",
		storage: [
			"120GB SATA SSD x 2",
			"512GB Gen4 NVMe x 2",
			"4TB SAS HDD x 12",
			"10TB SAS HDD x 1",
			"16TB SATA HDD x 2",
		],
		network: ["Mellanox ConnectX-3 VPI CX354A (40Gbps)"],
		os: "TrueNAS Scale 24.10",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "mgmt01.gj",
		cpu: "Intel Xeon E3-1270 v3 @ 3.5GHz",
		memory: "DDR3-1600 32GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["250GB SATA SSD x 1", "2TB SATA HDD x 2"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Windows Server 2022 Datacenter",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "mgmt02.gj",
		cpu: "Intel Celeron N100 @ 1.1GHz",
		memory: "DDR4-2133 4GB Non-ECC",
		motherboard: "ASRock N100M",
		storage: ["120GB SATA SSD x 1"],
		network: ["Realtek RTL8125 (2.5Gbps)", "Realtek RTL8111E (1Gbps)"],
		os: "Windows Server 2019 Standard",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "pxe.gj",
		cpu: "Intel Xeon E3-1220 v3 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["250GB SATA SSD x 1", "2TB SATA HDD x 2"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Rocky Linux 9.7",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "pbs.gj",
		cpu: "Intel Xeon E3-1220 v2 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 9T7VV",
		storage: ["120GB SATA SSD x 1", "2TB SATA HDD x 2"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Proxmox Backup Server 4.2",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "misc01.gj",
		cpu: "Intel Pentium J4025 @ 2.00GHz",
		memory: "DDR4-2666 16GB Non-ECC",
		motherboard: "ECS GLKD-I-J4025",
		storage: ["128GB SATA SSD x 1"],
		network: ["Realtek RTL8111 (1Gbps)"],
		os: "Ubuntu Server 24.04",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "fw01.gj",
		cpu: "Intel Xeon E3-1270 v5 @ 3.6GHz",
		memory: "DDR4-2133 16GB ECC-Unbuffered",
		motherboard: "ASRockRack E3C232D4U",
		storage: ["128GB Gen3 NVMe x 1"],
		network: ["Intel I226-V (2.5Gbps)", "Intel I225-V (2.5Gbps)"],
		os: "OPNsense 25.7",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "Synology DS720+",
		cpu: "Intel Celeron J4125 @ 2.0GHz",
		memory: "DDR4-2666 10GB Non-ECC",
		motherboard: "Synology Custom Board",
		storage: ["4TB SATA HDD x 2"],
		network: ["Realtek RTL8156 (2.5Gbps)"],
		os: "DSM 7.3",
		location: "zzuniHomelab Gwangju",
	},
	{
		name: "Mac Mini M1",
		cpu: "Apple Silicon M1 @ 3.2GHz",
		memory: "LPDDR4X-2133 8GB",
		motherboard: "Apple M1 Logic Board",
		storage: ["Gen3 256GB NVMe x 1"],
		network: ["Aquantia AQC107 (10Gbps)"],
		os: "MacOS Sequoia",
		location: "zzuniHomelab Gwangju",
	},
];

const formatCapacity = (capacityGB) => {
	if (capacityGB >= 1024) {
		const capacityTB = capacityGB / 1024;
		return `${capacityTB % 1 === 0 ? capacityTB : capacityTB.toFixed(1)}TB`;
	}
	return `${capacityGB % 1 === 0 ? capacityGB : capacityGB.toFixed(1)}GB`;
};

const parseStorage = (storageItem) => {
	const capacityMatch = storageItem.match(/(\d+(?:\.\d+)?)(GB|TB)/i);
	const multiplierMatch = storageItem.match(/x\s*(\d+)/i);
	if (!capacityMatch) return 0;

	const capacity = parseFloat(capacityMatch[1]);
	const unit = capacityMatch[2].toUpperCase();
	const multiplier = multiplierMatch ? parseInt(multiplierMatch[1]) : 1;

	return (unit === "TB" ? capacity * 1024 : capacity) * multiplier;
};

const calculateServerStats = () => {
	const memoryStats = { DDR3: 0, DDR4: 0, DDR5: 0, LPDDR4X: 0, total: 0 };
	const storageStats = { HDD: 0, "SATA SSD": 0, "NVMe SSD": 0, total: 0 };
	const uniqueLocations = new Set();

	SERVER_DATA.forEach(({ memory, storage, location }) => {
		uniqueLocations.add(location);
		const memoryMatch = memory.match(/(\d+)GB/);
		const memorySize = memoryMatch ? parseInt(memoryMatch[1]) : 0;

		["DDR5", "DDR4", "DDR3", "LPDDR4X"].forEach((type) => {
			if (memory.includes(type)) memoryStats[type] += memorySize;
		});
		memoryStats.total += memorySize;

		storage.forEach((item) => {
			const capacity = parseStorage(item);
			if (item.includes("HDD")) storageStats.HDD += capacity;
			else if (item.includes("NVMe"))
				storageStats["NVMe SSD"] += capacity;
			else if (item.includes("SSD")) storageStats["SATA SSD"] += capacity;
			storageStats.total += capacity;
		});
	});

	return {
		totalServers: SERVER_DATA.length,
		totalLocations: uniqueLocations.size,
		memoryStats,
		storageStats,
	};
};

const getCpuBrand = (cpu) => cpu.split(" @")[0];

const getMemorySize = (memory) => {
	const sizeMatch = memory.match(/(\d+)GB/);
	const ddrMatch = memory.match(/(DDR\d+L?|LPDDR\d+X?)/i);
	const size = sizeMatch ? `${sizeMatch[1]}GB` : "RAM";
	return ddrMatch ? `${ddrMatch[1]} ${size}` : size;
};

const getTotalStorage = (storageArray) => {
	const totalGB = storageArray.reduce(
		(acc, item) => acc + parseStorage(item),
		0,
	);
	return formatCapacity(totalGB);
};

const groupHistoryByYear = (items) =>
	items.reduce((groups, item) => {
		const [year, month] = item.date.split(".");
		const lastGroup = groups[groups.length - 1];
		const event = { ...item, month };

		if (lastGroup?.year === year) {
			lastGroup.items.push(event);
			return groups;
		}

		return [...groups, { year, items: [event] }];
	}, []);

const MainPage = () => {
	const { language } = useContext(LanguageContext);
	const location = useLocation();
	const isKorean = language === "Korean";
	const langKey = isKorean ? "ko" : "en";
	const copy = useMemo(() => COPY[langKey], [langKey]);
	const { status, loading, error } = useServiceStatus();
	const serverStats = useMemo(calculateServerStats, []);
	const historyGroups = useMemo(
		() => groupHistoryByYear(HISTORY_FULL[langKey]),
		[langKey],
	);
	const [isStatusDetailOpen, setIsStatusDetailOpen] = useState(false);
	const [openServerIndex, setOpenServerIndex] = useState(null);
	const [activeInfra, setActiveInfra] = useState(null);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
	const [isEmailLawOpen, setIsEmailLawOpen] = useState(false);
	const statusDetailLabels = copy.statusDetailLabels;
	const primaryGalleryImages = GALLERY_IMAGES.slice(0, PRIMARY_GALLERY_COUNT);
	const modalGalleryImages = GALLERY_IMAGES.slice(0, MODAL_GALLERY_COUNT);
	const hasMoreGallery = GALLERY_IMAGES.length > PRIMARY_GALLERY_COUNT;

	useScrollReveal([location.pathname, language]);

	const statusText = error
		? isKorean
			? "상태 확인 실패"
			: "Status Check Failed"
		: loading
			? isKorean
				? "상태 확인 중..."
				: "Checking status..."
			: isKorean
				? status?.text?.ko || "정상 운영"
				: status?.text?.en || "Operational";

	const statusColor = error
		? "#ef4444"
		: loading
			? "#6b7280"
			: status?.color || "#10b981";

	const handleScrollTo = (targetId) => {
		const section = document.getElementById(targetId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const handleInfraClick = (id) => {
		setActiveInfra((prev) => (prev === id ? null : id));
	};

	const closeGallery = () => {
		setIsGalleryOpen(false);
		setSelectedGalleryImage(null);
	};

	const handleServerToggle = (index) => {
		setOpenServerIndex((prev) => (prev === index ? null : index));
	};

	return (
		<>
			<Navbar />
			<main key={location.pathname} className="page page-transition">
				<section id="home" className="hero-section">
					<video
						className="hero-video"
						muted
						autoPlay
						loop
						playsInline
					>
						<source src={HERO_VIDEO[langKey]} type="video/webm" />
					</video>
					<div className="hero-overlay" />
					<div className="container hero-content">
						<div
							className="hero-badge hero-item"
							style={{ "--delay": "0ms" }}
						>
							<span
								className={`status-dot ${
									!loading && !error && status?.isHealthy
										? "pulse"
										: ""
								}`}
								style={{ backgroundColor: statusColor }}
							/>
							<span>{statusText}</span>
						</div>
						<h1
							className={`hero-title hero-item ${
								isKorean ? "stacked" : ""
							}`}
							style={{ "--delay": "200ms" }}
						>
							{isKorean ? (
								<>
									<span className="hero-title-line">
										가정에서 구현하는
									</span>
									<span className="hero-title-line hero-title-emphasis">
										데이터센터
									</span>
								</>
							) : (
								copy.heroTitle
							)}
						</h1>
						<p
							className="hero-subtitle hero-item"
							style={{ "--delay": "400ms" }}
						>
							{copy.heroSubtitle}
						</p>
						<p
							className="hero-description hero-item"
							style={{ "--delay": "600ms" }}
						>
							{copy.heroDescription}
						</p>
						<div
							className="hero-actions hero-item"
							style={{ "--delay": "800ms" }}
						>
							<button
								className="btn btn-primary"
								onClick={() => handleScrollTo("services")}
							>
								{copy.heroPrimary}
							</button>
							<button
								className="btn btn-secondary"
								onClick={() => handleScrollTo("infrastructure")}
							>
								{copy.heroSecondary}
							</button>
						</div>
					</div>
				</section>

				<section id="services" className="section">
					<div className="container">
						<div className="section-header reveal">
							<h2 className="section-title">
								<i className="fas fa-layer-group" />
								{copy.servicesTitle}
							</h2>
							<p className="section-subtitle">
								{copy.servicesSubtitle}
							</p>
						</div>
						<div className="info-grid">
							{SERVICE_ITEMS.map((service, index) => (
								<article
									key={service.title}
									className="info-card service-card reveal"
									style={{ "--delay": `${index * 80}ms` }}
								>
									<div
										className="service-image"
										style={{
											backgroundImage: `url(${service.image})`,
										}}
									/>
									<div className="service-body">
										<div className="service-title">
											<h3>{service.title}</h3>
											<a
												href={service.link}
												target="_blank"
												rel="noopener noreferrer"
												className="service-link"
											>
												{isKorean
													? "바로가기"
													: "Visit"}
											</a>
										</div>
										<p>{service.description[langKey]}</p>
										<div className="chip-group">
											{service.techStack.map((tech) => (
												<span
													key={tech}
													className="chip"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section id="infrastructure" className="section section-alt">
					<div className="container">
						<div className="section-header reveal">
							<h2 className="section-title">
								<i className="fas fa-network-wired" />
								{copy.infraTitle}
							</h2>
							<p className="section-subtitle">
								{copy.infraSubtitle}
							</p>
						</div>
						<div
							className={`infra-highlight-grid ${
								activeInfra ? "has-active" : ""
							}`}
						>
							<article
								className={`infra-highlight ${
									activeInfra === "greeting"
										? "is-active"
										: ""
								}`}
							>
								<div className="infra-highlight-header">
									<h3>
										<i className="fas fa-user" />
										{copy.aboutTitle}
									</h3>
									<button
										type="button"
										className="infra-highlight-action"
										onClick={() =>
											handleInfraClick("greeting")
										}
										aria-expanded={
											activeInfra === "greeting"
										}
									>
										{activeInfra === "greeting"
											? isKorean
												? "접기"
												: "Collapse"
											: isKorean
												? "자세히 보기"
												: "Expand"}
										<i className="fas fa-chevron-down" />
									</button>
								</div>
								<div className="infra-highlight-preview">
									{copy.aboutBody.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
								</div>
								<div className="infra-highlight-detail">
									{ABOUT_GREETING_DETAIL[langKey].map(
										(paragraph) => (
											<p
												key={paragraph}
												className="infra-highlight-detail-text"
											>
												{paragraph}
											</p>
										),
									)}
									<div className="infra-highlight-signature">
										<strong>
											{isKorean
												? "zzuniHomelab PO. 박민준"
												: "zzuniHomelab PO. MinJun Park"}
										</strong>
									</div>
								</div>
							</article>
							<article
								className={`infra-highlight ${
									activeInfra === "vision" ? "is-active" : ""
								}`}
							>
								<div className="infra-highlight-header">
									<h3>
										<i className="fas fa-eye" />
										{copy.visionTitle}
									</h3>
									<button
										type="button"
										className="infra-highlight-action"
										onClick={() =>
											handleInfraClick("vision")
										}
										aria-expanded={activeInfra === "vision"}
									>
										{activeInfra === "vision"
											? isKorean
												? "접기"
												: "Collapse"
											: isKorean
												? "자세히 보기"
												: "Expand"}
										<i className="fas fa-chevron-down" />
									</button>
								</div>
								<p className="infra-highlight-preview">
									{isKorean
										? "zzuniHomelab이 추구하는 방향과 핵심 가치를 확인하세요."
										: "Discover the direction and core values behind zzuniHomelab."}
								</p>
								<div className="infra-highlight-detail">
									<div className="vision-composition">
										<div className="vision-summary-panel">
											<span>zzuniHomelab Vision</span>
											<strong>
												{isKorean
													? "직접 운영하는 인프라를 더 안정적이고 열린 방향으로 발전시킵니다."
													: "Evolving self-operated infrastructure toward reliability and openness."}
											</strong>
											<p>
												{isKorean
													? "자율성, 성능, 개선, 공유를 운영 판단의 기준으로 삼습니다."
													: "Autonomy, performance, improvement, and sharing guide every operations decision."}
											</p>
										</div>
										<div className="vision-principle-list">
											{VISION_ITEMS[langKey].map(
												(item) => (
													<div
														key={item.number}
														className="vision-principle-item"
													>
														<span className="vision-principle-number">
															{item.number}
														</span>
														<div>
															<strong>
																<i
																	className={`fas ${item.icon}`}
																/>
																{item.title}
															</strong>
															<p>
																{
																	item.description
																}
															</p>
															<span>
																{item.label}
															</span>
														</div>
													</div>
												),
											)}
										</div>
									</div>
								</div>
							</article>
							<article
								className={`infra-highlight ${
									activeInfra === "history" ? "is-active" : ""
								}`}
							>
								<div className="infra-highlight-header">
									<h3>
										<i className="fas fa-clock" />
										{copy.historyTitle}
									</h3>
									<button
										type="button"
										className="infra-highlight-action"
										onClick={() =>
											handleInfraClick("history")
										}
										aria-expanded={
											activeInfra === "history"
										}
									>
										{activeInfra === "history"
											? isKorean
												? "접기"
												: "Collapse"
											: isKorean
												? "자세히 보기"
												: "Expand"}
										<i className="fas fa-chevron-down" />
									</button>
								</div>
								<div className="infra-highlight-preview">
									{HISTORY_HIGHLIGHTS[langKey].map((item) => (
										<div
											key={item.date}
											className="infra-history-preview-item"
										>
											<span>{item.date}</span>
											<span>{item.text}</span>
										</div>
									))}
								</div>
								<div className="infra-highlight-detail">
									<div className="infra-history-flow">
										{historyGroups.map((group) => (
											<div
												key={group.year}
												className="infra-history-year-group"
											>
												<div className="infra-history-year">
													<strong>
														{group.year}
													</strong>
													<span>
														{isKorean
															? `${group.items.length}개 기록`
															: `${group.items.length} entries`}
													</span>
												</div>
												<div className="infra-history-events">
													{group.items.map((item) => (
														<div
															key={`${item.date}-${item.text}`}
															className="infra-history-event"
														>
															<span>
																{item.month}
															</span>
															<p>{item.text}</p>
														</div>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</article>
						</div>
						<div
							className="section-header reveal"
							style={{ marginTop: "40px" }}
						>
							<h3 className="section-title">
								<i className="fas fa-gauge" />
								{copy.statsTitle}
							</h3>
						</div>
						<div className="stats-grid">
							{INFRA_STATS[langKey].map((stat, index) => (
								<div
									key={stat.label}
									className="stat-item reveal"
									style={{ "--delay": `${index * 80}ms` }}
								>
									<span className="stat-number">
										{stat.value}
									</span>
									<span className="stat-label">
										{stat.label}
									</span>
								</div>
							))}
						</div>
						<div
							className="chip-group chip-group-centered"
							style={{ marginTop: "24px" }}
						>
							{HARDWARE_HIGHLIGHTS[langKey].map((item, index) => (
								<span
									key={item}
									className="chip reveal"
									style={{ "--delay": `${index * 60}ms` }}
								>
									{item}
								</span>
							))}
						</div>
						<div
							className="section-header reveal"
							style={{ marginTop: "48px" }}
						>
							<h3 className="section-title">
								<i className="fas fa-images" />
								{copy.galleryTitle}
							</h3>
						</div>
						<div className="gallery-grid">
							{primaryGalleryImages.map((src, index) => (
								<div
									key={src}
									className="gallery-item reveal"
									style={{ "--delay": `${index * 80}ms` }}
									onClick={() => setIsGalleryOpen(true)}
									role="button"
									tabIndex={0}
									onKeyDown={(event) => {
										if (
											event.key === "Enter" ||
											event.key === " "
										) {
											event.preventDefault();
											setIsGalleryOpen(true);
										}
									}}
								>
									<img src={src} alt={`gallery-${index}`} />
								</div>
							))}
						</div>
						{hasMoreGallery && (
							<button
								className="gallery-more-button"
								onClick={() => setIsGalleryOpen(true)}
							>
								{copy.galleryMore}
								<i className="fas fa-arrow-right" />
							</button>
						)}
						<div
							className={`gallery-modal ${
								isGalleryOpen ? "open" : ""
							}`}
						>
							<div
								className="gallery-modal-overlay"
								onClick={closeGallery}
							/>
							<div className="gallery-modal-content">
								<div className="gallery-modal-header">
									<h3>{copy.galleryTitle}</h3>
									<button
										className="gallery-modal-close"
										onClick={closeGallery}
									>
										{copy.galleryClose}
									</button>
								</div>
								<div className="gallery-modal-grid">
									{modalGalleryImages.map((src, index) => (
										<button
											type="button"
											key={`${src}-${index}`}
											className="gallery-modal-item"
											onClick={() =>
												setSelectedGalleryImage(src)
											}
										>
											<img
												src={src}
												alt={`gallery-modal-${index}`}
											/>
										</button>
									))}
								</div>
							</div>
						</div>
						<div
							className={`image-preview-modal ${
								selectedGalleryImage ? "open" : ""
							}`}
						>
							<div
								className="image-preview-overlay"
								onClick={() => setSelectedGalleryImage(null)}
							/>
							<div className="image-preview-content">
								<button
									type="button"
									className="image-preview-close"
									onClick={() =>
										setSelectedGalleryImage(null)
									}
									aria-label={copy.galleryClose}
								>
									<i className="fas fa-times" />
								</button>
								{selectedGalleryImage && (
									<img
										src={selectedGalleryImage}
										alt={copy.galleryTitle}
									/>
								)}
							</div>
						</div>
					</div>
				</section>

				<section id="status" className="section">
					<div className="container">
						<div className="section-header reveal">
							<h2 className="section-title">
								<i className="fas fa-chart-line" />
								{copy.statusTitle}
							</h2>
							<p className="section-subtitle">
								{copy.statusSubtitle}
							</p>
						</div>
						<div className="status-banner reveal">
							<span
								className={`status-dot ${
									!loading && !error && status?.isHealthy
										? "pulse"
										: ""
								}`}
								style={{ backgroundColor: statusColor }}
							/>
							<span>{statusText}</span>
						</div>
						<div
							className="stats-grid"
							style={{ marginTop: "24px" }}
						>
							<div className="stat-item reveal">
								<span className="stat-number">
									{serverStats.totalServers}
								</span>
								<span className="stat-label">
									{copy.statusLabels.servers}
								</span>
							</div>
							<div
								className="stat-item reveal"
								style={{ "--delay": "80ms" }}
							>
								<span className="stat-number">
									{serverStats.totalLocations}
								</span>
								<span className="stat-label">
									{copy.statusLabels.regions}
								</span>
							</div>
							<div
								className="stat-item reveal"
								style={{ "--delay": "160ms" }}
							>
								<span className="stat-number">
									{serverStats.memoryStats.total}GB
								</span>
								<span className="stat-label">
									{copy.statusLabels.memory}
								</span>
							</div>
							<div
								className="stat-item reveal"
								style={{ "--delay": "240ms" }}
							>
								<span className="stat-number">
									{formatCapacity(
										serverStats.storageStats.total,
									)}
								</span>
								<span className="stat-label">
									{copy.statusLabels.storage}
								</span>
							</div>
						</div>
						<div className="status-detail">
							<button
								className={`status-detail-toggle ${
									isStatusDetailOpen ? "is-open" : ""
								}`}
								onClick={() =>
									setIsStatusDetailOpen((prev) => !prev)
								}
								aria-expanded={isStatusDetailOpen}
							>
								<span>
									{isStatusDetailOpen
										? copy.statusDetailsClose
										: copy.statusDetailsOpen}
								</span>
								<i className="fas fa-chevron-down" />
							</button>
							<div
								className={`status-detail-panel ${
									isStatusDetailOpen ? "is-open" : ""
								}`}
							>
								<div className="status-detail-inner">
									<div className="status-detail-block">
										<h3 className="status-detail-title">
											{copy.statusServersTitle}
										</h3>
										<div className="status-server-list">
											{SERVER_DATA.map(
												(server, index) => {
													const isOpen =
														openServerIndex ===
														index;
													return (
														<div
															key={server.name}
															className={`status-server-item ${
																isOpen
																	? "is-open"
																	: ""
															}`}
														>
															<button
																className="status-server-summary"
																onClick={() =>
																	handleServerToggle(
																		index,
																	)
																}
																aria-expanded={
																	isOpen
																}
															>
																<div className="status-server-cell status-server-name">
																	<span className="status-server-label">
																		{
																			statusDetailLabels.server
																		}
																	</span>
																	<span className="status-server-value">
																		{
																			server.name
																		}
																	</span>
																</div>
																<div className="status-server-cell">
																	<span className="status-server-label">
																		{
																			statusDetailLabels.cpu
																		}
																	</span>
																	<span className="status-server-value">
																		{getCpuBrand(
																			server.cpu,
																		)}
																	</span>
																</div>
																<div className="status-server-cell">
																	<span className="status-server-label">
																		{
																			statusDetailLabels.memory
																		}
																	</span>
																	<span className="status-server-value">
																		{getMemorySize(
																			server.memory,
																		)}
																	</span>
																</div>
																<div className="status-server-cell">
																	<span className="status-server-label">
																		{
																			statusDetailLabels.storage
																		}
																	</span>
																	<span className="status-server-value">
																		{getTotalStorage(
																			server.storage,
																		)}
																	</span>
																</div>
																<div className="status-server-cell">
																	<span className="status-server-label">
																		{
																			statusDetailLabels.location
																		}
																	</span>
																	<span className="status-server-value">
																		{
																			server.location.split(
																				" ",
																			)[1]
																		}
																	</span>
																</div>
																<i className="fas fa-chevron-down" />
															</button>
															<div className="status-server-detail">
																<div className="status-server-detail-grid">
																	<div className="status-server-detail-item">
																		<strong>
																			{
																				statusDetailLabels.cpu
																			}
																		</strong>
																		<span>
																			{
																				server.cpu
																			}
																		</span>
																	</div>
																	<div className="status-server-detail-item">
																		<strong>
																			{
																				statusDetailLabels.memory
																			}
																		</strong>
																		<span>
																			{
																				server.memory
																			}
																		</span>
																	</div>
																	<div className="status-server-detail-item is-wide">
																		<strong>
																			{
																				statusDetailLabels.motherboard
																			}
																		</strong>
																		<span>
																			{
																				server.motherboard
																			}
																		</span>
																	</div>
																	<div className="status-server-detail-item is-wide">
																		<strong>
																			{
																				statusDetailLabels.storage
																			}
																		</strong>
																		<ul>
																			{server.storage.map(
																				(
																					item,
																					idx,
																				) => (
																					<li
																						key={`${server.name}-storage-${idx}`}
																					>
																						{
																							item
																						}
																					</li>
																				),
																			)}
																		</ul>
																	</div>
																	<div className="status-server-detail-item is-wide">
																		<strong>
																			{
																				statusDetailLabels.network
																			}
																		</strong>
																		<ul>
																			{server.network.map(
																				(
																					item,
																					idx,
																				) => (
																					<li
																						key={`${server.name}-network-${idx}`}
																					>
																						{
																							item
																						}
																					</li>
																				),
																			)}
																		</ul>
																	</div>
																	<div className="status-server-detail-item">
																		<strong>
																			{
																				statusDetailLabels.os
																			}
																		</strong>
																		<span>
																			{
																				server.os
																			}
																		</span>
																	</div>
																	<div className="status-server-detail-item">
																		<strong>
																			{
																				statusDetailLabels.location
																			}
																		</strong>
																		<span>
																			{
																				server.location
																			}
																		</span>
																	</div>
																</div>
															</div>
														</div>
													);
												},
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div style={{ marginTop: "24px" }}>
							<a
								href="https://status.zzunipark.com"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary"
							>
								{copy.statusButton}
							</a>
						</div>
					</div>
				</section>

				<section id="contact" className="section section-alt">
					<div className="container">
						<div className="section-header reveal">
							<h2 className="section-title">
								<i className="fas fa-envelope" />
								{copy.contactTitle}
							</h2>
							<p className="section-subtitle">
								{copy.contactSubtitle}
							</p>
						</div>
						<div className="contact-card-stack">
							<article
								className="info-card contact-wide-card reveal"
								style={{ "--delay": "0ms" }}
							>
								<h3>
									<i className="fas fa-headset" />
									{copy.contactInfoTitle}
								</h3>
								<div className="contact-grid">
									<div className="contact-item">
										<i className="fas fa-envelope" />
										<div>
											<strong>
												{isKorean
													? "기술 문의"
													: "Technical"}
											</strong>
											<br />
											<a href="mailto:me@zzunipark.com">
												me@zzunipark.com
											</a>
										</div>
									</div>
									<div className="contact-item">
										<i className="fas fa-shield-halved" />
										<div>
											<strong>
												{isKorean
													? "오남용 신고"
													: "Abuse Report"}
											</strong>
											<br />
											<a
												href="https://abuse.zzunipark.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												https://abuse.zzunipark.com
											</a>
										</div>
									</div>
									<div className="contact-item">
										<i className="fab fa-github" />
										<div>
											<strong>GitHub</strong>
											<br />
											<a
												href="https://github.com/zzunipark/zzuniHomelab"
												target="_blank"
												rel="noopener noreferrer"
											>
												github.com/zzunipark/zzuniHomelab
											</a>
										</div>
									</div>
								</div>
							</article>
							<article
								className="info-card contact-wide-card reveal"
								style={{ "--delay": "80ms" }}
							>
								<h3>
									<i className="fas fa-ban" />
									{copy.emailRefusalTitle}
								</h3>
								<p>{copy.emailRefusalBody}</p>
								<button
									type="button"
									className={`email-refusal-toggle ${
										isEmailLawOpen ? "is-open" : ""
									}`}
									onClick={() =>
										setIsEmailLawOpen((prev) => !prev)
									}
									aria-expanded={isEmailLawOpen}
								>
									<span>
										{isEmailLawOpen
											? copy.emailRefusalClose
											: copy.emailRefusalOpen}
									</span>
									<i className="fas fa-chevron-down" />
								</button>
								<div
									className={`email-refusal-detail ${
										isEmailLawOpen ? "is-open" : ""
									}`}
								>
									<div className="email-refusal-body">
										<strong>
											{copy.emailRefusalLawTitle}
										</strong>
										{EMAIL_REFUSAL_DETAILS[langKey].map(
											(paragraph) => (
												<p key={paragraph}>
													{paragraph}
												</p>
											),
										)}
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>
			</main>
			<Footerbar />
		</>
	);
};

export default MainPage;
