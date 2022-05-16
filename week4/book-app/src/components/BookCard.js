import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";
import FavoritesContext from "../context/FavoritesContext";

const BookCard = (props) => {
	const { favoritedBookIds, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
	const favoritedBook = favoritedBookIds.find((favId) => favId === props.id);
	return (
		<StyledCardWrapper to={`/detail/${props.id}`}>
			<div className="column-row">
				<StyledTitle> {props.title} </StyledTitle>
				<div>
					{favoritedBook ? (
						<HeartSolid
							className="heart"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								removeFromFavorites(props.id);
							}}
						/>
					) : (
						<HeartRegular
							className="heart"
							onClick={(e) => {
								e.stopPropagation();
								e.preventDefault();
								addToFavorites(props.id);
							}}
						/>
					)}
				</div>
			</div>
			<StyledImg src={props.image} alt={props.title}></StyledImg>
			<StyledText> {props.author} </StyledText>
		</StyledCardWrapper>
	);
};

export default BookCard;
export const StyledCardWrapper = styled(Link)`
	margin: 10px;
	width: 20%;
	/* height: rem; */
	border-radius: 0.5rem;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	transition: 0.5s;
	background-color: #f4f2e9;
	opacity: 0.8;

	&:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
	.heart {
		width: 0.7rem;
		cursor: pointer;
	}

	.column-row {
		padding: 0.3rem;
		align-items: center;
		display: flex;
		flex-direction: row;
	}
`;
export const StyledImg = styled.img`
	width: 90%;
	height: 60%;
	margin: 5px;
	margin-bottom: 0px;
`;

export const StyledTitle = styled.h5`
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0.2rem;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* number of lines to show */
	-webkit-box-orient: vertical;
	margin: 0;
`;
export const StyledText = styled.h6`
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0.2rem;
	margin: 0;
`;
