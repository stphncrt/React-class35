import React from "react";

function DogPhoto({ dogPhoto }) {
	return (
		<div>
			<img style={{ margin: "1rem", width: "20rem", height: "15rem" }} src={dogPhoto} alt="" />
		</div>
	);
}

export default DogPhoto;
