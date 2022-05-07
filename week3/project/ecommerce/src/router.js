import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavoritePage from "./pages/FavoritePage";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function router() {
	return (
		<FavoritesProvider>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/products/:id" element={<ProductDetailPage />} />
					<Route path="/favorites" element={<FavoritePage />} />
				</Routes>
			</Router>
		</FavoritesProvider>
	);
}

export default router;
