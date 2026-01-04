import styled from "styled-components";

const LogoInvertedpng =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Inverted.png";

export const FooterContainer = styled.div`
	background-color: #171717;
	color: #fff;
	padding: 8vh 18rem;

	@media (max-width: 1450px) {
		padding: 8vh 2rem;
	}
`;

export const FooterTop = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-bottom: 24px;

	@media (max-width: 1450px) {
		align-items: center;
	}

	@media (max-width: 768px) {
		align-items: center;
	}
`;

export const FooterTopSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 1450px) {
		align-items: flex-start;
	}
`;

export const LogoBox = styled.div`
	width: 200px;
	height: 60px;
	background-image: url(${LogoInvertedpng});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;

	@media (max-width: 1450px) {
		width: 150px;
		height: 50px;
	}
`;

export const Navigator = styled.div`
	display: flex;
	gap: 50px;
	margin-top: 12px;

	@media (max-width: 1450px) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	@media (max-width: 480px) {
		gap: 10px;
		flex-direction: column;
		align-items: center;
	}
`;

export const NavigatorText = styled.span`
	cursor: pointer;
	font-size: 16px;
	color: #fff;
	transition: color 0.3s ease;

	&:hover {
		color: #ccc;
	}
`;

export const FooterBottom = styled.div`
	text-align: center;

	@media (max-width: 1450px) {
		align-items: center;
	}
`;

export const CopyRightText = styled.div`
	font-size: 12px;
	line-height: 1.5;
	opacity: 0.8;
	text-align: left;

	@media (max-width: 1450px) {
		text-align: center;
	}
`;
