import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import GlobalStyle from "./Styles/GlobalStyle";
import ScrollToTop from "./Components/ScrollToTop";
import { LanguageProvider } from "./Context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<LanguageProvider>
			<GlobalStyle />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<P.MainPage />} />
				<Route path="/about-us" element={<P.AboutusPage />} />
				<Route path="/projects" element={<P.ProjectsPage />} />
				<Route path="/status" element={<P.StatusPage />} />
				<Route
					path="/refuse-email-collection"
					element={<P.RefuseEmailCollectionPage />}
				/>
			</Routes>
		</LanguageProvider>
	</Router>
);
