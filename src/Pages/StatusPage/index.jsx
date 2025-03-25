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

const StatusPage = () => {
	const { language } = useContext(LanguageContext);

	const hardwareItems = [
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

	const serverData = [
		{
			name: "HypervisorSV",
			cpu: "AMD Ryzen 5 5500GT @ 3.6GHz",
			memory: "DDR4-3200 64GB",
			storage: "PCIe 4.0 256GB NVMe",
			network: "Intel X520-DA2 / 10Gbps x 2",
			os: "Proxmox VE 8.2",
		},
		{
			name: "TruenasSV",
			cpu: "AMD Ryzen 3 4350G @ 3.8GHz",
			memory: "DDR4-3200 40GB",
			storage:
				"2TB SATA HDD x 8 + PCIe 4.0 512GB NVMe x 2 + PCIe 4.0 256GB NVMe x 2 + PCIe 3.0 128GB NVMe",
			network: "Intel X520-DA2 / 10Gbps x 2 LACP",
			os: "TrueNAS Scale 24.10",
		},
		{
			name: "MirrorSV",
			cpu: "Intel Processor N100 @ 3.4GHz",
			memory: "DDR4-3200 8GB",
			storage: "16TB SATA HDD",
			network: "RTL8125 / 2.5Gbps x 2 LACP",
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
			network: "X520-DA2 / 10Gbps x 1",
			os: "Rocky 9.5",
		},
	];

	const logos = imageNames.reduce((acc, name) => {
		acc[name] = require(`../../Assets/images/png/${name}.png`);
		return acc;
	}, {});

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
							{hardwareItems.map((item, index) => (
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
						<s.SliderDesc>
							zzuniHomelab은 여러 기업과 단체의 기술을 활용하며
							발전하고 있습니다.
						</s.SliderDesc>
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
					<Footerbar />
				</>
			)}
		</>
	);
};

export default StatusPage;
