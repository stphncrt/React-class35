import React, { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";

function FavoritePage() {
	const { favoritedProductIds, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
	const [favId, setFavId] = useState(favoritedProductIds);

	return (
		<div>
			<h2>Favorites</h2>
			{favId.map((id) => (
				<h3>{id}</h3>
			))}
		</div>
	);
}

export default FavoritePage;
