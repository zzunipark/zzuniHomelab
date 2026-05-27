import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import ScrollToTop from "./Components/ScrollToTop";
import { LanguageProvider } from "./Context/LanguageContext";
import LoadingSpinner from "./Components/LoadingSpinner";

const MainPage = lazy(() => import("./Pages/MainPage"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<LanguageProvider>
			<ScrollToTop />
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/services" element={<MainPage />} />
					<Route path="/infrastructure" element={<MainPage />} />
					<Route path="/status" element={<MainPage />} />
					<Route path="/contact" element={<MainPage />} />
					<Route path="*" element={<MainPage />} />
				</Routes>
			</Suspense>
		</LanguageProvider>
	</Router>,
);
