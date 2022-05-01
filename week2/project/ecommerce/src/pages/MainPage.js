import React, { useState } from "react";
import "../App.css";
import Category from "../components/Category";
import Products from "../components/Products";

function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<div className="App">
			<h1 id="header">Welcome to HYF store...</h1>
			<h2 style={{ textAlign: "center" }}>Products</h2>
			<Category selectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
			<Products selectedCategory={selectedCategory} />
		</div>
	);
}

export default MainPage;
