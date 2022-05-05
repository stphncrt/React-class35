import { createContext, useState } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
	const [favouritedProductIds, setFavouritedProductIds] = useState([]);
	const addToFavourites = (id) => {
		setFavouritedProductIds([id, ...favouritedProductIds]);
	};
	const removeFromFavourites = (id) => {
		setFavouritedProductIds(favouritedProductIds.filter((f) => f !== id));
	};

	return (
		<FavouritesContext.Provider
			value={{
				favouritedProductIds,
				addToFavourites,
				removeFromFavourites,
			}}>
			{children}
		</FavouritesContext.Provider>
	);
};
export default FavouritesContext;
