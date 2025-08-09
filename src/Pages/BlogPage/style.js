import styled, { keyframes } from "styled-components";
import { bodyText } from "../../Styles/commonStyles";

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

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #fff;
`;

export const MainContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	animation: ${fadeIn} 0.6s ease-out;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const RedirectCard = styled.div`
	background: #fff;
	border-radius: 12px;
	padding: 3rem 2.5rem;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
	border: 1px solid #f0f0f0;
	max-width: 480px;
	width: 100%;
	text-align: center;

	@media (max-width: 768px) {
		padding: 2rem 1.5rem;
		margin: 0 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: #171717;
	letter-spacing: -0.5px;

	@media (max-width: 768px) {
		font-size: 1.875rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 1.125rem;
	color: #666;
	margin-bottom: 2rem;
	line-height: 1.5;

	@media (max-width: 768px) {
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}
`;

export const CountdownDisplay = styled.div`
	font-size: 3rem;
	font-weight: 800;
	color: #171717;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`;

export const ProgressBarContainer = styled.div`
	width: 100%;
	height: 6px;
	background: #f5f5f5;
	border-radius: 3px;
	overflow: hidden;
	margin-bottom: 2rem;
`;

export const ProgressBar = styled.div`
	height: 100%;
	width: ${(props) => props.progress}%;
	background: #171717;
	border-radius: 3px;
	transition: width 0.1s ease-out;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;
	}
`;

export const Button = styled.button`
	${bodyText}
	padding: 0.75rem 1.5rem;
	font-size: 1rem;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s ease;
	min-width: 120px;

	${(props) =>
		props.primary
			? `
		background: #171717;
		color: white;
		border: none;
		
		&:hover {
			background: #333;
		}
	`
			: `
		background: white;
		color: #171717;
		border: 1px solid #ddd;
		
		&:hover {
			background: #f5f5f5;
		}
	`}

	@media (max-width: 480px) {
		width: 100%;
		min-width: unset;
	}
`;
