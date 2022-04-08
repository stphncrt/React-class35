import "./App.css";
import Category from "../src/components/category";
import Products from "../src/components/products";

function App() {
	return (
		<div className="App">
			<h1 id="header">Welcome to HYF store...</h1>
			<h1>Products</h1>
			<Category />
			<Products />
		</div>
	);
}

export default App;
