import styled, { keyframes } from "styled-components";
import ProjectsTitleJpg from "../../Assets/images/jpg/projects-title.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	background-image: url(${ProjectsTitleJpg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 35vh;
`;

export const MainContainerTitle = styled.h1`
	font-size: 2.5rem;
	color: white;
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
	animation: ${fadeIn} 1s ease-out forwards;
`;

export const MainContainerSubTitle = styled.p`
	font-size: 1.2rem;
	color: white;
	text-align: center;
	max-width: 80%;
	animation: ${fadeIn} 1s ease-out forwards;
`;

export const SubContainer1 = styled.div`
	padding: 2rem 16rem;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1200px) {
		padding: 2rem;
	}
`;

export const ProjectGrid = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 2rem;
`;

export const ProjectRow = styled.div`
	display: flex;
	width: 100%;
	gap: 1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

export const ProjectCard = styled.div`
	flex: 0 0 ${(props) => props.ratio}%;
	display: flex;
	flex-direction: column;
	background: #171717;
	border-radius: 20px;
	overflow: hidden;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
		transform: translateY(-5px);
	}
`;

export const ProjectCardImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const ProjectCardTitle = styled.div`
	padding: 1rem;
	font-size: 1.2rem;
	font-weight: 600;
	color: #fff;
	text-align: center;
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 2rem;
	border-radius: 12px;
	width: 400px;
	text-align: center;
	position: relative;
	animation: ${fadeIn} 1s ease-out forwards;
`;

export const CloseButton = styled.div`
	font-size: 24px;
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
`;

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-top: 10px;
`;

export const ModalTitle = styled.h2`
	margin-top: 10px;
`;

export const ExternalLinkIcon = styled.div`
	cursor: pointer;
	color: #0073e6;
	transition: 0.2s;
	&:hover {
		color: #005bb5;
	}
`;

export const ModalImage = styled.img`
	width: 100%;
	border-radius: 8px;
`;

export const ModalDescription = styled.p`
	margin-top: 10px;
	font-size: 16px;
	color: #555;
`;

export const TechStackToggle = styled.button`
	margin-top: 15px;
	padding: 7px 20px;
	background: #171717;
	color: white;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background 0.3s ease;
	&:hover {
		background: #444444;
	}
`;

export const TechStackContainer = styled.div`
	margin-top: 15px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;

export const TechStackItem = styled.div`
	padding: 5px 10px;
	background: #f0f0f0;
	border-radius: 5px;
	font-size: 14px;
	color: #333;
`;
