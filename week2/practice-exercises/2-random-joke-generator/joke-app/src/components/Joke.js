import React from "react";

function Joke({ setup, punchline }) {
	return (
		<div>
			<p>{setup}</p>
			<p>{punchline}</p>
		</div>
	);
}

export default Joke;
