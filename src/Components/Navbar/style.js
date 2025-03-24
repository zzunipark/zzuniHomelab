import styled, { keyframes } from "styled-components";
import Logopng from "../../Assets/images/png/logo.png";
import Globesvg from "../../Assets/images/svg/globe.svg";
import Statussvg from "../../Assets/images/svg/status.svg";

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const MainNavbar = styled.div`
	top: 0;
	left: 0;
	right: 0;
	z-index: 1000;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	height: 50px;
	padding: 0 18rem;
	position: fixed;
	@media (max-width: 1450px) {
		padding: 0 2rem;
	}
`;

export const LogoBox = styled.div`
	width: 150px;
	height: 100%;
	background-image: url(${Logopng});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

export const Navigator = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 400px;
	padding-right: 30px;
	padding-left: 30px;
	@media (max-width: 1450px) {
		display: none;
	}
`;

export const NavigatorText = styled.div`
	font-size: 18px;
	font-weight: 400;
	color: #171717;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const UtilityBox = styled.div`
	width: 150px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 890px) {
		justify-content: flex-end;
	}
`;

export const Globe = styled.div`
	width: 24px;
	height: 24px;
	background-image: url(${Globesvg});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	margin-left: 5px;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Status = styled.div`
	width: 32px;
	height: 28px;
	background-image: url(${Statussvg});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const HamburgerIcon = styled.div`
	display: none;
	flex-direction: column;
	justify-content: space-around;
	width: 20px;
	height: 20px;
	margin-left: 12px;
	cursor: pointer;
	@media (max-width: 1450px) {
		display: flex;
	}
`;

export const HamburgerLine = styled.div`
	width: 100%;
	height: 3px;
	background-color: #171717;
`;

export const MobileNavOverlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(23, 23, 23, 0.5);
	z-index: 999;
`;

export const MobileNavContent = styled.div`
	background-color: #ffffff;
	width: 300px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	animation: ${(props) =>
			props.isClosing ? slideOutToRight : slideInFromRight}
		0.5s ease-out forwards;
	display: flex;
	flex-direction: column;
	padding: 20px;
	box-sizing: border-box;
`;

export const MobileNavClose = styled.div`
	font-size: 36px;
	font-weight: 300;
	color: #171717;
	align-self: flex-end;
	cursor: pointer;
`;

export const MobileNavMenu = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
`;

export const MobileNavItem = styled.div`
	font-size: 20px;
	font-weight: 400;
	margin-bottom: 20px;
	color: #171717;
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;

export const MobileNavContact = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: #171717;
	line-height: 1.6;
`;

export const RefuseEmailButton = styled.div``;
