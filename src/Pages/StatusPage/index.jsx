"use client";
import { useContext, useState } from "react";
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
	"40Gbps QSFP+ 내부 네트워크",
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
	"40Gbps QSFP+ internal network",
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
		name: "MainHypervisorSV",
		cpu: "Intel Core i7-13700K @ 3.4GHz",
		memory: "DDR5-5200 96GB On-Die-ECC",
		motherboard: "MSI MAG B760 TOMAHAWK WIFI",
		storage: ["Gen4 NVMe 256GB x 2"],
		network: [
			"Mellanox ConnectX-3 VPI CX354A (40Gbps)",
			"Realtek RTL8125BG (2.5Gbps)",
		],
		os: "Proxmox VE 8.4",
	},
	{
		name: "SubHypervisorSV",
		cpu: "AMD Ryzen 3 4350G @ 3.8GHz",
		memory: "DDR4-3600 32GB Non-ECC",
		motherboard: "Asus Prime A520M-K",
		storage: [
			"Gen 4 256GB NVMe x 1",
			"SATA HDD 16TB x 1",
			"SATA HDD 4TB x 2",
		],
		network: ["Realtek RTL8125 (2.5Gbps)", "Realtek RTL8111 (1Gbps)"],
		os: "Proxmox VE 8.4",
	},
	{
		name: "SpareHypervisorSV",
		cpu: "Intel Xeon E3-1270 v3 @ 3.5GHz",
		memory: "DDR3-1600 32GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["SATA SSD 250GB x 1"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Proxmox VE 8.4",
	},
	{
		name: "TruenasSV",
		cpu: "AMD Ryzen 5 2400G @ 3.6GHz",
		memory: "DDR4-2666 24GB Non-ECC",
		motherboard: "Asus Prime X570-Pro",
		storage: [
			"Gen4 512GB NVMe x 2",
			"Gen3 128GB NVMe x 1",
			"2TB SATA HDD x 10",
		],
		network: ["Mellanox ConnectX-3 VPI CX354A (40Gbps)"],
		os: "TrueNAS Scale 24.10",
	},
	{
		name: "FinalBackupSV",
		cpu: "Intel Celeron J4025 @ 2.00GHz",
		memory: "DDR4-2666 16GB Non-ECC",
		motherboard: "ECS GLKD-I-J4025",
		storage: ["1TB SATA HDD x 2"],
		network: ["Realtek RTL8111 (1Gbps)"],
		os: "TrueNAS Scale 24.10",
	},
	{
		name: "Synology DS720+",
		cpu: "Intel Celeron J4125 @ 2.0GHz",
		memory: "DDR4-2666 10GB Non-ECC",
		motherboard: "Synology Custom Board",
		storage: ["500GB SATA SSD x 2"],
		network: ["Realtek RTL8156 (2.5Gbps)"],
		os: "DSM 7.3",
	},
	{
		name: "MultiPurposeSV",
		cpu: "Intel Processor N100 @ 3.4GHz",
		memory: "DDR4-3200 8GB Non-ECC",
		motherboard: "Asrock N100M",
		storage: ["Gen3 128GB NVMe x 1"],
		network: ["Aquantia AQC107 (10Gbps)"],
		os: "Debian 12.11",
	},
	{
		name: "WindowsSV",
		cpu: "Intel Xeon E3-1220 v3 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["250GB SATA SSD x 1"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Windows Server 2022 Datacenter",
	},
	{
		name: "DebianSV",
		cpu: "Intel Xeon E3-1220 v2 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 9T7VV",
		storage: ["120GB SATA SSD x 1"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Debian 12.11",
	},
	{
		name: "Mac Mini M1",
		cpu: "Apple Silicon M1 @ 3.2GHz",
		memory: "LPDDR4X-2133 8GB",
		motherboard: "Apple M1 Logic Board",
		storage: ["Gen3 256GB NVMe x 1"],
		network: ["Aquantia AQC107 (10Gbps)"],
		os: "MacOS Sequoia",
	},
	{
		name: "SuperSignSV",
		cpu: "Intel Celeron N2930 @ 1.83GHz",
		memory: "DDR3L-1333 2GB Non-ECC",
		motherboard: "Mini-ITX Celeron Board",
		storage: ["32GB SATA SSD x 1"],
		network: ["Realtek RTL8111 (1Gbps)"],
		os: "Ubuntu Server 22.04",
	},
	{
		name: "LocalRPI1",
		cpu: "Broadcom BCM2711B0 @ 1.5GHz",
		memory: "LPDDR4-3200 4GB",
		motherboard: "Raspberry Pi 4 Model B",
		storage: ["120GB SATA SSD x 1"],
		network: ["Broadcom BCM54210PE (1Gbps)"],
		os: "Raspberry Pi OS Lite 64-bit",
	},
	{
		name: "LocalRPI2",
		cpu: "Broadcom BCM2711B0 @ 1.5GHz",
		memory: "LPDDR4-3200 8GB",
		motherboard: "Raspberry Pi 4 Model B",
		storage: ["120GB SATA SSD x 1"],
		network: ["Broadcom BCM54210PE (1Gbps)"],
		os: "Raspberry Pi OS Lite 64-bit",
	},
	{
		name: "LocalRPI3",
		cpu: "Broadcom BCM2711B0 @ 1.5GHz",
		memory: "LPDDR4-3200 8GB",
		motherboard: "Raspberry Pi 4 Model B",
		storage: ["120GB SATA SSD x 1"],
		network: ["Broadcom BCM54210PE (1Gbps)"],
		os: "Raspberry Pi OS Lite 64-bit",
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

const calculateServerStats = () => {
	const totalServers = serverData.length;

	const memoryStats = {
		DDR3: 0,
		DDR4: 0,
		DDR5: 0,
		LPDDR4X: 0,
		total: 0,
	};

	const storageStats = {
		HDD: 0,
		"SATA SSD": 0,
		"NVMe SSD": 0,
		total: 0,
	};

	serverData.forEach((server) => {
		const memoryMatch = server.memory.match(/(\d+)GB/);
		const memorySize = memoryMatch ? Number.parseInt(memoryMatch[1]) : 0;

		if (server.memory.includes("DDR5")) {
			memoryStats.DDR5 += memorySize;
		} else if (server.memory.includes("DDR4")) {
			memoryStats.DDR4 += memorySize;
		} else if (server.memory.includes("DDR3")) {
			memoryStats.DDR3 += memorySize;
		} else if (server.memory.includes("LPDDR4X")) {
			memoryStats.LPDDR4X += memorySize;
		}
		memoryStats.total += memorySize;

		server.storage.forEach((storageItem) => {
			const capacityMatch = storageItem.match(/(\d+(?:\.\d+)?)(GB|TB)/i);
			const multiplierMatch = storageItem.match(/x\s*(\d+)/i);

			if (capacityMatch) {
				const capacity = Number.parseFloat(capacityMatch[1]);
				const unit = capacityMatch[2].toUpperCase();
				const multiplier = multiplierMatch
					? Number.parseInt(multiplierMatch[1])
					: 1;

				let capacityInGB = capacity;
				if (unit === "TB") {
					capacityInGB = capacity * 1024;
				}

				const totalCapacity = capacityInGB * multiplier;

				if (storageItem.includes("HDD")) {
					storageStats.HDD += totalCapacity;
				} else if (storageItem.includes("NVMe")) {
					storageStats["NVMe SSD"] += totalCapacity;
				} else if (storageItem.includes("SSD")) {
					storageStats["SATA SSD"] += totalCapacity;
				}

				storageStats.total += totalCapacity;
			}
		});
	});

	return { totalServers, memoryStats, storageStats };
};

const formatCapacity = (capacityGB) => {
	if (capacityGB >= 1024) {
		const capacityTB = capacityGB / 1024;
		return capacityTB % 1 === 0
			? `${capacityTB}TB`
			: `${capacityTB.toFixed(1)}TB`;
	}
	return capacityGB % 1 === 0
		? `${capacityGB}GB`
		: `${capacityGB.toFixed(1)}GB`;
};

const ServerStatsOverview = ({ isKorean }) => {
	const { totalServers, memoryStats, storageStats } = calculateServerStats();

	return (
		<s.StatsContainer>
			<s.StatsGrid>
				<s.StatCard>
					<s.StatContent>
						<s.StatLabel>
							{isKorean ? "총 서버 대수" : "Total Servers"}
						</s.StatLabel>
						<s.StatValue>{totalServers}</s.StatValue>
						<s.StatUnit>{isKorean ? "대" : "units"}</s.StatUnit>
					</s.StatContent>
				</s.StatCard>

				<s.StatCard>
					<s.StatContent>
						<s.StatLabel>
							{isKorean ? "총 메모리" : "Total Memory"}
						</s.StatLabel>
						<s.StatValue>{memoryStats.total}GB</s.StatValue>
						<s.StatBreakdown>
							{memoryStats.DDR5 > 0 && (
								<span>DDR5: {memoryStats.DDR5}GB</span>
							)}
							{memoryStats.DDR4 > 0 && (
								<span>DDR4: {memoryStats.DDR4}GB</span>
							)}
							{memoryStats.DDR3 > 0 && (
								<span>DDR3: {memoryStats.DDR3}GB</span>
							)}
							{memoryStats.LPDDR4X > 0 && (
								<span>LPDDR4X: {memoryStats.LPDDR4X}GB</span>
							)}
						</s.StatBreakdown>
					</s.StatContent>
				</s.StatCard>

				<s.StatCard>
					<s.StatContent>
						<s.StatLabel>
							{isKorean ? "총 스토리지" : "Total Storage"}
						</s.StatLabel>
						<s.StatValue>
							{formatCapacity(storageStats.total)}
						</s.StatValue>
						<s.StatBreakdown>
							{storageStats.HDD > 0 && (
								<span>
									HDD: {formatCapacity(storageStats.HDD)}
								</span>
							)}
							{storageStats["NVMe SSD"] > 0 && (
								<span>
									NVMe:{" "}
									{formatCapacity(storageStats["NVMe SSD"])}
								</span>
							)}
							{storageStats["SATA SSD"] > 0 && (
								<span>
									SATA SSD:{" "}
									{formatCapacity(storageStats["SATA SSD"])}
								</span>
							)}
						</s.StatBreakdown>
					</s.StatContent>
				</s.StatCard>
			</s.StatsGrid>
		</s.StatsContainer>
	);
};

const DropdownServerCard = ({ server, index, isKorean }) => {
	const [isOpen, setIsOpen] = useState(false);

	const getServerType = (name) => {
		if (name.includes("Hypervisor")) return "Hypervisor";
		if (name.includes("Truenas")) return "Storage";
		if (name.includes("Mirror")) return "Storage";
		if (name.includes("Backup")) return "Storage";
		if (name.includes("Windows")) return "RemotePC";
		if (name.includes("Ubuntu")) return "Linux";
		if (name.includes("Synology")) return "Storage";
		if (name.includes("Mac")) return "RemotePC";
		if (name.includes("MultiPurpose")) return "Server";
		return "Server";
	};

	const getCpuBrand = (cpu) => {
		if (cpu.includes("Intel Core i7-13700K")) return "Intel Core i7-13700K";
		if (cpu.includes("AMD Ryzen 3 4350G")) return "AMD Ryzen 3 4350G";
		if (cpu.includes("AMD Ryzen 5 2400G")) return "AMD Ryzen 5 2400G";
		if (cpu.includes("Intel Processor N100")) return "Intel Processor N100";
		if (cpu.includes("Intel Xeon E3-1270 v3"))
			return "Intel Xeon E3-1270 v3";
		if (cpu.includes("Intel Xeon E3-1220 v3"))
			return "Intel Xeon E3-1220 v3";
		if (cpu.includes("Intel Xeon E3-1220 v2"))
			return "Intel Xeon E3-1220 v2";
		if (cpu.includes("Intel Celeron J4125")) return "Intel Celeron J4125";
		if (cpu.includes("Apple Silicon M1")) return "Apple Silicon M1";
		if (cpu.includes("Intel Celeron N2930")) return "Intel Celeron N2930";
		return cpu.split(" @")[0];
	};

	const getMemorySize = (memory) => {
		const sizeMatch = memory.match(/(\d+)GB/);
		const ddrMatch = memory.match(/(DDR\d+L?|LPDDR\d+X?)/i);
		const size = sizeMatch ? `${sizeMatch[1]}GB` : "RAM";
		const ddrType = ddrMatch ? ddrMatch[1] : "";
		return ddrType ? `${ddrType} ${size}` : size;
	};

	const getTotalStorage = (storageArray) => {
		if (!storageArray || storageArray.length === 0) return "0GB";

		let totalGB = 0;
		storageArray.forEach((storageItem) => {
			const capacityMatch = storageItem.match(/(\d+(?:\.\d+)?)(GB|TB)/i);
			const multiplierMatch = storageItem.match(/x\s*(\d+)/i);

			if (capacityMatch) {
				const capacity = Number.parseFloat(capacityMatch[1]);
				const unit = capacityMatch[2].toUpperCase();
				const multiplier = multiplierMatch
					? Number.parseInt(multiplierMatch[1])
					: 1;

				let capacityInGB = capacity;
				if (unit === "TB") {
					capacityInGB = capacity * 1024;
				}

				totalGB += capacityInGB * multiplier;
			}
		});

		if (totalGB >= 1024) {
			const totalTB = totalGB / 1024;
			return totalTB % 1 === 0
				? `${totalTB}TB`
				: `${totalTB.toFixed(1)}TB`;
		} else {
			return totalGB % 1 === 0
				? `${totalGB}GB`
				: `${totalGB.toFixed(1)}GB`;
		}
	};

	return (
		<s.DropdownServerCard key={index} isOpen={isOpen}>
			<s.ServerCardHeader onClick={() => setIsOpen(!isOpen)}>
				<s.ServerCardHeaderContent>
					<s.ServerCardTitleRow>
						<s.ServerCardTitle>{server.name}</s.ServerCardTitle>
						<s.ServerTypeTag>
							{getServerType(server.name)}
						</s.ServerTypeTag>
					</s.ServerCardTitleRow>
					<s.ServerCardSummary>
						<s.ServerSummaryItem>
							<span>
								<strong>CPU:</strong> {getCpuBrand(server.cpu)}
							</span>
						</s.ServerSummaryItem>
						<s.ServerSummaryItem>
							<span>
								<strong>RAM:</strong>{" "}
								{getMemorySize(server.memory)}
							</span>
						</s.ServerSummaryItem>
						<s.ServerSummaryItem>
							<span>
								<strong>Total Storage:</strong>{" "}
								{getTotalStorage(server.storage)}
							</span>
						</s.ServerSummaryItem>
						<s.ServerSummaryItem>
							<span>
								<strong>OS:</strong> {server.os.split(" ")[0]}
							</span>
						</s.ServerSummaryItem>
						<s.ServerStatus>
							<s.StatusDot />
							<s.StatusText>OPERATING</s.StatusText>
						</s.ServerStatus>
					</s.ServerCardSummary>
				</s.ServerCardHeaderContent>
				<s.DropdownIcon isOpen={isOpen}>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
						<path
							d="M6 9L12 15L18 9"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</s.DropdownIcon>
			</s.ServerCardHeader>
			<s.ServerCardContent isOpen={isOpen}>
				<s.ServerCardGrid>
					<s.ServerCardColumn>
						<s.ServerCardItem>
							<strong>CPU:</strong> {server.cpu}
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>{isKorean ? "메모리" : "Memory"}:</strong>{" "}
							{server.memory}
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>
								{isKorean ? "메인보드" : "Motherboard"}:
							</strong>{" "}
							{server.motherboard}
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>
								{isKorean ? "스토리지" : "Storage"}:
							</strong>
							<s.ServerCardList>
								{server.storage.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</s.ServerCardList>
						</s.ServerCardItem>
					</s.ServerCardColumn>
					<s.ServerCardColumn>
						<s.ServerCardItem>
							<strong>
								{isKorean ? "네트워크" : "Network"}:
							</strong>
							<s.ServerCardList>
								{server.network.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</s.ServerCardList>
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>{isKorean ? "운영체제" : "OS"}:</strong>{" "}
							{server.os}
						</s.ServerCardItem>
					</s.ServerCardColumn>
				</s.ServerCardGrid>
			</s.ServerCardContent>
		</s.DropdownServerCard>
	);
};

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
						<ServerStatsOverview isKorean={true} />
						<s.ServerSection>
							{serverData.map((server, index) => (
								<DropdownServerCard
									key={index}
									server={server}
									index={index}
									isKorean={true}
								/>
							))}
						</s.ServerSection>
					</s.SubContainer2>
					<s.SubContainer3>
						<s.SliderContainer>
							<s.SliderTrack>
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={index}>
											<img
												src={
													logos[key] ||
													"/placeholder.svg"
												}
												alt={key}
											/>
										</s.SliderItem>
									))}
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={`dup_${index}`}>
											<img
												src={
													logos[key] ||
													"/placeholder.svg"
												}
												alt={key}
											/>
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
						<ServerStatsOverview isKorean={false} />
						<s.ServerSection>
							{serverData.map((server, index) => (
								<DropdownServerCard
									key={index}
									server={server}
									index={index}
									isKorean={false}
								/>
							))}
						</s.ServerSection>
					</s.SubContainer2>
					<s.SubContainer3>
						<s.SliderContainer>
							<s.SliderTrack>
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={index}>
											<img
												src={
													logos[key] ||
													"/placeholder.svg"
												}
												alt={key}
											/>
										</s.SliderItem>
									))}
								{Object.keys(logos)
									.sort(() => Math.random() - 0.5)
									.map((key, index) => (
										<s.SliderItem key={`dup_${index}`}>
											<img
												src={
													logos[key] ||
													"/placeholder.svg"
												}
												alt={key}
											/>
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
