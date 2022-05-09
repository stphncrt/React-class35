import styled from "styled-components";
import ProductCard from "./ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import useFetch from "../hooks/UseFetch";

function Products({ selectedCategory }) {
	const url = selectedCategory
		? `https://fakestoreapi.com/products/category/${selectedCategory}`
		: "https://fakestoreapi.com/products/";
	const { data: products, isLoading, errMessage } = useFetch(url);

	return (
		<StyledContainer>
			{isLoading ? (
				<ClipLoader css={override} size={100} />
			) : errMessage ? (
				<h3>{errMessage}</h3>
			) : (
				products.map((product, index) => {
					return (
						<ProductCard key={index} image={product.image} title={product.title} id={product.id} />
					);
				})
			)}
		</StyledContainer>
	);
}

export default Products;

export const StyledContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 600px) {
		margin: 1rem;
		gap: 2rem;
	}
`;
export const override = css`
	display: block;
	margin: 0 auto;
	margin-top: 10rem;
`;
