import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { FavoritesContext } from "../context/FavoritesContext";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";
import useFetch from "../hooks/UseFetch";

function ProductDetail() {
	const { favoritedProductIds, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
	const { id } = useParams();
	const url = `https://fakestoreapi.com/products/${id}`;
	const favoritedProduct = favoritedProductIds.find((favId) => favId === id);
	const { data: product, isLoading, errMessage } = useFetch(url);

	return (
		<StyledContainer>
			{errMessage ? (
				<h3>{errMessage}</h3>
			) : isLoading ? (
				<ClipLoader css={override} size={100} />
			) : (
				<div id="column">
					<h1>{product.title}</h1>
					<div id="flex-row">
						<p>{product.description}</p>
						<img src={product.image} alt={product.title} />
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
				</div>
			)}
		</StyledContainer>
	);
}

export default ProductDetail;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 3rem;
	padding: 1rem;

	#column {
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem;
		padding: 1rem;
		box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.5);
	}
	#flex-row {
		display: flex;
		flex-direction: row;
	}
	img {
		width: 40%;
		object-fit: contain;
	}
	.heart {
		&:hover {
			transform: scale(1.1);
			transition: transform 0.1s;
		}
		width: 10%;
		height: 10%;
	}
`;
export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
