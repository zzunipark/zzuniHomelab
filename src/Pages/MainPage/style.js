import styled, { keyframes, css } from "styled-components";

const Image1Jpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Main_SubContainer1.jpg";
const Image2Jpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Main_SubContainer2.jpg";

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
	position: relative;
	height: 100vh;
	z-index: 1;
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}
	@media (max-width: 542px) {
		height: 100vh;
	}
`;

export const SubContainer1 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
	background-color: #fff;
	padding: 0 18rem;
	@media (max-width: 1800px) {
		flex-direction: column;
		height: auto;
		padding: 4rem;
		padding-left: 18rem;
		padding-right: 18rem;
	}
	@media (max-width: 1450px) {
		padding: 2rem;
	}
`;

export const SubContainer1SectionLeft = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
	height: 100%;
	@media (max-width: 1800px) {
		margin-bottom: 2rem;
	}
`;

export const SubContainer1SectionRight = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 50%;
	background-image: url(${Image1Jpg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	@media (max-width: 1800px) {
		width: 100%;
		height: 300px;
	}
`;

export const SubContainer1SectionSubTitle = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 40px;
	font-weight: 600;
	color: #171717;
	margin-bottom: 15px;
	@media (max-width: 1100px) {
		font-size: 28px;
	}
	@media (max-width: 542px) {
		font-size: 24px;
	}
	@media (max-width: 368px) {
		font-size: 20px;
	}
`;

export const SubContainer1SectionTitle = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 80px;
	font-weight: 800;
	color: #171717;
	margin-bottom: 10px;
	@media (max-width: 1920px) {
		font-size: 70px;
	}
	@media (max-width: 1100px) {
		font-size: 40px;
	}
	@media (max-width: 542px) {
		font-size: 32px;
	}
	@media (max-width: 368px) {
		font-size: 28px;
	}
`;

export const SubContainer1SectionDescription = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 22px;
	font-weight: 500;
	color: #171717;
	@media (max-width: 1920px) {
		font-size: 20px;
	}
	@media (max-width: 1100px) {
		font-size: 18px;
	}
	@media (max-width: 542px) {
		font-size: 16px;
	}
	@media (max-width: 368px) {
		font-size: 14px;
	}
`;

export const SubContainer1SectionButton = styled.div`
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
	margin-top: 20px;
	background-color: #444444;
	color: #fff;
	padding: 15px 30px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease-out;
	&:hover {
		background-color: #171717;
	}
`;

export const SubContainer2 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 60vh;
	background: linear-gradient(180deg, #171717 0%, #1e1e1e 50%, #171717 100%);
	padding: 5rem 2rem;

	@media (max-width: 768px) {
		padding: 3rem 1.5rem;
	}
`;

export const SubContainer2SectionTop = styled.div`
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
	flex-direction: column;
	@media (max-width: 1450px) {
		padding: 0;
	}
`;

export const SubContainer2SectionBottom = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1400px;
`;

export const RegionContainer = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out 0.3s forwards;
		`}
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 2.5rem;
	color: rgba(255, 255, 255, 0.3);
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0.3px;

	@media (max-width: 542px) {
		font-size: 12px;
	}
`;

export const RegionLabel = styled.span``;

export const RegionList = styled.div`
	display: flex;
	align-items: center;
	gap: 0;
`;

export const RegionItem = styled.div`
	display: flex;
	align-items: center;

	&::before {
		content: "·";
		margin: 0 0.5rem;
		color: rgba(255, 255, 255, 0.2);
	}
`;

export const RegionDot = styled.div`
	display: none;
`;

export const RegionName = styled.span`
	color: rgba(255, 255, 255, 0.5);
	font-weight: 500;
`;

export const RegionBadge = styled.span`
	display: none;
`;

export const SubContainer2SectionSubTitle = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 40px;
	font-weight: 600;
	color: #fff;
	margin-bottom: 10px;
	@media (max-width: 1920px) {
		font-size: 35px;
	}
	@media (max-width: 1764px) {
		font-size: 30px;
	}
	@media (max-width: 1570px) {
		font-size: 27px;
	}
	@media (max-width: 1450px) {
		font-size: 25px;
	}
	@media (max-width: 1100px) {
		font-size: 28px;
	}
	@media (max-width: 542px) {
		font-size: 24px;
		text-align: center;
	}
	@media (max-width: 368px) {
		font-size: 20px;
	}
`;

export const SubContainer2SectionTitle = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 60px;
	text-align: center;
	font-weight: 800;
	color: #fff;
	margin-bottom: 10px;
	@media (max-width: 1920px) {
		font-size: 55px;
	}
	@media (max-width: 1764px) {
		font-size: 45px;
	}
	@media (max-width: 1570px) {
		font-size: 40px;
	}
	@media (max-width: 1450px) {
		font-size: 40px;
	}
	@media (max-width: 1100px) {
		font-size: 30px;
		text-align: center;
	}
	@media (max-width: 768px) {
		font-size: 29px;
	}
	@media (max-width: 542px) {
		font-size: 27px;
		text-align: center;
	}
	@media (max-width: 368px) {
		font-size: 23px;
	}
`;

export const SubContainer2SectionDescription = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 22px;
	font-weight: 500;
	color: #fff;
	text-align: center;
	margin-top: 20px;
`;

export const StatsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	width: 100%;
	margin-top: 3rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 542px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const StatsItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(16px);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 20px;
	padding: 2.5rem 2rem;
	min-height: 160px;
	transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(255, 255, 255, 0.5),
			transparent
		);
		opacity: 0;
		transition: opacity 0.35s ease;
	}

	&:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.18);
		transform: translateY(-4px);
		box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35);

		&::before {
			opacity: 1;
		}
	}

	@media (max-width: 542px) {
		padding: 2rem 1.5rem;
		min-height: 120px;
	}
`;

export const StatsItemDescription = styled.div`
	font-size: 15px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.45);
	text-transform: uppercase;
	letter-spacing: 1.5px;
	margin-top: 0.75rem;

	@media (max-width: 542px) {
		font-size: 13px;
	}
`;

export const CountUpStyle = styled.span`
	font-size: 48px;
	font-weight: 700;
	color: #fff;
	letter-spacing: -1px;
	line-height: 1;

	@media (max-width: 1100px) {
		font-size: 42px;
	}
	@media (max-width: 542px) {
		font-size: 36px;
	}
`;

export const SubContainer3 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 50vh;
	background-color: #fff;
	padding: 0 18rem;
	@media (max-width: 1450px) {
		flex-direction: column;
		height: auto;
		padding-right: 0;
		padding-left: 0;
		padding-top: 4rem;
		padding-bottom: 4rem;
	}
`;

export const SubContainer3Section = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	background-image: url(${Image2Jpg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 30vh;
	@media (max-width: 1450px) {
		padding: 0;
		height: 150px;
	}
`;

export const SubContainer3SectionDescription = styled.div`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	font-size: 24px;
	font-weight: 600;
	color: #fff;
	text-align: center;
	padding: 0 20px;

	@media (max-width: 1900px) {
		font-size: 22px;
	}
	@media (max-width: 1450px) {
		font-size: 20px;
	}
	@media (max-width: 1100px) {
		font-size: 18px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
	@media (max-width: 542px) {
		font-size: 14px;
	}
	@media (max-width: 368px) {
		font-size: 12px;
	}
`;
