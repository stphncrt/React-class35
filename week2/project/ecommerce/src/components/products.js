import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./productCard";
// import Loader from "react-loader-spinner";

function Products() {
	const URL = "https://fakestoreapi.com/products";
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
	}, []);
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
