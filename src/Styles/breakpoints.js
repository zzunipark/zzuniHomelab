// 반응형 브레이크포인트 표준화
export const breakpoints = {
	mobile: "480px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1200px",
	wide: "1440px",
	ultrawide: "1920px",
};

// 미디어 쿼리 헬퍼 함수
export const media = {
	mobile: `@media (max-width: ${breakpoints.mobile})`,
	tablet: `@media (max-width: ${breakpoints.tablet})`,
	laptop: `@media (max-width: ${breakpoints.laptop})`,
	desktop: `@media (max-width: ${breakpoints.desktop})`,
	wide: `@media (max-width: ${breakpoints.wide})`,
	ultrawide: `@media (max-width: ${breakpoints.ultrawide})`,
};

// 범위형 미디어 쿼리
export const between = {
	mobileToTablet: `@media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet})`,
	tabletToLaptop: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
	laptopToDesktop: `@media (min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`,
};
