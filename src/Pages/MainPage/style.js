import styled, { keyframes, css } from "styled-components";
import Image1Jpg from "../../Assets/images/jpg/image1.jpg";
import Image2Jpg from "../../Assets/images/jpg/image2.jpg";

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
	height: 60vh;
	background-color: #171717;
	padding: 0 18rem;
	@media (max-width: 1450px) {
		flex-direction: column;
		height: auto;
		padding: 2rem;
		padding-top: 4rem;
		padding-bottom: 4rem;
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
	justify-content: center;
	align-items: center;
	padding: 0 10rem;
	width: 100%;
	@media (max-width: 1450px) {
		padding: 0;
	}
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
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 20px;
	> * {
		margin: 0 10px;
	}
	@media (max-width: 1450px) {
		flex-direction: column;
		> * {
			margin: 10px 0;
		}
	}
`;

export const StatsItem = styled.div`
	font-size: 36px;
	font-weight: bold;
	color: #171717;
	text-align: center;
	justify-content: center;
	align-items: center;
	display: flex;
	background-color: #fff;
	padding: 20px 30px;
	border-radius: 30px;
	width: 100%;
	height: 150px;
	flex-direction: column;
	@media (max-width: 1450px) {
		width: 100%;
		padding: 8px 0;
		font-size: 30px;
	}
	@media (max-width: 1100px) {
		font-size: 24px;
		padding: 0;
	}
	@media (max-width: 542px) {
		font-size: 20px;
	}
	@media (max-width: 368px) {
		font-size: 18px;
	}
`;

export const StatsItemDescription = styled.div`
	font-size: 24px;
	font-weight: 500;
	color: #171717;

	@media (max-width: 1450px) {
		font-size: 20px;
	}
	@media (max-width: 1100px) {
		font-size: 17px;
	}
	@media (max-width: 542px) {
		font-size: 14px;
	}
	@media (max-width: 368px) {
		font-size: 12px;
	}
`;

export const CountUpStyle = styled.span`
	font-size: 48px;
	font-weight: 700;
	color: #171717;
	@media (max-width: 1100px) {
		font-size: 45px;
	}
	@media (max-width: 542px) {
		font-size: 42px;
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
