import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import ScrollToTop from "./Components/ScrollToTop";
import { LanguageProvider } from "./Context/LanguageContext";
import LoadingSpinner from "./Components/LoadingSpinner";

const MainPage = lazy(() => import("./Pages/MainPage"));
const AboutusPage = lazy(() => import("./Pages/AboutusPage"));
const ProjectsPage = lazy(() => import("./Pages/ProjectsPage"));
const StatusPage = lazy(() => import("./Pages/StatusPage"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const RefuseEmailCollectionPage = lazy(() =>
	import("./Pages/RefuseEmailCollectionPage")
);
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<LanguageProvider>
			<GlobalStyle />
			<ScrollToTop />
			<Suspense fallback={<LoadingSpinner />}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/about-us" element={<AboutusPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/status" element={<StatusPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route
						path="/refuse-email-collection"
						element={<RefuseEmailCollectionPage />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</LanguageProvider>
	</Router>
);
