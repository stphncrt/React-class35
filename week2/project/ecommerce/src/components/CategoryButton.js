import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.5rem;
	color: #0e0c0c;
	background-color: ${(props) => (props.isActive ? "red" : "blue")};
	:hover{
		background-color: grey;
`;
