import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

function Products({ selectedCategory }) {
	const URL = selectedCategory
		? `https://fakestoreapi.com/products/category/${selectedCategory}`
		: "https://fakestoreapi.com/products/";
	const [products, setProducts] = useState([]);
	const getProducts = async () => {
		try {
			let response = await fetch(URL);
			let products = await response.json();
			setProducts(products);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getProducts();
	}, [URL]);
	return (
		<StyledContainer>
			{products.map((product, index) => {
				return (
					<ProductCard key={index} image={product.image} title={product.title} id={product.id} />
				);
			})}
		</StyledContainer>
	);
}

export default Products;

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
