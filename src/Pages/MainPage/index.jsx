/*eslint-disable*/
import React, { useState, useEffect } from "react";
import * as s from "./style";
import BackgroundVideo from "../../Assets/videos/background.mp4";

const MainPage = () => {
  const [language, setLanguage] = useState("Korean");
  const AboutUsRef = React.createRef();
  const ProjectsRef = React.createRef();
  const ContactUsRef = React.createRef();

  const goToStatus = () => {
    location.href = "https://zzunilabs.statuspage.io/";
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "Korean" ? "English" : "Korean"));
  };

  const handleVideoClick = (e) => {
    e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause();
  };

  return (
    <>
      {language === "Korean" ? (
        <>
          <s.MainNavbar>
            <s.LogoBox />
            <s.Navigator>
              <s.Navigator>
                <s.NavigatorText onClick={() => AboutUsRef.current.scrollIntoView({ behavior: "smooth" })}>소개</s.NavigatorText>
                <s.NavigatorText onClick={() => ProjectsRef.current.scrollIntoView({ behavior: "smooth" })}>프로젝트</s.NavigatorText>
                <s.NavigatorText onClick={() => ContactUsRef.current.scrollIntoView({ behavior: "smooth" })}>연락처</s.NavigatorText>
              </s.Navigator>
            </s.Navigator>
            <s.UtilityBox>
              <s.Status onClick={goToStatus} />
              <s.Globe onClick={toggleLanguage} />
            </s.UtilityBox>
          </s.MainNavbar>
          <s.MainContainer>
            <video controls={false} muted autoPlay loop onClick={handleVideoClick} playsInline>
              <source src={BackgroundVideo} type="video/mp4" />
              귀하의 브라우저는 영상 재생 기능을 지원하지 않습니다. 다른 브라우저로 시도하세요.
            </video>
          </s.MainContainer>
          <s.SubContainer1 ref={AboutUsRef}>
            <p>소개</p>
          </s.SubContainer1>
        </>
      ) : (
        <>
          <s.MainNavbar>
            <s.LogoBox />
            <s.Navigator>
              <s.Navigator>
                <s.NavigatorText onClick={() => AboutUsRef.current.scrollIntoView({ behavior: "smooth" })}>About Us</s.NavigatorText>
                <s.NavigatorText onClick={() => ProjectsRef.current.scrollIntoView({ behavior: "smooth" })}>Projects</s.NavigatorText>
                <s.NavigatorText>Contact Us</s.NavigatorText>
              </s.Navigator>
            </s.Navigator>
            <s.UtilityBox>
              <s.Status />
              <s.Globe onClick={toggleLanguage} />
            </s.UtilityBox>
          </s.MainNavbar>
          <s.MainContainer>
            <video controls={false} muted autoPlay loop onClick={handleVideoClick} playsInline>
              <source src={BackgroundVideo} type="video/mp4" />
              귀하의 브라우저는 영상 재생 기능을 지원하지 않습니다. 다른 브라우저로 시도하세요.
            </video>
          </s.MainContainer>
        </>
      )}
    </>
  );
};

export default MainPage;
