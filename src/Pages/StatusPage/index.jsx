import React, { useContext } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const imageNames = [
	"amd",
	"cisco",
	"cloudflare",
	"dell",
	"docker",
	"eoptolink",
	"grafana",
	"influxdb",
	"intel",
	"nginx",
	"oci",
	"portainer",
	"proxmox",
	"tailscale",
	"tplink",
	"ubuntu",
	"windowsserver",
];

const hardwareItemsKR = [
	"10Gbps SFP+ 내부 네트워크",
	"2.5Gbps RJ45 외부 네트워크",
	"UPS를 통한 전원 백업",
	"3-2-1 백업 전략 준수",
	"RAID 구성으로 데이터 보호",
	"하드웨어 모니터링 & 원격 관리",
	"유연한 확장성",
	"24시간 NVR 모니터링",
	"자동화된 모니터링 및 알림",
	"저소음 & 저전력 설계",
	"24시간 365일 가동",
	"ZFS / BTRFS 파일 시스템",
];

const hardwareItemsEN = [
	"10Gbps SFP+ internal network",
	"2.5Gbps RJ45 external network",
	"Power backup via UPS",
	"Adheres to the 3-2-1 backup strategy",
	"Data protection with RAID configuration",
	"Hardware monitoring & remote management",
	"Flexible scalability",
	"24/7 NVR monitoring",
	"Automated monitoring and alerts",
	"Low-noise & energy-efficient design",
	"Operational 24/7/365",
	"ZFS / BTRFS file systems",
];

const serverData = [
	{
		name: "HypervisorSV",
		cpu: "AMD Ryzen 5 5500GT @ 3.6GHz",
		memory: "DDR4-3200 64GB",
		storage: "Gen4 256GB NVMe",
		network: "Intel X520-DA2 / 10Gbps x 2 LACP",
		os: "Proxmox VE 8.2",
	},
	{
		name: "TruenasSV",
		cpu: "AMD Ryzen 3 4350G @ 3.8GHz",
		memory: "DDR4-3200 40GB",
		storage:
			"2TB SATA HDD x 8 + Gen4 512GB NVMe x 2 + Gen4 256GB NVMe x 2 + Gen 3 128GB NVMe",
		network: "Intel X520-DA2 / 10Gbps x 2 LACP",
		os: "TrueNAS Scale 24.10",
	},
	{
		name: "MirrorSV",
		cpu: "Intel Processor N100 @ 3.4GHz",
		memory: "DDR4-3200 8GB",
		storage: "16TB SATA HDD",
		network: "RTL8125 / 2.5Gbps x 2",
		os: "Ubuntu Server 22.04",
	},
	{
		name: "WindowsSV",
		cpu: "Intel Xeon E3-1270 v3 @ 3.5GHz",
		memory: "DDR3-1600 32GB",
		storage: "128GB SATA SSD",
		network: "X520-DA2 / 10Gbps x 1",
		os: "Windows Server 2022 Datacenter",
	},
	{
		name: "UbuntuSV",
		cpu: "Intel Xeon E3-1220 v3 @ 3.1GHz",
		memory: "DDR3-1600 16GB",
		storage: "128GB SATA SSD",
		network: "X520-DA2 / 10Gbps x 1",
		os: "Ubuntu Server 24.04",
	},
	{
		name: "RockySV",
		cpu: "Intel Xeon E3-1220 v2 @ 3.1GHz",
		memory: "DDR3-1600 16GB",
		storage: "128GB SATA SSD",
		network: "Embedded BCM5716 / 1Gbps x 1",
		os: "Rocky 9.5",
	},
	{
		name: "Synology DS720+",
		cpu: "Intel Celeron J4125 @ 2.0GHz",
		memory: "DDR4-2666 18GB",
		storage: "4TB SATA HDD x 2 + Gen3 128GB NVMe x 2",
		network: "RTL8156 / 2.5Gbps x 1",
		os: "DSM 7.2.2",
	},
	{
		name: "Mac Mini M1",
		cpu: "Apple Silicon M1 @ 3.2GHz",
		memory: "LPDDR4X-2133 8GB",
		storage: "Gen 3 256GB NVMe",
		network: "AQC107 / 10Gbps x 1",
		os: "MacOS Sequoia",
	},
	{
		name: "NutSV",
		cpu: "Intel Celeron J4025 @ 2.0GHz",
		memory: "DDR4-2666 8GB",
		storage: "128GB SATA SSD",
		network: "RTL8156 / 2.5Gbps x 1",
		os: "Ubuntu Server 22.04",
	},
];

const sliderDescKR =
	"zzuniHomelab은 여러 기업과 단체의 기술을 활용하며 발전하고 있습니다.";
const sliderDescEN =
	"zzuniHomelab leverages the technology of various companies and organizations to drive its growth.";

const logos = imageNames.reduce((acc, name) => {
	acc[name] = require(`../../Assets/images/png/${name}.png`);
	return acc;
}, {});

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
							zzuniHomelab의 리소스를 확인하세요.
						</s.MainContainerSubTitle>
					</s.MainContainer>

					<s.SubContainer1>
						<s.SubContainer1Items>
							{hardwareItemsKR.map((item, index) => (
								<s.SubContainer1Item key={index}>
									{item}
								</s.SubContainer1Item>
							))}
						</s.SubContainer1Items>
					</s.SubContainer1>

					<s.SubContainer2>
						<s.CardContainer>
							{serverData.map((server, index) => (
								<s.ServerCard key={index}>
									<s.ServerCardTitle>
										{server.name}
									</s.ServerCardTitle>
									<s.ServerCardItem>
										<strong>CPU:</strong> {server.cpu}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>메모리:</strong> {server.memory}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>스토리지:</strong>{" "}
										{server.storage}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>네트워크:</strong>{" "}
										{server.network}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>운영체제:</strong> {server.os}
									</s.ServerCardItem>
								</s.ServerCard>
							))}
						</s.CardContainer>
					</s.SubContainer2>

					<s.SubContainer3>
						<s.SliderContainer>
							<s.SliderTrack>
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={index}>
											<img src={logos[key]} alt={key} />
										</s.SliderItem>
									))}
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={`dup_${index}`}>
											<img src={logos[key]} alt={key} />
										</s.SliderItem>
									))}
							</s.SliderTrack>
						</s.SliderContainer>
						<s.SliderDesc>{sliderDescKR}</s.SliderDesc>
					</s.SubContainer3>
					<Footerbar />
				</>
			) : (
				<>
					<s.MainContainer>
						<s.MainContainerTitle>Status</s.MainContainerTitle>
						<s.MainContainerSubTitle>
							Check out zzuniHomelab's computing resources.
						</s.MainContainerSubTitle>
					</s.MainContainer>

					<s.SubContainer1>
						<s.SubContainer1Items>
							{hardwareItemsEN.map((item, index) => (
								<s.SubContainer1Item key={index}>
									{item}
								</s.SubContainer1Item>
							))}
						</s.SubContainer1Items>
					</s.SubContainer1>

					<s.SubContainer2>
						<s.CardContainer>
							{serverData.map((server, index) => (
								<s.ServerCard key={index}>
									<s.ServerCardTitle>
										{server.name}
									</s.ServerCardTitle>
									<s.ServerCardItem>
										<strong>CPU:</strong> {server.cpu}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>Memory:</strong> {server.memory}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>Storage:</strong>{" "}
										{server.storage}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>Network:</strong>{" "}
										{server.network}
									</s.ServerCardItem>
									<s.ServerCardItem>
										<strong>OS:</strong> {server.os}
									</s.ServerCardItem>
								</s.ServerCard>
							))}
						</s.CardContainer>
					</s.SubContainer2>

					<s.SubContainer3>
						<s.SliderContainer>
							<s.SliderTrack>
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={index}>
											<img src={logos[key]} alt={key} />
										</s.SliderItem>
									))}
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={`dup_${index}`}>
											<img src={logos[key]} alt={key} />
										</s.SliderItem>
									))}
							</s.SliderTrack>
						</s.SliderContainer>
						<s.SliderDesc>{sliderDescEN}</s.SliderDesc>
					</s.SubContainer3>
					<Footerbar />
				</>
			)}
		</>
	);
};

export default StatusPage;
