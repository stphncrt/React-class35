import React from "react";
import styled from "styled-components";

function ReadingImg() {
	return (
		<div>
			<StyledImg src="https://images.gr-assets.com/challenges/2022/facebook.png" />
		</div>
	);
}

export default ReadingImg;

export const StyledImg = styled.img`
	width: 100%;
	height: 25rem;
`;
