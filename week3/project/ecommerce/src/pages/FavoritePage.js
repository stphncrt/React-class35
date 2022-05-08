import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function FavoritePage() {
	const [products, setProducts] = useState([]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { favoritedProductIds } = useContext(FavoritesContext);
	console.log(favoritedProductIds);

	useEffect(() => {
		async function loadData() {
			try {
				const data = await Promise.all(
					favoritedProductIds.map(async (id) => {
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
	}, [favoritedProductIds]);

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
							<ProductCard
								key={index}
								id={product.id}
								title={product.title}
								image={product.image}
							/>
						))
					) : (
						<div>No favorites!</div>
					)}
				</ul>
			</div>
		</div>
	);
}

export default FavoritePage;
export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
