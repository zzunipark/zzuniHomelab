import styled from "styled-components";

// 스크린 리더 전용 텍스트
export const ScreenReaderOnly = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

// 포커스 표시기
export const focusOutline = `
  &:focus {
    outline: 2px solid #171717;
    outline-offset: 2px;
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

// 색상 대비 개선
export const colors = {
	primary: "#171717",
	secondary: "#444444",
	accent: "#0066cc",
	background: "#ffffff",
	surface: "#f9f9f9",
	text: {
		primary: "#171717",
		secondary: "#666666",
		disabled: "#999999",
	},
	status: {
		success: "#28a745",
		warning: "#ffc107",
		error: "#dc3545",
		info: "#17a2b8",
	},
};
