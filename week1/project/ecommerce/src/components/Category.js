import React from "react";
import categories from "../fake-data/all-categories";
import "../App.css";

function Category({ selectCategory, selectedCategory }) {
	return (
		<div className="category">
			{categories.map((category, index) => (
				<h3
					className={selectedCategory === category && "category-active"}
					key={index}
					onClick={(e) => {
						selectCategory(e.currentTarget.innerText);
					}}>
					{category}
				</h3>
			))}
		</div>
	);
}
export default Category;
