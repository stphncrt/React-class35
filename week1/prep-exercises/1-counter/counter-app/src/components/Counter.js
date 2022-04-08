import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
	const [count, setCount] = useState(0);
	const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
	const handleAdd = () => setCount(count + 1);
	const handleSub = () => (count > 0 ? setCount(count - 1) : null);
	const incrementByTwo = () => setCount(count + 2);
	const decrementByTwo = () => (count > 1 ? setCount(count - 2) : null);
	return (
		<div>
			<h1>{feedback}</h1>
			<Count num={count} />
			<div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
				<Button name="Add 1" onClick={handleAdd} />
				<Button name="Subtract 1" onClick={handleSub} />
			</div>
			<div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
				<Button name="Add 2" onClick={incrementByTwo} />
				<Button name="Subtract 2" onClick={decrementByTwo} />
			</div>
		</div>
	);
}

export default Counter;
