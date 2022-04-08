import React from "react";
import styled from "styled-components";
import categories from "../fake-data/all-categories";

function Category() {
	return (
		<StyledContainer>
			{categories.map((category, index) => {
				return <h3 key={index}>{category}</h3>;
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
	margin: 1rem 3rem;
	justify-content: center;
	h3 {
		padding: 0.5rem;
		color: #0e0c0c;
		background-color: #e4e2e2;
	}
	h3:hover {
		background-color: grey;
	}
`;
