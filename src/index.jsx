import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as P from "./Pages";
import GlobalStyle from "./Styles/GlobalStyle";
import { LanguageProvider } from "./Context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<LanguageProvider>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<P.MainPage />} />
				<Route path="/about-us" element={<P.AboutusPage />} />
			</Routes>
		</LanguageProvider>
	</Router>
);
