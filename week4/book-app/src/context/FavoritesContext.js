import React, { createContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
	const [favoritedBookIds, setFavoritedBookIds] = useState([]);

	const addToFavorites = (id) => {
		setFavoritedBookIds([...favoritedBookIds, id]);
	};
	const removeFromFavorites = (id) => {
		const newFavorites = favoritedBookIds.filter((f) => f !== id);
		setFavoritedBookIds(newFavorites);
	};

	return (
		<FavoritesContext.Provider
			value={{
				favoritedBookIds,
				addToFavorites,
				removeFromFavorites,
			}}>
			{children}
		</FavoritesContext.Provider>
	);
};
export default FavoritesProvider;
