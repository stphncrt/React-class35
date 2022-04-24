import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

function DogGallery() {
	const URL = "https://dog.ceo/api/breeds/image/random";
	const [dogPhotos, setDogPhotos] = useState([]);
	const getDogPhoto = async () => {
		const dogPhotoData = await axios.get(URL);

		setDogPhotos([...dogPhotos, dogPhotoData.data.message]);
		console.log(dogPhotos);
	};

	return (
		<div>
			<h1>Dog Gallery</h1>
			<Button getDogPhoto={getDogPhoto} />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{dogPhotos.length > 0 ? (
					dogPhotos.map((photo) => <DogPhoto dogPhoto={photo} />)
				) : (
					<h3>Please get a dog photo</h3>
				)}
			</div>
		</div>
	);
}

export default DogGallery;
