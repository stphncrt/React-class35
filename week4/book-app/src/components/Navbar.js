import React from "react";
import styled from "styled-components";

export default function Navbar() {
	return (
		<StyledWrapper>
			<StyledImg
				id="goodReads-img"
				alt="Goodreads: Book reviews, recommendations, and discussion"
				src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"></StyledImg>
		</StyledWrapper>
	);
}

export const StyledWrapper = styled.div`
	background-color: #f4f2e9;
`;
export const StyledImg = styled.img`
	margin: 1rem 6rem;
`;
