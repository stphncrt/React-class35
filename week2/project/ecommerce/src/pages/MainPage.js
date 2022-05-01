import React, { useState } from "react";
import styled from "styled-components";
import Category from "../components/Category";
import Products from "../components/Products";

function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<StyledContainer>
			<h1>Welcome to HYF store...</h1>
			<h2>Products</h2>
			<Category selectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
			<Products selectedCategory={selectedCategory} />
		</StyledContainer>
	);
}

export default MainPage;
const StyledContainer = styled.div`
	margin: 2rem;
	h2,
	h1 {
		text-align: center;
	}

	@media screen and (max-width: 600px) {
		margin-left: 0.5rem;
		h1 {
			font-size: 20px;
		}
		h2 {
			font-size: 16px;
		}
	}
`;
