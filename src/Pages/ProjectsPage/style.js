import styled, { keyframes, css } from "styled-components";
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

export const MainContainerTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #ededed;
	text-align: center;
	opacity: 0;
	transform: translateY(20px);
	@media (max-width: 768px) {
		font-size: 42px;
	}
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const MainContainerSubTitle = styled.div`
	font-size: 26px;
	font-weight: 500;
	color: #ededed;
	margin-top: 5px;
	text-align: center;
	opacity: 0;
	transform: translateY(20px);
	@media (max-width: 768px) {
		font-size: 20px;
	}
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const SubContainer1 = styled.div`
	padding: 2rem 16rem;
	background-color: #fff;
	text-align: inter-word;
	display: flex;
	flex-direction: column;
	height: 60vh;
	align-items: center;
	@media (max-width: 1200px) {
		padding: 2rem;
	}
`;
