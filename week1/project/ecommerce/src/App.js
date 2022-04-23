import "./App.css";
import Category from "./components/Category";
import Products from "./components/Products";
import products from "./fake-data/all-products";
import React, { useState, useEffect } from "react";

function App() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		const filtered = products.filter((product) => selectedCategory.slice(6) === product.category);
		setFilteredProducts(filtered);
	}, [selectedCategory]);

	return (
		<div className="App">
			<h1 id="header">Welcome to HYF store...</h1>
			<h2 id="heading">Products</h2>
			<Category
				selectCategory={(category) => {
					setSelectedCategory(category);
				}}
				selectedCategory={selectedCategory}
			/>
			<Products filteredProducts={filteredProducts.length === 0 ? products : filteredProducts} />
		</div>
	);
}

export default App;
