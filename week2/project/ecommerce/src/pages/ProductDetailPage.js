import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductDetail() {
	const { id } = useParams();
	const URL = `https://fakestoreapi.com/products/${id}`;
	const [product, setProduct] = useState({});
	const getDetails = async () => {
		try {
			let response = await fetch(URL);
			let detail = await response.json();
			setProduct(detail);
		} catch (err) {
			throw new Error(err);
		}
	};
	useEffect(() => {
		getDetails();
	}, []);
	return (
		<StyledContainer>
			<h1>{product.title}</h1>
			<div>
				<p>{product.description}</p>
				<img src={product.image} alt={product.title} />
			</div>
		</StyledContainer>
	);
}

export default ProductDetail;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 3rem;
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}
	img {
		width: 40%;
		object-fit: contain;
	}
`;
