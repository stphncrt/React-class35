import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import ReadingImg from "../components/ReadingImg";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

function MainPage() {
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [searchText, setSearchText] = useState("");
	const [books, setBooks] = useState([]);
	const url = `https://www.googleapis.com/books/v1/volumes?q=${
		searchText ? searchText : "brain"
	}:keyes&key=${API_KEY}&maxResult=40`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setBooks(json?.items))
			.catch((err) => new Error(err));
	}, [url]);

	return (
		<div>
			<ReadingImg />
			<SearchBar setSearchText={setSearchText} />
			<Content />
			<BookList books={books} />
		</div>
	);
}

export default MainPage;
