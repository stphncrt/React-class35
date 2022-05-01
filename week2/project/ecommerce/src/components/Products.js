import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function Products({ selectedCategory }) {
	const URL = selectedCategory
		? `https://fakestoreapi.com/products/category/${selectedCategory}`
		: "https://fakestoreapi.com/products/";
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const getProducts = async () => {
		try {
			setIsLoading(true);
			let response = await fetch(URL);
			let products = await response.json();
			setProducts(products);
			setIsLoading(false);
		} catch (err) {
			throw new Error(err);
		}
	};
	useEffect(() => {
		getProducts();
	}, [URL]);
	return (
		<StyledContainer>
			{isLoading ? (
				<ClipLoader css={override} size={100} />
			) : (
				products.map((product, index) => {
					return (
						<ProductCard key={index} image={product.image} title={product.title} id={product.id} />
					);
				})
			)}
		</StyledContainer>
	);
}

export default Products;

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
