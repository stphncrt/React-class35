import "../App.css";
import Category from "../components/category";
import Products from "../components/products";

function MainPage() {
	return (
		<div className="App">
			<h1 id="header">Welcome to HYF store...</h1>
			<h1>Products</h1>
			<Category />
			<Products />
		</div>
	);
}

export default MainPage;
