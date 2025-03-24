import styled, { keyframes } from "styled-components";
import StatusTitleJpg from "../../Assets/images/jpg/status-title.jpg";

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
	background-image: url(${StatusTitleJpg});
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
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 42px;
	}
`;

export const MainContainerSubTitle = styled.div`
	font-size: 26px;
	font-weight: 500;
	color: #ededed;
	margin-top: 5px;
	text-align: center;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const SubContainer1 = styled.div`
	padding: 2rem 18rem;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SubContainer1Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	height: 30vh;
	padding: 0 2rem;
	background-color: #171717;
`;

export const SubContainer1SectionLeft = styled.div`
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const SubContainer1SectionRight = styled.div`
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 50%;
`;
