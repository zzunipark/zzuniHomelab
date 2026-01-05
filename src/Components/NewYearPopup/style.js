import styled, { keyframes } from "styled-components";

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

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9999;
`;

export const PopupContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	padding: 3rem;
	max-width: 520px;
	width: 90%;
	max-height: 80vh;
	overflow-y: auto;
	z-index: 10000;
	animation: ${fadeIn} 0.5s ease-out;

	@media (max-width: 542px) {
		padding: 2rem;
		width: 92%;
	}
`;

export const Title = styled.h2`
	font-size: 28px;
	font-weight: 700;
	color: #171717;
	margin: 0 0 0.5rem 0;

	@media (max-width: 542px) {
		font-size: 22px;
	}
`;

export const SubTitle = styled.p`
	font-size: 16px;
	font-weight: 500;
	color: #666;
	margin: 0 0 2rem 0;

	@media (max-width: 542px) {
		font-size: 14px;
		margin-bottom: 1.5rem;
	}
`;

export const Content = styled.div`
	font-size: 15px;
	font-weight: 400;
	color: #171717;
	line-height: 1.8;
	margin-bottom: 2rem;
	word-break: keep-all;

	@media (max-width: 542px) {
		font-size: 14px;
		line-height: 1.7;
	}
`;

export const Paragraph = styled.p`
	margin: 0 0 1rem 0;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Greeting = styled.div`
	font-size: 18px;
	font-weight: 600;
	color: #171717;
	margin-bottom: 0.8rem;
	padding: 1.2rem;
	background-color: #f5f5f5;
	text-align: center;

	@media (max-width: 542px) {
		font-size: 16px;
		padding: 1rem;
	}
`;

export const Signature = styled.div`
	text-align: right;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;

	span {
		font-size: 14px;
		font-weight: 500;
		color: #888;
	}

	img {
		height: 90px;
		opacity: 0.7;
	}

	@media (max-width: 542px) {
		span {
			font-size: 12px;
		}
		img {
			height: 70px;
		}
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 0.8rem;
	justify-content: flex-end;

	@media (max-width: 542px) {
		flex-direction: column-reverse;
	}
`;

export const CloseButton = styled.button`
	background-color: #171717;
	color: #fff;
	padding: 12px 24px;
	border: none;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	font-family: "Pretendard", sans-serif;
	transition: background-color 0.3s ease-out;

	&:hover {
		background-color: #444;
	}

	@media (max-width: 542px) {
		padding: 14px 20px;
	}
`;

export const DontShowButton = styled.button`
	background-color: transparent;
	color: #888;
	padding: 12px 24px;
	border: 1px solid #ddd;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
	font-family: "Pretendard", sans-serif;
	transition: all 0.3s ease-out;

	&:hover {
		border-color: #aaa;
		color: #666;
	}

	@media (max-width: 542px) {
		padding: 14px 20px;
	}
`;
