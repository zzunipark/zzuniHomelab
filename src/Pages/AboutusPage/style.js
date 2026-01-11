import styled, { keyframes, css } from "styled-components";

const AboutusTitleJpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_AboutusTitle.jpg";

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

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

	@media (max-width: 768px) {
		margin: 0 0.7rem;
		font-size: 16px;
	}

	@media (max-width: 480px) {
		font-size: 14px;
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
	max-width: 800px;
	width: 100%;
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
	@media (max-width: 768px) {
		font-size: 16px;
		max-width: 100%;
		padding: 0 1rem;
	}
`;

export const GreetingSignature = styled.div`
	margin-top: 20px;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	display: flex;
	align-items: center;
	gap: 0.5rem;
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}

	span {
		font-size: 16px;
		font-weight: 500;
		color: #888;
	}

	img {
		height: 120px;
		opacity: 0.8;
	}

	@media (max-width: 542px) {
		span {
			font-size: 14px;
		}
		img {
			height: 90px;
		}
	}
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
	width: 80%;
	max-width: 800px;
	height: auto;
	display: block;
`;

export const HistoryContainer = styled.div`
	width: 100%;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
`;

export const HistoryTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	margin-bottom: 1rem;
	margin-top: 20px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 36px;
	}
`;

export const HistorySubtitle = styled.div`
	font-size: 16px;
	color: #666;
	text-align: center;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		font-size: 14px;
		padding: 0 1rem;
	}
`;

export const HistoryBanner = styled.div`
	width: 100%;
	max-width: 900px;
	height: 200px;
	margin-bottom: 3rem;
	overflow: hidden;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60px;
		background: linear-gradient(to top, #fff, transparent);
	}

	@media (max-width: 768px) {
		height: 150px;
		margin: 0 1rem 2rem;
		width: calc(100% - 2rem);
	}
`;

export const HistoryTimeline = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 0 2rem;

	@media (max-width: 768px) {
		padding: 0 1.5rem;
	}
`;

export const HistoryYearGroup = styled.div`
	display: flex;
	margin-bottom: 5rem;
	min-height: auto;
	${(props) => props.$isEven && "flex-direction: row-reverse;"}

	@media (max-width: 768px) {
		flex-direction: column;
		margin-bottom: 2rem;
		margin-left: 1rem;
	}
`;

export const HistoryYearLabelContainer = styled.div`
	flex: 0 0 120px;

	@media (max-width: 768px) {
		flex: 0 0 auto;
		margin-bottom: 1rem;
	}
`;

export const HistoryYearLabel = styled.div`
	font-size: 48px;
	font-weight: 800;
	color: #171717;
	position: relative;
	padding-bottom: 12px;
	${(props) => props.$isEven && "text-align: right;"}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		${(props) => (props.$isEven ? "right: 0;" : "left: 0;")}
		width: 80px;
		height: 6px;
		background: #171717;
	}

	@media (max-width: 768px) {
		font-size: 32px;
		text-align: left;

		&::after {
			left: 0;
			right: auto;
			width: 60px;
			height: 4px;
		}
	}
`;

export const HistoryYearImage = styled.img`
	display: none;
`;

export const HistoryEventList = styled.div`
	flex: 1;
	position: relative;
	padding-left: 2rem;
	margin-left: 2rem;
	${(props) =>
		props.$isEven &&
		`
		padding-left: 0;
		margin-left: 0;
		padding-right: 2rem;
		margin-right: 2rem;
	`}

	&::before {
		content: "";
		position: absolute;
		${(props) => (props.$isEven ? "right: 0;" : "left: 0;")}
		top: 8px;
		bottom: 8px;
		width: 2px;
		background: #171717;
	}

	@media (max-width: 768px) {
		margin-left: 0;
		padding-left: 1.25rem;
		margin-right: 0;
		padding-right: 0;

		&::before {
			left: 0;
			right: auto;
			top: 6px;
			bottom: -6px;
		}
	}
`;

export const HistoryItem = styled.div`
	position: relative;
	margin-bottom: 1.5rem;
	opacity: 0;
	transform: translateY(10px);
	animation: ${slideInFromRight} 0.5s ease-out forwards;
	animation-delay: ${(props) => props.index * 0.05}s;

	&::before {
		content: "";
		position: absolute;
		${(props) =>
			props.$isEven
				? "right: calc(-2rem - 4px);"
				: "left: calc(-2rem - 4px);"}
		top: 6px;
		width: 10px;
		height: 10px;
		background: #171717;
		border-radius: 50%;
		z-index: 1;
	}

	&:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		&::before {
			left: calc(-1.25rem - 3px) !important;
			right: auto !important;
			width: 8px;
			height: 8px;
			top: 5px;
		}
	}
`;

export const HistoryMarker = styled.div`
	display: none;
`;

export const HistoryNumber = styled.span`
	display: none;
`;

export const HistoryCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	${(props) => props.$isEven && "align-items: flex-end;"}

	@media (max-width: 768px) {
		align-items: flex-start;
	}
`;

export const HistoryCardHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	${(props) => props.$isEven && "flex-direction: row-reverse;"}

	@media (max-width: 768px) {
		flex-direction: row;
	}
`;

export const HistoryItemImage = styled.img`
	width: 100%;
	max-width: 280px;
	height: auto;
	border-radius: 4px;
	margin-top: 0.75rem;
	object-fit: cover;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

export const HistoryYearMonth = styled.div`
	flex: 0 0 auto;
	font-size: 14px;
	font-weight: 600;
	color: #888;
	min-width: 50px;
	${(props) => props.$isEven && "text-align: right;"}

	@media (max-width: 768px) {
		text-align: left;
	}
`;

export const HistoryDesc = styled.div`
	font-size: 15px;
	color: #171717;
	line-height: 1.5;
	${(props) => props.$isEven && "text-align: right;"}

	@media (max-width: 768px) {
		font-size: 14px;
		text-align: left;
	}
`;

export const HistoryScrollHint = styled.div`
	display: none;
`;

export const GalleryContainer = styled.div`
	padding: 2rem 5rem;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const GalleryTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	margin-bottom: 2rem;
	margin-top: 20px;
`;

export const GalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	width: 100%;
	max-width: 800px;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const GalleryItem = styled.div`
	cursor: pointer;
	overflow: hidden;
	border-radius: 8px;
	&:hover img {
		transform: scale(1.1);
		transition: transform 0.3s;
	}
`;

export const GalleryImg = styled.img`
	width: 100%;
	height: auto;
	display: block;
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;

export const ModalContent = styled.div`
	position: relative;
	max-width: 90%;
	max-height: 90%;
`;

export const ModalImg = styled.img`
	width: 100%;
	height: auto;
	display: block;
	border-radius: 8px;
`;
