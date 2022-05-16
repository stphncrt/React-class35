import React, { useState } from "react";
import styled from "styled-components";

function SearchBar({ setSearchText }) {
	const [inputValue, setInputValue] = useState("");

	function handleChange(e) {
		setInputValue(e.target.value);
		console.log(e.target.value);
	}

	function handleSearch(e) {
		e.preventDefault();
		setSearchText(inputValue);
		console.log("Search handled");
	}

	function handleFocus(e) {
		e.target.value = "";
	}
	return (
		<StyledContainer>
			<StyledText> Join the challenge, find your book. </StyledText>
			<StyledWrapper>
				<StyledInput
					type="text"
					onFocus={handleFocus}
					onChange={handleChange}
					placeholder="Search your book..."
				/>
				<StyledButton type="submit" onClick={handleSearch}>
					Search
				</StyledButton>
			</StyledWrapper>
		</StyledContainer>
	);
}

export default SearchBar;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	margin: -5rem auto 5rem;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
`;

export const StyledInput = styled.input`
	border-radius: 5px;
	border: 0.2px solid #fff7e9;
	width: 15rem;
	:focus {
		outline: none;
	}
`;
export const StyledButton = styled.button`
	border-radius: 5px;
	border-color: #fff7e9;
	background-color: #f4f2e9;
	padding: 0.2rem 0.5rem;
	&:hover {
		background-color: #8f8e86;
		color: #fff;
		font-weight: bold;
	}
`;
export const StyledText = styled.h4`
	color: #420000;
	margin: 0.5rem 0.5rem;
`;
