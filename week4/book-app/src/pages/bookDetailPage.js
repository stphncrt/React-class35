import DetailedBookCard from "../components/DetailedBookCard.js";
import styled from "styled-components";

import Modal from "../components/Modal";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;

function BookDetail() {
	const { id } = useParams();
	const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`;
	const [book, setBook] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const bookData = await response.json();
			setBook(bookData);
		} catch (err) {
			console.log(err.message);
		}
	}

	useEffect(() => {
		fetchAPI();
	}, []);
	console.log(book);
	const closeModal = () => {
		setIsOpen(false);
	};
	const handleOpen = () => setIsOpen(true);
	return (
		<StyledPageContainer>
			<DetailedBookCard
				title={book?.volumeInfo?.title}
				author={book?.volumeInfo?.authors[0]}
				image={book?.volumeInfo?.imageLinks?.thumbnail}
				description={book?.volumeInfo?.description}
				category={book?.volumeInfo?.categories[0]}
				publishedDate={book?.volumeInfo?.publishedDate}
				pageCount={book?.volumeInfo?.pageCount}
				// isbn={book?.volumeInfo?.industryIdentifiers[1]?.identifier}
				setIsOpen={handleOpen}
			/>
			<Modal open={isOpen} author={book?.volumeInfo?.authors[0]} closeModal={closeModal} />
		</StyledPageContainer>
	);
}

export default BookDetail;

export const StyledPageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-image: url("https://images.gr-assets.com/challenges/2022/facebook.png");
	background-size: cover;
	backdrop-filter: blur(15px);
`;
