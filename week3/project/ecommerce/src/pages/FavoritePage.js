import React, { useContext } from "react";
import FavouritesContext from "../context/FavouritesContext";

function FavoritePage() {
	const { favouritedProductIds, addToFavourites, removeFromFavourites } =
		useContext(FavouritesContext);
	console.log(favouritedProductIds);
	return (
		<div>
			<h2>Favorites</h2>
			{favouritedProductIds.map((id) => (
				<h3>{id}</h3>
			))}
		</div>
	);
}

export default FavoritePage;
