import styled, { keyframes, css } from "styled-components";

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
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	background-color: #171717;
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
	@media (max-width: 542px) {
		font-size: 32px;
	}
`;

export const SubContainer = styled.div`
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

export const SubContainerDesc = styled.div`
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

export const SubContainerSubTitle = styled.div`
	font-size: 30px;
	font-weight: 700;
	color: #171717;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

export const SubContainerSubDesc = styled.div`
	font-size: 14px;
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
