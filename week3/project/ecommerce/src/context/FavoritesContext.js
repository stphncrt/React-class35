import { createContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [favoritedProductIds, setFavoritedProductIds] = useState([]);

	const addToFavorites = (id) => {
		setFavoritedProductIds([...favoritedProductIds, id]);
	};
	const removeFromFavorites = (id) => {
		const newFavorites = favoritedProductIds.filter((f) => f !== id);
		setFavoritedProductIds(newFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{
				favoritedProductIds,
				addToFavorites,
				removeFromFavorites,
			}}>
			{children}
		</FavoritesContext.Provider>
	);
};
export default FavoritesContext;
