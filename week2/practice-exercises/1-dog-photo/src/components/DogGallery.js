import React, { useState, useEffect } from "react";
import axios from "axios";

function DogGallery() {
	const URL = "https://dog.ceo/api/breeds/image/random";
	const [dogPhotos, setDogPhotos] = useState([]);
	const getDogPhoto = async () => {
		const dogPhotoData = await axios.get(URL);
		console.log(dogPhotoData);
	};
	useEffect(() => {
		getDogPhoto();
	}, []);
	return (
		<div>
			<h1>Dog Gallery</h1>
		</div>
	);
}

export default DogGallery;
