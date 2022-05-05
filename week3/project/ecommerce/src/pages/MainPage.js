import React, { useState } from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";

function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<>
			<Header />
			<Category onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
			<Products selectedCategory={selectedCategory} />
		</>
	);
}

export default MainPage;
