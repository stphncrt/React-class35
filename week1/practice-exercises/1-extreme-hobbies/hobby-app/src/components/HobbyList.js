import React from "react";
import Hobby from "./Hobby";

function HobbyList() {
	const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

	return (
		<div>
			{hobbies.map((hobby, index) => {
				return <Hobby key={index} hobby={hobby} />;
			})}
		</div>
	);
}

export default HobbyList;
