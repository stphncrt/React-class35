import React, { useState, useEffect } from "react";
import styled from "styled-components";
const API_KEY = process.env.REACT_APP_API_KEY;

function Modal({ open, author, closeModal }) {
	// const modifiedAuthor = `${author.split(" ")[0]}%20${author.split(" ")[1]}`;
	console.log(author);
	// console.log(modifiedAuthor);
	const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${API_KEY}`;
	const [books, setBooks] = useState([]);
	async function fetchAPI() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Fetch API failed");
			}
			const modalItems = await response.json();
			console.log(modalItems.items);
			setBooks(modalItems.items);
		} catch (err) {
			console.log(err.message);
		}
	}
	useEffect(() => {
		fetchAPI();
	}, []);
	console.log(books);
	if (open) {
		return (
			<StyledModal>
				<h4 onClick={closeModal}>X</h4>
				{books.map((book, index) => {
					if (book?.volumeInfo?.imageLinks?.smallThumbnail) {
						return (
							<StyledWrapper key={index}>
								<img
									alt={book?.volumeInfo?.author}
									src={book?.volumeInfo?.imageLinks?.smallThumbnail}
								/>
								<h5>{book.volumeInfo.title}</h5>
							</StyledWrapper>
						);
					}
				})}
			</StyledModal>
		);
	} else return null;
}

export default Modal;

export const StyledModal = styled.div`
	position: fixed;
	width: 70%;
	height: 70%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	z-index: 1000;
	overflow: hidden;
	overflow-y: scroll;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 3rem;
	padding: 1rem;
	margin: 1rem;
	img {
		width: 5rem;
		height: 5rem;
	}
`;
