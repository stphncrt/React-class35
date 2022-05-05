import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import productsData from "../fake-data/all-products";

function Products({ selectedCategory }) {
	let products;
	if (selectedCategory === "") {
		products = productsData;
	} else {
		products = productsData.filter((product) => product.category === selectedCategory.slice(6));
	}

	return (
		<StyledContainer>
			{products.map((product, index) => {
				return <ProductCard key={index} image={product.image} title={product.title} />;
			})}
		</StyledContainer>
	);
}

export default Products;

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 600px) {
		gap: 2.5rem;
	}
`;
