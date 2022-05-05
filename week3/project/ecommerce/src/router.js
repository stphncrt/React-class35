import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { FavouritesProvider } from "./context/FavouritesContext";
import FavoritePage from "./pages/FavoritePage";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function router() {
	return (
		<FavouritesProvider>
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/products/:id" element={<ProductDetailPage />} />
					<Route path="/favorites" element={<FavoritePage />} />
				</Routes>
			</Router>
		</FavouritesProvider>
	);
}

export default router;
