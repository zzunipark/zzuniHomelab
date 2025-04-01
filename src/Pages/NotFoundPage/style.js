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

export const MainContainerTitle = styled.div`
	font-size: 112px;
	text-align: center;
	font-weight: 800;

	@media (max-width: 542px) {
		font-size: 80px;
	}
`;

export const MainContainerSubtitle = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
	text-align: center;

	@media (max-width: 542px) {
		font-size: 24px;
	}
`;

export const MainContainerButton = styled.button`
	width: 120px;
	padding: 10px;
	background-color: #171717;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s ease;
	margin-top: 20px;

	&:hover {
		background-color: #333;
	}
`;
