import "./App.css";
import Guarantee from "../src/components/Guarantee";
import delivery from "./assets/f-delivery.png";
import coin from "./assets/coin.png";
import chat from "./assets/chat.png";

function App() {
	const descriptions = [
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
		"tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error",
		"Quo neque errorrepudiandae fuga? Ipsa laudantium molestias eos apiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
	];
	return (
		<div className="App">
			<Guarantee source={delivery} service="Free Shipping" description={descriptions[0]} />
			<Guarantee source={coin} service="100 % Money back" description={descriptions[1]} />
			<Guarantee source={chat} service="Online support 24/7" description={descriptions[2]} />
		</div>
	);
}

export default App;
