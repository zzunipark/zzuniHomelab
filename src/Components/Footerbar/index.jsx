import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

const LOGO_LIGHT = "https://mirror.zzunipark.com/.assets/zzuniHomelab.png";
const LOGO_DARK =
	"https://mirror.zzunipark.com/.assets/zzuniHomelab_Inverted.png";

const Footerbar = () => {
	const { language } = useContext(LanguageContext);
	const isKorean = language === "Korean";

	return (
		<footer className="site-footer">
			<div className="site-footer-container">
				<div className="site-footer-left">
					<div className="site-footer-logo">
						<NavLink
							className="logo"
							to="/"
							aria-label="zzuniHomelab"
						>
							<img
								className="footer-logo-light"
								src={LOGO_LIGHT}
								alt="zzuniHomelab"
							/>
							<img
								className="footer-logo-dark"
								src={LOGO_DARK}
								alt="zzuniHomelab"
							/>
						</NavLink>
					</div>
				</div>
				<div className="site-footer-right">
					<p className="footer-main-text">
						© 2023-2026 zzuniHomelab.
					</p>
						<p className="footer-small-text">
							{isKorean
								? "zzuniHomelab에서 운영되는 공공 서비스는 누구나 자유롭게 사용할 수 있습니다."
								: "Public services operated by zzuniHomelab are freely available to everyone."}
							<br />
							{isKorean
								? '단, "zzuniHomelab" 명칭 및 로고 등 브랜드 사용은 허용되지 않습니다.'
								: 'However, use of the "zzuniHomelab" name, logo, or other branding is not permitted.'}
						</p>
					<p className="footer-main-text">
						{isKorean
							? "zzuniHomelab은 "
							: "zzuniHomelab is part of the "}
						<a
							href="https://krfoss.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							ROKFOSS
						</a>
						{isKorean ? " 프로젝트의 일원입니다." : " project."}
					</p>
					<p className="footer-main-text">
						{isKorean
							? "zzuniHomelab은 "
							: "zzuniHomelab is supported by "}
						<a
							href="https://eliv.digital/"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							PROJECT ELIV
						</a>
						{isKorean
							? " 로부터 빠르고 안전한 네트워킹 환경을 지원받고 있습니다."
							: " for fast and secure networking."}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footerbar;
