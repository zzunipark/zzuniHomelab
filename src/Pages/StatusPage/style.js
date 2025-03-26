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
	color: #fff;
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
	color: #fff;
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
	background-color: #fff;
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SubContainer1Title = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #171717;
	margin-bottom: 2rem;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 28px;
	}
`;

export const SubContainer1Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	max-width: 1200px;
	width: 100%;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const SubContainer1Item = styled.div`
	background-color: #171717;
	color: #fff;
	padding: 1rem;
	border-radius: 8px;
	font-size: 18px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease-in-out;
	text-align: center;
	&:hover {
		background-color: #444444;
	}
`;

export const SubContainer2 = styled.div`
	background-color: #171717;
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	max-width: 1200px;
	width: 100%;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ServerCard = styled.div`
	background-color: #f9f9f9;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	transition: box-shadow 0.3s ease;
	&:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}
`;

export const ServerCardTitle = styled.h3`
	font-size: 24px;
	font-weight: 700;
	margin-bottom: 1rem;
	color: #171717;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const ServerCardItem = styled.div`
	font-size: 16px;
	margin-bottom: 0.5rem;
	color: #333;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

export const SubContainer3 = styled.div`
	background-color: #fff;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SliderContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: 60px;
	position: relative;
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SliderTrack = styled.div`
	display: flex;
	width: calc(200% + 1rem);
	animation: ${scroll} 30s linear infinite;
`;

export const SliderItem = styled.div`
	min-width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 2rem;
	img {
		height: 60px;
	}
`;

export const SliderDesc = styled.div`
	font-size: 18px;
	color: #333;
	margin-top: 30px;
	text-align: center;
	font-weight: 600;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0 1rem;
	}
`;
