import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";

function FavoritePage() {
	const [products, setProducts] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { favoritedBookIds } = useContext(FavoritesContext);
	console.log(favoritedBookIds);
	useEffect(() => {
		async function loadData() {
			try {
				const data = await Promise.all(
					favoritedBookIds.map(async (id) => {
						const response = await fetch(`https://fakestoreapi.com/products/${id}`);
						const result = await response.json();
						return result;
					}),
				);
				setProducts(data);
			} catch (error) {
				console.log(error);
				setIsError(true);
			}
			setIsLoading(false);
		}

		loadData();
	}, [favoritedBookIds]);
	return (
		<div>
			<h2>Favorites</h2>
			<div className="main">
				<ul className="products">
					{isError ? (
						<span>BAD REQUEST!</span>
					) : isLoading ? (
						<ClipLoader css={override} size={100} />
					) : products.length ? (
						products.map((product, index) => (
							<BookCard key={index} id={product.id} title={product.title} image={product.image} />
						))
					) : (
						<div>No favorites!</div>
					)}
				</ul>
			</div>
		</div>
	);
}
