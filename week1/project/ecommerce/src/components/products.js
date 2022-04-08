import React from "react";
import styled from "styled-components";
import products from "../fake-data/all-products";
import ProductCard from "./productCard";

function Products() {
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
`;
