import React, { useState } from "react";
import "../App.css";
import Category from "../components/Category";
import Products from "../components/Products";

function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");
	return (
		<div className="App">
			<h1 id="header">Welcome to HYF store...</h1>
			<h1>Products</h1>
			<Category selectCategory={setSelectedCategory} />
			<Products selectedCategory={selectedCategory} />
		</div>
	);
}

export default MainPage;
