import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./CategoryButton";

function Category({ selectCategory, selectedCategory }) {
	const baseUrl = "https://fakestoreapi.com/products/categories";

	const [categories, setCategories] = useState([]);
	const getCategories = async () => {
		try {
			let response = await fetch(baseUrl);
			let categories = await response.json();
			setCategories(categories);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCategories();
	}, []);

	return (
		<StyledContainer>
			{categories.map((category, index) => {
				return (
					<StyledButton
						key={index}
						onClick={() => {
							selectCategory(category);
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
