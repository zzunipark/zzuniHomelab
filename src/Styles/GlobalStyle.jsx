import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard';
  font-weight: 900;
  font-display: swap;
  src: local('Pretendard Black'),
    url('/fonts/woff2/Pretendard-Black.woff2') format('woff2'),
    url('/fonts/woff/Pretendard-Black.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 800;
  font-display: swap;
  src: local('Pretendard ExtraBold'),
    url('../../public/fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-display: swap;
  src: local('Pretendard Bold'),
    url('../../public/fonts/woff2/Pretendard-Bold.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Bold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 600;
  font-display: swap;
  src: local('Pretendard SemiBold'),
    url('../../public/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-SemiBold.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
  src: local('Pretendard Medium'),
    url('../../public/fonts/woff2/Pretendard-Medium.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Medium.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-display: swap;
  src: local('Pretendard Regular'),
    url('../../public/fonts/woff2/Pretendard-Regular.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-display: swap;
  src: local('Pretendard Light'),
    url('../../public/fonts/woff2/Pretendard-Light.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Light.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-display: swap;
  src: local('Pretendard ExtraLight'),
    url('../../public/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 100;
  font-display: swap;
  src: local('Pretendard Thin'),
    url('../../public/fonts/woff2/Pretendard-Thin.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Thin.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 200;
  font-display: swap;
  src: local('Pretendard ExtraLight'),
    url('../../public/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
}

@font-face {
  font-family: 'Pretendard';
  font-weight: 300;
  font-display: swap;
  src: local('Pretendard Light'),
    url('../../public/fonts/woff2/Pretendard-Light.woff2') format('woff2'),
    url('../../public/fonts/woff/Pretendard-Light.woff') format('woff');
}

/* iOS Safari에서 더 가벼운 기본 폰트 사용 */
@supports (-webkit-appearance: none) {
  @font-face {
    font-family: 'PretendardLight';
    font-weight: normal;
    font-display: swap;
    src: local('Pretendard Light'),
      url('../../public/fonts/woff2/Pretendard-Light.woff2') format('woff2'),
      url('../../public/fonts/woff/Pretendard-Light.woff') format('woff');
  }
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

/* iOS에서의 폰트 렌더링 최적화 */
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  * {
    -webkit-font-smoothing: subpixel-antialiased;
  }
}

/* iOS Safari 전용 폰트 최적화 */
@supports (-webkit-appearance: none) {
  * {
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-text-stroke: 0.1px transparent;
    font-family: 'PretendardLight', 'Pretendard', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  }
}

/* iPhone에서 Pretendard 폰트가 두껍게 보이는 문제 해결 */
@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  * {
    font-family: 'PretendardLight', 'Pretendard', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-text-stroke: 0.05px transparent;
  }
}
`;

export default GlobalStyle;
