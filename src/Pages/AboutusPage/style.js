import styled, { keyframes, css } from "styled-components";
import AboutusTitleJpg from "../../Assets/images/jpg/aboutus-title.jpg";

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
	background-image: url(${AboutusTitleJpg});
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
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
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
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const TabContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ddd;
`;

export const TabItem = styled.div`
	position: relative;
	margin: 0 1rem;
	padding: 1rem 0;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	color: ${(props) => (props.active ? "#171717" : "#333")};
	&:after {
		content: "";
		display: block;
		width: ${(props) => (props.active ? "100%" : "0")};
		height: 2px;
		background: #171717;
		transition: width 0.3s;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	&:hover {
		color: #171717;
	}
`;

export const GreetingContainer = styled.div`
	padding: 2rem 38rem;
	background-color: #fff;
	text-align: inter-word;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 2000px) {
		padding: 2rem 28rem;
	}
	@media (max-width: 1600px) {
		padding: 2rem 14rem;
	}
	@media (max-width: 1200px) {
		padding: 2rem;
	}
`;

export const GreetingTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const GreetingDesc = styled.div`
	font-size: 18px;
	font-weight: 400;
	color: #171717;
	line-height: 1.6;
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const GreetingSignature = styled.div`
	font-size: 20px;
	font-weight: 500;
	color: #171717;
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const VisionContainer = styled.div`
	padding: 2rem 38rem;
	background-color: #fff;
	text-align: inter-word;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 2000px) {
		padding: 2rem 28rem;
	}
	@media (max-width: 1600px) {
		padding: 2rem 14rem;
	}
	@media (max-width: 1200px) {
		padding: 2rem;
	}
`;

export const VisionTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const VisionSubTitle = styled.div`
	font-size: 30px;
	font-weight: 500;
	color: #171717;
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const VisionBar = styled.div`
	width: 100%;
	height: 1px;
	background-color: #171717;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const VisionImageContainer = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const VisionImage = styled.img`
	width: 100%;
	height: auto;
	display: block;
`;

export const HistoryContainer = styled.div`
	width: 100%;
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
`;

export const HistoryTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	margin-bottom: 3rem;
`;

export const HistoryTimeline = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	&:before {
		content: "";
		position: absolute;
		left: 20px;
		top: 0;
		width: 2px;
		height: 100%;
		background: #171717;

		@media (max-width: 920px) {
			display: none;
		}
	}
`;

export const HistoryItem = styled.div`
	position: relative;
	margin-bottom: 5rem;
	display: flex;
	align-items: flex-start;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 0.5s ease-out forwards;
	&:nth-child(odd) {
		animation-delay: 0.1s;
	}
	&:nth-child(even) {
		animation-delay: 0.2s;
	}

	@media (max-width: 920px) {
		transform: none;
		padding: 0 2rem;
		margin-bottom: 12px;
	}
`;

export const HistoryMarker = styled.div`
	position: absolute;
	left: 0;
	width: 40px;
	height: 40px;
	background: #171717;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;

	@media (max-width: 920px) {
		display: none;
	}
`;

export const HistoryNumber = styled.span`
	font-size: 16px;
	font-weight: 700;
	color: #fff;
`;

export const HistoryCard = styled.div`
	margin-left: 60px;
	background: #f9f9f9;
	border-radius: 8px;
	padding: 1.5rem;
	width: calc(100% - 60px);
	@media (max-width: 920px) {
		margin-left: 0px;
		width: calc(100% - 30px);
		padding: 0.8rem;
	}
`;

export const HistoryYearMonth = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: #171717;
	margin-bottom: 0.5rem;
`;

export const HistoryDesc = styled.div`
	font-size: 16px;
	color: #333;
	line-height: 1.4;
`;
