import styled from "styled-components";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export const MainContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	padding: 2rem 38rem;

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

export const Message = styled.div`
	font-size: 18px;
	margin-bottom: 20px;
	text-align: center;
`;

export const ProgressBarContainer = styled.div`
	width: 100%;
	height: 20px;
	background-color: #ddd;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
	height: 100%;
	width: ${(props) => props.progress}%;
	background-color: #171717;
	transition: width 0.05s linear;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	width: 120px;
	padding: 10px;
	font-size: 16px;
	background-color: #171717;
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	&:hover {
		opacity: 0.8;
	}
`;
