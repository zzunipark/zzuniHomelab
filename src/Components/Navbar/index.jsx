import React, { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import useServiceStatus from "../../hooks/useServiceStatus";
import useTheme from "../../hooks/useTheme";

const LOGO_LIGHT = "https://mirror.zzunipark.com/.assets/zzuniHomelab.png";
const LOGO_DARK =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Inverted.png";

const Navbar = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);
	const { theme, toggleTheme } = useTheme();
	const { status, loading, error } = useServiceStatus();

	const statusText = error
		? language === "Korean"
			? "상태 확인 실패"
			: "Status Check Failed"
		: loading
			? language === "Korean"
				? "상태 확인 중..."
				: "Checking status..."
			: language === "Korean"
				? status?.text?.ko || "정상 운영"
				: status?.text?.en || "Operational";

	const statusColor = error
		? "#ef4444"
		: loading
			? "#6b7280"
			: status?.color || "#10b981";

	const themeTitle =
		theme === "dark"
			? language === "Korean"
				? "라이트 모드로 변경"
				: "Switch to light mode"
			: language === "Korean"
				? "다크 모드로 변경"
				: "Switch to dark mode";

	const languageTitle =
		language === "Korean" ? "Switch to English" : "한국어로 변경";

	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<a className="logo" href="/" aria-label="zzuniHomelab">
						<img
							className="logo-light"
							src={LOGO_LIGHT}
							alt="zzuniHomelab"
						/>
						<img
							className="logo-dark"
							src={LOGO_DARK}
							alt="zzuniHomelab"
						/>
					</a>
					<div className="header-info">
						<div>
							<a
								href="https://status.zzunipark.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span
									className={`status-dot ${
										!loading && !error && status?.isHealthy
											? "pulse"
											: ""
									}`}
									style={{ backgroundColor: statusColor }}
								/>
								<span>{statusText}</span>
							</a>
						</div>
						<div>homelab.zzunipark.com</div>
						<div>
							{language === "Korean"
								? "광주 · 안양, 대한민국"
								: "Gwangju · Anyang, South Korea"}
						</div>
						<div className="controls">
							<button
								className="control-btn theme-toggle"
								onClick={toggleTheme}
								title={themeTitle}
								aria-label={themeTitle}
							>
								<i
									className={`fas ${
										theme === "dark" ? "fa-sun" : "fa-moon"
									}`}
								/>
							</button>
							<button
								className="control-btn lang-toggle"
								onClick={toggleLanguage}
								title={languageTitle}
								aria-label={languageTitle}
							>
								<i className="fas fa-globe" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
