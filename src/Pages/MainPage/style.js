/* eslint-disable*/
import styled from "styled-components";
import Logopng from "../../Assets/images/logo.png";
import Globesvg from "../../Assets/images/globe.svg";
import Statussvg from "../../Assets/images/status.svg";

export const LogoBox = styled.div`
  width: 150px;
  height: 100%;
  background-image: url(${Logopng});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
    max-width: 300px;
  }

  @media (max-width: 1180px) {
    display: none;
  }
`;

export const NavigatorText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
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
  background-color: #f7f7f7;
  height: 50px;
  padding: 0 16rem;

  @media (max-width: 1100px) {
    padding: 0 2rem;

    ${Navigator} {
      display: none;
    }

    ${NavigatorText} {
      display: block;
      text-align: center;
      padding: 10px;
      width: 100%;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100vh - 50px);
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
    height: 500px;
  }
`;

export const SubContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;