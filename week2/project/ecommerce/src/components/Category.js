import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./CategoryButton";

function Category({ selectCategory, selectedCategory }) {
	const baseUrl = "https://fakestoreapi.com/products/categories";

	const [categories, setCategories] = useState([]);
	const [isActive, setIsActive] = useState();
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
						onClick={(e) => {
							selectCategory(e.currentTarget.innerText);
						}}>
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
	margin: 1rem 3rem;
	justify-content: center;
	h3 {
		padding: 0.5rem;
		color: #0e0c0c;
		background-color: ${(props) => (props.isActive ? "red" : "blue")};
	}
	h3:hover {
		background-color: #b2b2b2;
	}
`;
