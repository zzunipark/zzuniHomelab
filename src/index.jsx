import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { LanguageProvider } from "./Context/LanguageContext";
import LoadingSpinner from "./Components/LoadingSpinner";

const MainPage = lazy(() => import("./Pages/MainPage"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<LanguageProvider>
		<Suspense fallback={<LoadingSpinner />}>
			<MainPage />
		</Suspense>
	</LanguageProvider>,
);
