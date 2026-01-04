import React, { useContext, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footerbar from "../../Components/Footerbar";
import { LanguageContext } from "../../Context/LanguageContext";
import { ExternalLink } from "lucide-react";
import * as s from "./style";

const zzunimirrorjpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniMirror.jpg";
const zzuniparklogjpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniPark-Log.jpg";
const zzuniapijpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Projects_zzuniAPI.jpg";

const translations = {
	Korean: {
		mainTitle: "프로젝트",
		subTitle: "zzuniHomelab의 핵심 비전을 위한 프로젝트를 확인해 보세요.",
		showTechStack: "기술 스택 보기",
		hideTechStack: "숨기기",
	},
	English: {
		mainTitle: "Projects",
		subTitle: "Check out the projects for zzuniHomelab's core vision.",
		showTechStack: "Show Tech Stack",
		hideTechStack: "Hide",
	},
};

const ProjectsPage = () => {
	const { language } = useContext(LanguageContext);
	const [selectedProject, setSelectedProject] = useState(null);
	const [showTechStack, setShowTechStack] = useState(false);
	const {
		mainTitle,
		subTitle,
		showTechStack: showText,
		hideTechStack,
	} = translations[language] || translations["English"];

	const projects = [
		{
			title: "zzuniMirror",
			image: zzunimirrorjpg,
			ratio: 40,
			description:
				language === "Korean"
					? "오픈 소스 패키지 미러링 서비스"
					: "Open-Source Package Mirroring Service",
			link: "https://mirror.zzunipark.com",
			techStack: ["Nginx", "FTPSync", "Rsync", "Shell Script", "OCI"],
		},
		{
			title: "zzuniPark-log",
			image: zzuniparklogjpg,
			ratio: 60,
			description:
				language === "Korean"
					? "배우고 경험한 것을 공유하는 블로그 서비스"
					: "zzuniPark's Blog Service",
			link: "https://blog.zzunipark.com",
			techStack: ["Nginx", "Hextra"],
		},
		{
			title: "zzuniAPI",
			image: zzuniapijpg,
			ratio: 100,
			description:
				language === "Korean"
					? "공공재로 개방된 무료 API 서비스"
					: "Publicly available free API service",
			link: "https://api.zzunipark.com",
			techStack: ["Node.js", "Express", "pm2"],
		},
	];

	const openModal = (project) => {
		setSelectedProject(project);
		setShowTechStack(false);
	};

	const closeModal = () => setSelectedProject(null);

	const groupProjects = () => {
		const rows = [];
		for (let i = 0; i < projects.length; i++) {
			if (projects[i].ratio === 100) {
				rows.push([projects[i]]);
			} else if (
				i + 1 < projects.length &&
				projects[i + 1].ratio !== 100
			) {
				rows.push([projects[i], projects[i + 1]]);
				i++;
			} else {
				rows.push([projects[i]]);
			}
		}
		return rows;
	};

	return (
		<>
			<Navbar />
			<s.MainContainer>
				<s.MainContainerTitle>{mainTitle}</s.MainContainerTitle>
				<s.MainContainerSubTitle>{subTitle}</s.MainContainerSubTitle>
			</s.MainContainer>
			<s.SubContainer1>
				<s.ProjectGrid>
					{groupProjects().map((row, rowIndex) => (
						<s.ProjectRow key={rowIndex}>
							{row.map((project, index) => (
								<s.ProjectCard
									key={index}
									ratio={
										row.length === 2
											? index === 0
												? project.ratio
												: 100 - row[0].ratio
											: 100
									}
									onClick={() => openModal(project)}
								>
									<s.ProjectCardImage
										src={project.image}
										alt={project.title}
									/>
									<s.ProjectCardTitle>
										{project.title}
									</s.ProjectCardTitle>
								</s.ProjectCard>
							))}
						</s.ProjectRow>
					))}
				</s.ProjectGrid>
			</s.SubContainer1>
			{selectedProject && (
				<s.ModalOverlay onClick={closeModal}>
					<s.ModalContent onClick={(e) => e.stopPropagation()}>
						<s.CloseButton onClick={closeModal}>
							&times;
						</s.CloseButton>
						<s.ModalImage
							src={selectedProject.image}
							alt={selectedProject.title}
						/>
						<s.ModalHeader>
							<s.ModalTitle>{selectedProject.title}</s.ModalTitle>
							<s.ExternalLinkIcon
								onClick={() =>
									window.open(selectedProject.link, "_blank")
								}
							>
								<ExternalLink size={20} />
							</s.ExternalLinkIcon>
						</s.ModalHeader>
						<s.ModalDescription>
							{selectedProject.description}
						</s.ModalDescription>
						<s.TechStackToggle
							onClick={() => setShowTechStack(!showTechStack)}
						>
							{showTechStack ? hideTechStack : showText}
						</s.TechStackToggle>
						{showTechStack && (
							<s.TechStackContainer>
								{selectedProject.techStack.map((tech, idx) => (
									<s.TechStackItem key={idx}>
										{tech}
									</s.TechStackItem>
								))}
							</s.TechStackContainer>
						)}
					</s.ModalContent>
				</s.ModalOverlay>
			)}
			<Footerbar />
		</>
	);
};

export default ProjectsPage;
