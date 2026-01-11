import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { LanguageContext } from "../../Context/LanguageContext";

const Footerbar = () => {
	const navigate = useNavigate();
	const { language } = useContext(LanguageContext);

	const DisclaimerItems =
		language === "Korean"
			? [
					{ title: "소개", route: "/about-us" },
					{
						title: "이메일무단수집거부",
						route: "/refuse-email-collection",
					},
					{ title: "블로그", route: "/blog" },
					{
						title: "서비스 상태",
						route: "https://status.zzunipark.com",
						external: true,
					},
			  ]
			: [
					{ title: "About Us", route: "/about-us" },
					{
						title: "Unauthorized Email Collection Refusal",
						route: "/refuse-email-collection",
					},
					{ title: "Blog", route: "/blog" },
					{
						title: "Service Status",
						route: "https://status.zzunipark.com",
						external: true,
					},
			  ];

	const handleNavigation = (item) => {
		if (item.external) {
			window.open(item.route, "_blank");
		} else {
			navigate(item.route);
		}
	};

	return (
		<s.FooterContainer>
			<s.FooterTop>
				<s.FooterTopSection>
					<s.LogoBox onClick={() => navigate("/")} />
					<s.Navigator>
						{DisclaimerItems.map((item, index) => (
							<s.NavigatorText
								key={index}
								onClick={() => handleNavigation(item)}
							>
								{item.title}
							</s.NavigatorText>
						))}
					</s.Navigator>
				</s.FooterTopSection>
			</s.FooterTop>
			<s.FooterBottom>
				<s.CopyRightText>
					© 2023-2026 zzuniHomelab. ALL RIGHTS RESERVED.
					<br />
					me@zzunipark.com
				</s.CopyRightText>
			</s.FooterBottom>
		</s.FooterContainer>
	);
};

export default Footerbar;
