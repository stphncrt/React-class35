import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	return (
		<StyledContainer>
			<h1>Welcome to HYF store...</h1>
			<div>
				<h2>Products</h2>
				<a id="first" href="">
					Products
				</a>
				<a href="" onClick={() => navigate("/favorites")}>
					Favorites
				</a>
			</div>
		</StyledContainer>
	);
}

export default Header;
const StyledContainer = styled.div`
	margin: 2rem;
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	#first {
		margin-left: auto;
	}
	h1 {
		text-align: center;
	}
	a {
		margin: 0.3rem;
	}

	@media screen and (max-width: 600px) {
		margin-left: 0.5rem;
		h1 {
			font-size: 20px;
		}
		h2 {
			font-size: 16px;
		}
	}
`;
