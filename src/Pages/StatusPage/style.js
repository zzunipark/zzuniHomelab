import styled, { keyframes } from "styled-components";

const StatusTitleJpg =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_StatusTitle.jpg";

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
	background-image: url(${StatusTitleJpg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 35vh;
`;

export const MainContainerTitle = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: #fff;
	text-align: center;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 42px;
	}
`;

export const MainContainerSubTitle = styled.div`
	font-size: 26px;
	font-weight: 500;
	color: #fff;
	margin-top: 5px;
	text-align: center;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const SubContainer1 = styled.div`
	background-color: #fff;
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SubContainer1Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	max-width: 1200px;
	width: 100%;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const SubContainer1Item = styled.div`
	background: linear-gradient(135deg, #171717 0%, #2a2a2a 100%);
	color: #fff;
	padding: 1rem 1.25rem;
	border-radius: 10px;
	font-size: 16px;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	text-align: center;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.1);
	&:hover {
		background: linear-gradient(135deg, #2a2a2a 0%, #444444 100%);
		transform: translateY(-1px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
	}
`;

export const SubContainer2 = styled.div`
	background: linear-gradient(135deg, #171717 0%, #1a1a1a 100%);
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

export const StatsContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin-bottom: 2rem;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
`;

export const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 2fr 2fr;
	gap: 1.5rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const StatCard = styled.div`
	background: rgba(255, 255, 255, 0.95);
	border-radius: 8px;
	padding: 1.25rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	border: 1px solid rgba(255, 255, 255, 0.8);
	transition: all 0.2s ease;
	backdrop-filter: blur(10px);

	&:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

export const StatContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const StatLabel = styled.div`
	font-size: 12px;
	font-weight: 500;
	color: #666;
	text-transform: uppercase;
	letter-spacing: 0.3px;
	margin-bottom: 0.25rem;
`;

export const StatValue = styled.div`
	font-size: 24px;
	font-weight: 700;
	color: #171717;
	line-height: 1;
	letter-spacing: -0.3px;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const StatUnit = styled.div`
	font-size: 12px;
	font-weight: 500;
	color: #888;
	margin-top: 0.25rem;
`;

export const StatBreakdown = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
	margin-top: 0.5rem;

	span {
		background: #f1f3f4;
		color: #5f6368;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-size: 10px;
		font-weight: 500;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		span {
			font-size: 9px;
			padding: 0.15rem 0.3rem;
		}
	}
`;

export const ServerSection = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
`;

export const DropdownServerCard = styled.div`
	background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
	border: 1px solid #e0e0e0;
	border-radius: 16px;
	overflow: hidden;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
		border-color: #d0d0d0;
	}
`;

export const ServerCardHeader = styled.div`
	padding: 1.25rem 1.5rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.3s ease;
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.9) 0%,
		rgba(249, 249, 249, 0.9) 100%
	);
	&:hover {
		background: linear-gradient(
			135deg,
			rgba(245, 245, 245, 0.9) 0%,
			rgba(240, 240, 240, 0.9) 100%
		);
	}
`;

export const ServerCardHeaderContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const ServerCardTitleRow = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-bottom: 0.75rem;
`;

export const ServerCardTitle = styled.h3`
	font-size: 22px;
	font-weight: 700;
	color: #171717;
	margin: 0;
	letter-spacing: -0.3px;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

export const ServerTypeTag = styled.span`
	background: linear-gradient(135deg, #171717 0%, #2a2a2a 100%);
	color: white;
	padding: 0.25rem 0.75rem;
	border-radius: 20px;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`;

export const ServerCardSummary = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const ServerSummaryItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	font-weight: 500;
	color: #666;
	background: rgba(0, 0, 0, 0.05);
	padding: 0.4rem 0.75rem;
	border-radius: 6px;
	strong {
		color: #333;
		margin-right: 0.25rem;
	}
`;

export const ServerStatus = styled.div`
	display: flex;
	align-items: center;
	gap: 0.4rem;
	margin-left: auto;
`;

export const StatusDot = styled.div`
	width: 8px;
	height: 8px;
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	border-radius: 50%;
	box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
	animation: pulse 2s infinite;
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}
`;

export const StatusText = styled.span`
	font-size: 12px;
	font-weight: 600;
	color: #10b981;
	text-transform: uppercase;
	letter-spacing: 0.3px;
`;

export const DropdownIcon = styled.div`
	color: #666;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
	svg {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}
`;

export const ServerCardContent = styled.div`
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	max-height: ${(props) => (props.isOpen ? "500px" : "0")};
	opacity: ${(props) => (props.isOpen ? "1" : "0")};
	background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
	border-top: ${(props) => (props.isOpen ? "1px solid #f0f0f0" : "none")};
`;

export const ServerCardGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
	padding: 2rem;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 1.5rem;
		padding: 1.5rem;
	}
`;

export const ServerCardColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ServerCardItem = styled.div`
	font-size: 16px;
	color: #333;
	line-height: 1.6;
	padding: 0.75rem;
	background: rgba(255, 255, 255, 0.7);
	border-radius: 8px;
	border: 1px solid rgba(0, 0, 0, 0.05);
	transition: all 0.2s ease;
	&:hover {
		background: rgba(255, 255, 255, 0.9);
		border-color: rgba(0, 0, 0, 0.1);
	}
	strong {
		color: #171717;
		font-weight: 600;
		margin-right: 0.5rem;
	}
	@media (max-width: 768px) {
		font-size: 14px;
		padding: 0.5rem;
	}
`;

export const ServerCardList = styled.ul`
	margin: 0.5rem 0 0 0;
	padding-left: 1rem;
	list-style-type: disc;
	li {
		margin-bottom: 0.25rem;
		color: #555;
		line-height: 1.4;
	}
`;

export const SubContainer3 = styled.div`
	background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(0, 0, 0, 0.1),
			transparent
		);
	}
`;

export const SliderContainer = styled.div`
	overflow: hidden;
	width: 100%;
	height: 80px;
	position: relative;
	mask-image: linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SliderTrack = styled.div`
	display: flex;
	width: calc(200% + 1rem);
	animation: ${scroll} 30s linear infinite;
	&:hover {
		animation-play-state: paused;
	}
`;

export const SliderItem = styled.div`
	min-width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 3rem;
	transition: all 0.3s ease;
	img {
		height: 60px;
		filter: grayscale(100%) opacity(0.7);
		transition: all 0.3s ease;
	}
	&:hover img {
		filter: grayscale(0%) opacity(1);
		transform: scale(1.1);
	}
`;

export const SliderDesc = styled.div`
	font-size: 20px;
	color: #333;
	margin-top: 2rem;
	text-align: center;
	font-weight: 600;
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	max-width: 800px;
	line-height: 1.6;
	@media (max-width: 768px) {
		font-size: 18px;
		padding: 0 1rem;
		margin-top: 1.5rem;
	}
`;

// ============ 서비스 상태 배너 ============
const statusPulse = keyframes`
	0%, 100% { opacity: 1; transform: scale(1); }
	50% { opacity: 0.6; transform: scale(1.2); }
`;

export const StatusBanner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	margin-top: 1.5rem;
	padding: 0.75rem 1.5rem;
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid ${(props) => props.color || "#10b981"};
	border-radius: 50px;
	backdrop-filter: blur(10px);
	opacity: 0;
	transform: translateY(20px);
	animation: ${fadeIn} 1s ease-out forwards;
	animation-delay: 0.3s;
`;

export const ServiceStatusDot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${(props) => props.color || "#10b981"};
	box-shadow: 0 0 10px ${(props) => props.color || "#10b981"};
	animation: ${(props) => (props.$pulse ? statusPulse : "none")} 2s
		ease-in-out infinite;
`;

export const ServiceStatusText = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #fff;
	letter-spacing: 0.5px;
`;
