import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

const Navbar = ({ language, toggleLanguage }) => {
	const navigate = useNavigate();
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const [showMobileNav, setShowMobileNav] = useState(false);

	const goToStatus = () => {
		window.location.href = "https://zzunilabs.statuspage.io/";
	};

	const navItems =
		language === "Korean"
			? [
					{ title: "소개", route: "/about-us" },
					{ title: "프로젝트", route: "/projects" },
					{ title: "현황", route: "/status" },
					{ title: "블로그", route: "/blog" },
			  ]
			: [
					{ title: "About Us", route: "/about-us" },
					{ title: "Projects", route: "/projects" },
					{ title: "Contact Us", route: "/contact" },
					{ title: "Blog", route: "/blog" },
			  ];

	const openMobileNav = () => {
		setMobileNavOpen(true);
		setShowMobileNav(true);
	};

	const closeMobileNav = () => {
		setMobileNavOpen(false);
		setTimeout(() => {
			setShowMobileNav(false);
		}, 500);
	};

	return (
		<>
			<s.MainNavbar>
				<s.LogoBox />
				<s.Navigator>
					{navItems.map((item, index) => (
						<s.NavigatorText
							key={index}
							onClick={() => navigate(item.route)}
						>
							{item.title}
						</s.NavigatorText>
					))}
				</s.Navigator>
				<s.UtilityBox>
					<s.Status onClick={goToStatus} />
					<s.Globe onClick={toggleLanguage} />
					<s.HamburgerIcon
						onClick={() => {
							if (mobileNavOpen) {
								closeMobileNav();
							} else {
								openMobileNav();
							}
						}}
					>
						<s.HamburgerLine />
						<s.HamburgerLine />
						<s.HamburgerLine />
					</s.HamburgerIcon>
				</s.UtilityBox>
			</s.MainNavbar>

			{showMobileNav && (
				<s.MobileNavOverlay>
					<s.MobileNavContent isClosing={!mobileNavOpen}>
						<s.MobileNavClose onClick={closeMobileNav}>
							&times;
						</s.MobileNavClose>
						<s.MobileNavMenu>
							{navItems.map((item, index) => (
								<s.MobileNavItem
									key={index}
									onClick={() => {
										navigate(item.route);
										closeMobileNav();
									}}
								>
									{item.title}
								</s.MobileNavItem>
							))}
						</s.MobileNavMenu>
						<s.MobileNavContact>
							<div>me@zzunipark.com</div>
						</s.MobileNavContact>
					</s.MobileNavContent>
				</s.MobileNavOverlay>
			)}
		</>
	);
};

export default Navbar;
