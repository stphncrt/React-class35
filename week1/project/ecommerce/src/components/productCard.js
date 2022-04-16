import React from "react";
import styled from "styled-components";

function ProductCard({ image, title }) {
	return (
		<StyledContainer>
			<img src={image} alt={title} />
			<p>{title}</p>
		</StyledContainer>
	);
}

export default ProductCard;

export const StyledContainer = styled.div`
	display: block;
	width: 30%;
	margin: 0.5rem;
	padding: 0.3rem;
	&:hover {
		transform: scale(1.05);
		transition: transform 0.2s;
	}
	img {
		object-fit: contain;
		width: 100%;
		height: 20rem;
	}
	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	@media screen and (max-width: 600px) {
		img {
			height: 100%;
		}
	}
`;
