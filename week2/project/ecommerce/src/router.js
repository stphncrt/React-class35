import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function router() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/products/:id" element={<ProductDetailPage />} />
			</Routes>
		</Router>
	);
}

export default router;
