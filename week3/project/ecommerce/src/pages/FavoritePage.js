import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import styled from "styled-components";

function FavoritePage() {
	const [products, setProducts] = useState([]);
	const [errMessage, setErrMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const { favoritedProductIds } = useContext(FavoritesContext);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await Promise.all(
					favoritedProductIds.map(async (id) => {
						const response = await fetch(`https://fakestoreapi.com/products/${id}`);
						const result = await response.json();
						return result;
					}),
				);
				setProducts(data);
			} catch (err) {
				setErrMessage(err.message);
				setIsLoading(false);
			}
			setIsLoading(false);
		}

		fetchData();
	}, [favoritedProductIds]);

	return (
		<StyledContainer>
			{isLoading && <ClipLoader css={override} size={100} />}
			{errMessage && <h3>{errMessage}</h3>}
			{products.length === 0 && <h3>No favorited product found..</h3>}
			{!errMessage &&
				!isLoading &&
				products?.map((product, index) => {
					return (
						<ProductCard key={index} image={product.image} title={product.title} id={product.id} />
					);
				})}
		</StyledContainer>
	);
}

export default FavoritePage;

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 600px) {
		margin: 1rem;
		gap: 2rem;
	}
`;
export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
