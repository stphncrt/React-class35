import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";
import { FavoritesContext } from "../context/FavoritesContext";

function ProductCard({ image, title, id }) {
	const { favoritedProductIds, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
	const favoritedProduct = favoritedProductIds.find((favId) => favId === id);
	const navigate = useNavigate();
	return (
		<StyledContainer
			onClick={() => {
				navigate(`/products/${id}`);
			}}>
			<div className="wrapper">
				<img src={image} alt={title} />
				{favoritedProduct ? (
					<HeartSolid
						className="heart"
						onClick={(e) => {
							e.stopPropagation();
							removeFromFavorites(id);
						}}
					/>
				) : (
					<HeartRegular
						className="heart"
						onClick={(e) => {
							e.stopPropagation();
							addToFavorites(id);
						}}
					/>
				)}
			</div>
			<p>{title}</p>
		</StyledContainer>
	);
}

export default ProductCard;

export const StyledContainer = styled.div`
	box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.5);
	width: 18%;
	margin: 1rem;
	padding: 1rem;

	.wrapper {
		display: flex;
		flex-direction: row;
	}
	.heart {
		&:hover {
			transform: scale(1.1);
			transition: transform 0.1s;
		}
		width: 10%;
		height: 10%;
	}
	img {
		object-fit: contain;
		width: 90%;
		height: 13rem;
	}
	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	@media screen and (max-width: 600px) {
		width: 30%;
		margin: 0;
		img {
			width: 90%;
			height: 70%;
		}
	}
`;
