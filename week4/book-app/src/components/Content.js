import React from "react";
import styled from "styled-components";

function content() {
	return (
		<StyledWrapper>
			<StyledContentWrapper>
				<h4> Deciding what to read next ? </h4>
				<p className="u-defaultType">
					You’ re in the right place.Tell us what titles or genres you’ ve enjoyed in the past, and
					we’ ll give you surprisingly insightful recommendations.
				</p>
			</StyledContentWrapper>
			<StyledContentWrapper>
				<h4> What are your friends reading ? </h4>
				<p className="u-defaultType">
					Chances are your friends are discussing their favorite(and least favorite) books on
					Goodreads.
				</p>
			</StyledContentWrapper>
		</StyledWrapper>
	);
}

export default content;

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin: 1rem 6rem;
	gap: 3rem;
`;
export const StyledContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 20rem;
	color: #420000;
	font-weight: 400;
`;
