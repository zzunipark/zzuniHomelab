"use client";
import { useContext, useState, useMemo, useEffect } from "react";
import * as s from "./style";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";

const CDN_BASE = "https://mirror.zzunipark.com/.assets";
const STATUS_API = "https://api.zzunipark.com/api/v1/zzunihomelab/status";

const IMAGE_NAMES = [
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

const TRANSLATIONS = {
	Korean: {
		title: "현황",
		subtitle: "zzuniHomelab의 리소스를 확인하세요.",
		sliderDesc:
			"zzuniHomelab은 여러 기업과 단체의 기술을 활용하며 발전하고 있습니다.",
		totalServers: "총 서버 대수",
		totalMemory: "총 메모리",
		totalStorage: "총 스토리지",
		units: "대",
		memory: "메모리",
		motherboard: "메인보드",
		storage: "스토리지",
		network: "네트워크",
		os: "운영체제",
		hardwareItems: [
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
		],
	},
	English: {
		title: "Status",
		subtitle: "Check out zzuniHomelab's computing resources.",
		sliderDesc:
			"zzuniHomelab leverages the technology of various companies and organizations to drive its growth.",
		totalServers: "Total Servers",
		totalMemory: "Total Memory",
		totalStorage: "Total Storage",
		units: "units",
		memory: "Memory",
		motherboard: "Motherboard",
		storage: "Storage",
		network: "Network",
		os: "OS",
		hardwareItems: [
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
		],
	},
};

const SERVER_DATA = [
	{
		name: "MainHypervisor",
		cpu: "Intel Core i7-13700K @ 3.4GHz",
		memory: "DDR5-5200 96GB On-Die-ECC",
		motherboard: "MSI MAG B760 TOMAHAWK WIFI",
		storage: [
			"Gen4 NVMe 256GB x 1",
			"500GB SATA SSD x 1",
			"16TB SATA HDD x 2",
			"4TB SAS HDD x 2",
			"10TB SAS HDD x 1",
		],
		network: [
			"Mellanox ConnectX-3 VPI CX354A (40Gbps)",
			"Realtek RTL8125BG (2.5Gbps)",
		],
		os: "Proxmox VE 9.0",
	},
	{
		name: "SubHypervisor",
		cpu: "Intel Xeon E-2144G @ 3.6GHz",
		memory: "DDR4-3200 64GB Non-ECC (Actual DDR4-2400)",
		motherboard: "AsrockRack E3C242D4U2-2T",
		storage: ["Gen4(Gen3) NVMe 256GB x 1", "SATA SSD 500GB x 1"],
		network: [
			"Intel X550-AT2 (10Gbps)",
			"Intel X710-DA2 (10Gbps)",
			"RTL8125 (2.5Gbps)",
		],
		os: "Proxmox VE 9.0",
	},
	{
		name: "MainTrueNAS",
		cpu: "AMD Ryzen 3 4350G @ 3.8GHz",
		memory: "DDR4-3200 32GB Non-ECC (Actual DDR4-2933)",
		motherboard: "Asus Prime X570-Pro",
		storage: [
			"Gen4 512GB NVMe x 2",
			"Gen3 128GB NVMe x 1",
			"2TB SATA HDD x 8",
		],
		network: ["Mellanox ConnectX-3 VPI CX354A (40Gbps)"],
		os: "TrueNAS Scale 25.10",
	},
	{
		name: "BackupTrueNAS",
		cpu: "Intel Xeon E3-1240L v5 @ 2.1GHz",
		memory: "DDR4-3200 16GB Non-ECC (Actual DDR4-2133)",
		motherboard: "AsrockRack E3C232D4U",
		storage: ["Gen3 128GB NVMe x 1", "4TB SAS HDD x 8"],
		network: ["Intel X520-DA2 (10Gbps)"],
		os: "TrueNAS Scale 25.10",
	},
	{
		name: "WindowsSV",
		cpu: "Intel Xeon E3-1270 v3 @ 3.5GHz",
		memory: "DDR3-1600 32GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["250GB SATA SSD x 1", "1TB SATA HDD x 2"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Windows Server 2022 Datacenter",
	},
	{
		name: "NetBootSV",
		cpu: "Intel Xeon E3-1220 v3 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 81N4V",
		storage: ["250GB SATA SSD x 1", "1TB SATA HDD x 2"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Rocky Linux 9.6",
	},
	{
		name: "ProxmoxBackupSV",
		cpu: "Intel Xeon E3-1220 v2 @ 3.1GHz",
		memory: "DDR3-1600 16GB ECC-Unbuffered",
		motherboard: "Dell 9T7VV",
		storage: ["120GB SATA SSD x 1"],
		network: ["Intel X520-DA2 (10Gbps)", "Broadcom BCM5716 (1Gbps)"],
		os: "Proxmox Backup Server 4.0",
	},
	{
		name: "FallBackSV",
		cpu: "Intel Celeron N100 @ 1.1GHz",
		memory: "DDR4-2133 4GB Non-ECC",
		motherboard: "ASRock N100M",
		storage: ["120GB SATA SSD x 1"],
		network: ["Realtek RTL8111E (1Gbps)"],
		os: "Windows Server 2019 Standard",
	},
	{
		name: "Synology DS720+",
		cpu: "Intel Celeron J4125 @ 2.0GHz",
		memory: "DDR4-2666 10GB Non-ECC",
		motherboard: "Synology Custom Board",
		storage: ["4TB SATA HDD x 2"],
		network: ["Realtek RTL8156 (2.5Gbps)"],
		os: "DSM 7.3",
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
		name: "MultiPurposeSV",
		cpu: "Intel Pentium J4025 @ 2.00GHz",
		memory: "DDR4-2666 16GB Non-ECC",
		motherboard: "ECS GLKD-I-J4025",
		storage: ["128GB SATA SSD x 1"],
		network: ["Realtek RTL8111 (1Gbps)"],
		os: "Ubuntu Server 24.04",
	},
	{
		name: "MonitorSV",
		cpu: "AMD Ryzen 3 3200G @ 3.6GHz",
		memory: "DDR4-3200 8GB Non-ECC",
		motherboard: "Asus Prime A520M-A II",
		storage: ["Gen 3 128GB NVMe SSD x 1"],
		network: ["Realtek RTL8125 (2.5Gbps)"],
		os: "Ubuntu Server 24.04",
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

	SERVER_DATA.forEach(({ memory, storage }) => {
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

	return { totalServers: SERVER_DATA.length, memoryStats, storageStats };
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
		0
	);
	return formatCapacity(totalGB);
};

const ServerStatsOverview = ({ t }) => {
	const { totalServers, memoryStats, storageStats } = useMemo(
		calculateServerStats,
		[]
	);

	const StatItem = ({ label, value, unit, breakdown }) => (
		<s.StatCard>
			<s.StatContent>
				<s.StatLabel>{label}</s.StatLabel>
				<s.StatValue>{value}</s.StatValue>
				{unit && <s.StatUnit>{unit}</s.StatUnit>}
				{breakdown && (
					<s.StatBreakdown>
						{breakdown
							.filter(([_, val]) => val > 0)
							.map(([key, val]) => (
								<span key={key}>
									{key}:{" "}
									{typeof val === "number" && val >= 1024
										? formatCapacity(val)
										: `${val}GB`}
								</span>
							))}
					</s.StatBreakdown>
				)}
			</s.StatContent>
		</s.StatCard>
	);

	return (
		<s.StatsContainer>
			<s.StatsGrid>
				<StatItem
					label={t.totalServers}
					value={totalServers}
					unit={t.units}
				/>
				<StatItem
					label={t.totalMemory}
					value={`${memoryStats.total}GB`}
					breakdown={[
						["DDR5", memoryStats.DDR5],
						["DDR4", memoryStats.DDR4],
						["DDR3", memoryStats.DDR3],
						["LPDDR4X", memoryStats.LPDDR4X],
					]}
				/>
				<StatItem
					label={t.totalStorage}
					value={formatCapacity(storageStats.total)}
					breakdown={[
						["HDD", storageStats.HDD],
						["NVMe", storageStats["NVMe SSD"]],
						["SATA SSD", storageStats["SATA SSD"]],
					]}
				/>
			</s.StatsGrid>
		</s.StatsContainer>
	);
};

const DropdownServerCard = ({ server, t }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<s.DropdownServerCard isOpen={isOpen}>
			<s.ServerCardHeader onClick={() => setIsOpen(!isOpen)}>
				<s.ServerCardHeaderContent>
					<s.ServerCardTitleRow>
						<s.ServerCardTitle>{server.name}</s.ServerCardTitle>
						<s.ServerTypeTag>Server</s.ServerTypeTag>
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
								<strong>Storage:</strong>{" "}
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
							<strong>{t.memory}:</strong> {server.memory}
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>{t.motherboard}:</strong>{" "}
							{server.motherboard}
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>{t.storage}:</strong>
							<s.ServerCardList>
								{server.storage.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</s.ServerCardList>
						</s.ServerCardItem>
					</s.ServerCardColumn>
					<s.ServerCardColumn>
						<s.ServerCardItem>
							<strong>{t.network}:</strong>
							<s.ServerCardList>
								{server.network.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</s.ServerCardList>
						</s.ServerCardItem>
						<s.ServerCardItem>
							<strong>{t.os}:</strong> {server.os}
						</s.ServerCardItem>
					</s.ServerCardColumn>
				</s.ServerCardGrid>
			</s.ServerCardContent>
		</s.DropdownServerCard>
	);
};

const LogoSlider = ({ logos }) => (
	<s.SliderContainer>
		<s.SliderTrack>
			{[...logos, ...logos].map((src, index) => (
				<s.SliderItem key={index}>
					<img src={src} alt="" />
				</s.SliderItem>
			))}
		</s.SliderTrack>
	</s.SliderContainer>
);

const ServiceStatus = ({ language }) => {
	const [status, setStatus] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const isKorean = language === "Korean";

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const response = await fetch(STATUS_API);
				if (!response.ok) throw new Error("Failed to fetch");
				const data = await response.json();
				setStatus(data);
				setError(false);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchStatus();
		const interval = setInterval(fetchStatus, 30000);
		return () => clearInterval(interval);
	}, []);

	if (loading) {
		return (
			<s.StatusBanner color="#6b7280">
				<s.ServiceStatusDot color="#6b7280" />
				<s.ServiceStatusText>
					{isKorean ? "상태 확인 중..." : "Checking status..."}
				</s.ServiceStatusText>
			</s.StatusBanner>
		);
	}

	if (error || !status?.success) {
		return (
			<s.StatusBanner color="#ef4444">
				<s.ServiceStatusDot color="#ef4444" />
				<s.ServiceStatusText>
					{isKorean ? "상태 확인 실패" : "Status Check Failed"}
				</s.ServiceStatusText>
			</s.StatusBanner>
		);
	}

	return (
		<s.StatusBanner color={status.color}>
			<s.ServiceStatusDot
				color={status.color}
				$pulse={status.isHealthy}
			/>
			<s.ServiceStatusText>
				{isKorean ? status.text.ko : status.text.en}
			</s.ServiceStatusText>
		</s.StatusBanner>
	);
};

const StatusPage = () => {
	const { language } = useContext(LanguageContext);
	const t = TRANSLATIONS[language] || TRANSLATIONS.English;
	const logos = useMemo(
		() => IMAGE_NAMES.map((name) => `${CDN_BASE}/${name}.png`),
		[]
	);

	return (
		<>
			<Navbar />
			<s.MainContainer>
				<s.MainContainerTitle>{t.title}</s.MainContainerTitle>
				<s.MainContainerSubTitle>{t.subtitle}</s.MainContainerSubTitle>
				<ServiceStatus language={language} />
			</s.MainContainer>
			<s.SubContainer1>
				<s.SubContainer1Items>
					{t.hardwareItems.map((item, index) => (
						<s.SubContainer1Item key={index}>
							{item}
						</s.SubContainer1Item>
					))}
				</s.SubContainer1Items>
			</s.SubContainer1>
			<s.SubContainer2>
				<ServerStatsOverview t={t} />
				<s.ServerSection>
					{SERVER_DATA.map((server, index) => (
						<DropdownServerCard key={index} server={server} t={t} />
					))}
				</s.ServerSection>
			</s.SubContainer2>
			<Footerbar />
		</>
	);
};

export default StatusPage;
