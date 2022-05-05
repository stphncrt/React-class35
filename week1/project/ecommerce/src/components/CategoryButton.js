import styled from "styled-components";

export const StyledButton = styled.button`
	border: none;
	padding: 0.5rem;
	color: #fff;
	background-color: ${(props) => (props.isActive ? "#3c45bb" : "#64b1c0")};
	text-decoration: none;
	:hover {
		background-color: ${(props) => (props.isActive ? null : "#243661")};
	}
`;
