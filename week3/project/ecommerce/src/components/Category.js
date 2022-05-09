import React from "react";
import styled from "styled-components";
import { StyledButton } from "./CategoryButton";
import useFetch from "../hooks/UseFetch";

function Category({ onCategorySelect, selectedCategory }) {
	const baseUrl = "https://fakestoreapi.com/products/categories";
	const { data: categories, isLoading, errMessage } = useFetch(baseUrl);
	return (
		<StyledContainer>
			{categories.map((category, index) => {
				return errMessage ? (
					<h3>{errMessage}</h3>
				) : isLoading ? (
					<h2>loading</h2>
				) : (
					<StyledButton
						key={index}
						onClick={() => {
							if (selectedCategory === category) {
								onCategorySelect("");
							} else {
								onCategorySelect(category);
							}
						}}
						isActive={category === selectedCategory}>
						{category}
					</StyledButton>
				);
			})}
		</StyledContainer>
	);
}

export default Category;

export const StyledContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	margin: 1rem 5rem;
	justify-content: center;

	@media screen and (max-width: 600px) {
		flex-wrap: nowrap;
		width: 50%;
	}
`;
