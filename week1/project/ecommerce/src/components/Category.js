import React from "react";
import categories from "../fake-data/all-categories";
import styled from "styled-components";
import { StyledButton } from "./CategoryButton";

function Category({ onCategorySelect, selectedCategory }) {
	return (
		<StyledContainer>
			{categories.map((category, index) => (
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
			))}
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
