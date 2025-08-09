import { keyframes, css } from "styled-components";

// 공통 애니메이션
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideOutToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

// 공통 애니메이션 믹스인
export const animatedComponent = css`
	opacity: 0;
	transform: translateY(20px);
	${(props) =>
		props.animate &&
		css`
			animation: ${fadeIn} 1s ease-out forwards;
		`}
`;

// 공통 컨테이너 스타일
export const responsiveContainer = css`
	padding: 0 18rem;
	@media (max-width: 2000px) {
		padding: 0 14rem;
	}
	@media (max-width: 1600px) {
		padding: 0 8rem;
	}
	@media (max-width: 1200px) {
		padding: 0 4rem;
	}
	@media (max-width: 768px) {
		padding: 0 2rem;
	}
	@media (max-width: 480px) {
		padding: 0 1rem;
	}
`;

// 공통 버튼 스타일
export const primaryButton = css`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #444444;
	color: #fff;
	padding: 15px 30px;
	border-radius: 5px;
	cursor: pointer;
	border: none;
	font-size: 16px;
	font-weight: 500;
	transition: all 0.3s ease;

	&:hover {
		background-color: #171717;
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
	}
`;

// 공통 제목 스타일
export const sectionTitle = css`
	font-size: 56px;
	font-weight: 700;
	color: #171717;
	text-align: center;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 42px;
	}
	@media (max-width: 480px) {
		font-size: 32px;
	}
`;

export const sectionSubtitle = css`
	font-size: 26px;
	font-weight: 400;
	color: #333;
	text-align: center;
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 20px;
	}
	@media (max-width: 480px) {
		font-size: 18px;
	}
`;

// iOS에서 본문 텍스트를 위한 가벼운 폰트 스타일
export const lightText = css`
	font-weight: 200;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	
	/* iOS Safari에서 폰트를 더 가볍게 보이도록 */
	@supports (-webkit-appearance: none) {
		font-weight: 100;
		-webkit-font-smoothing: subpixel-antialiased;
	}
	
	/* iOS 특정 미디어 쿼리 */
	@media screen and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		font-weight: 100;
		-webkit-font-smoothing: subpixel-antialiased;
		text-rendering: optimizeLegibility;
	}
`;

// iOS에서 일반 본문 텍스트를 위한 스타일
export const bodyText = css`
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility;
	
	/* iOS Safari에서 폰트를 더 가볍게 보이도록 */
	@supports (-webkit-appearance: none) {
		font-weight: 200;
		-webkit-font-smoothing: subpixel-antialiased;
	}
	
	/* iOS 특정 미디어 쿼리 */
	@media screen and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		font-weight: 200;
		-webkit-font-smoothing: subpixel-antialiased;
	}
	
	/* iPhone에서 더 가벼운 폰트 */
	@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
		font-weight: 200;
	}
`;
