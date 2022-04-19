import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

function Products({ filteredProducts }) {
	console.log(filteredProducts);
	return (
		<StyledContainer>
			{filteredProducts.map((product, index) => {
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
