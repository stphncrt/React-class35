import React, { useState } from "react";
import Joke from "./Joke";
import axios from "axios";
function RandomJoke() {
	const [joke, setJoke] = useState();

	const jokeDataFetch = async function () {
		const jokeData = await axios.get("https://official-joke-api.appspot.com/random_joke");
		console.log(jokeData);
		setJoke(jokeData);
	};
	jokeDataFetch();
	console.log(joke);
	return (
		<div>
			<Joke joke={joke} />
		</div>
	);
}

export default RandomJoke;
