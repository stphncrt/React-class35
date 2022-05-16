import React from "react";
import styled from "styled-components";
import { ReactComponent as HeartRegular } from "../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../assets/heart-solid.svg";

function DetailedBookCard({
	title,
	image,
	description,
	author,
	category,
	pageCount,
	publishedDate,
	isbn,
	setIsOpen,
}) {
	return (
		<StyledContainer>
			<div className="infoWrapper">
				<img className="cardImage" src={image} alt={title} />
				<h3>{author}</h3>
				<h3
					className="clickable"
					onClick={() => {
						setIsOpen(true);
					}}>
					See other books of the author
				</h3>
			</div>
			<div className="infoWrapper">
				<div className="column-row">
					<h3> {title} </h3>
					<div>
						{true ? (
							<HeartSolid
								className="heart"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									// removeFromFavorites(props.id);
								}}
							/>
						) : (
							<HeartRegular
								className="heart"
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									// addToFavorites(props.id);
								}}
							/>
						)}
					</div>
				</div>
				<p> {description} </p>
				<p className="smallCase">
					Category: {category}, ISBN: {isbn} <br /> Publish Date: {publishedDate}, Page Count:{" "}
					{pageCount}
				</p>
			</div>
		</StyledContainer>
	);
}

export default DetailedBookCard;

export const StyledContainer = styled.div`
	margin: 1rem;
	padding: 1rem;
	width: 70%;
	height: 90%;
	border: 1px solid grey;
	box-shadow: 15px 5px 50px #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;
	backdrop-filter: blur(15px);

	.cardImage {
		margin-top: 2rem;
		width: 10rem;
	}

	.infoWrapper {
		display: flex;
		flex-direction: column;
		color: #420000;
	}

	.infoWrapper p {
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 10;
		-webkit-box-orient: vertical;
	}

	.smallCase {
		font-size: 10px;
	}

	.clickable {
		font-size: 14px;
		:hover {
			color: #7a7474;
			font-weight: bold;
			cursor: pointer;
		}
	}
	.heart {
		position: relative;
		width: 1rem;
		cursor: pointer;
	}

	.column-row {
		padding: 0.3rem;
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
`;
