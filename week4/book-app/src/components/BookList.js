import BookCard from "./BookCard.js";
import styled from "styled-components";

const BookList = ({ books }) => {
	return (
		<StyledBookWrapper>
			{books?.map((book, index) =>
				book?.volumeInfo?.imageLinks?.thumbnail && book?.volumeInfo?.authors[0] !== undefined ? (
					<BookCard
						key={index}
						id={book?.id}
						title={book?.volumeInfo?.title}
						image={book?.volumeInfo?.imageLinks?.thumbnail}
						author={book?.volumeInfo?.authors[0]}
					/>
				) : null,
			)}
		</StyledBookWrapper>
	);
};
export default BookList;

export const StyledBookWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 1rem 6rem;
`;
