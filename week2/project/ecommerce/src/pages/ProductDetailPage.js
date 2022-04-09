import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductDetail() {
	const { id } = useParams();
	console.log(id);
	const URL = `https://fakestoreapi.com/products/${id}`;
	const [product, setProduct] = useState({});
	const getDetails = async () => {
		try {
			let response = await fetch(URL);
			let detail = await response.json();
			console.log(detail);
			setProduct(detail);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getDetails();
	}, []);
	return (
		<StyledContainer>
			<div>
				<h1>{product.title}</h1>
				<p>{product.description}</p>
			</div>
			<img src={product.image} alt={product.title} />
		</StyledContainer>
	);
}

export default ProductDetail;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin: 3rem;
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	img {
		width: 30%;
		object-fit: contain;
	}
`;
