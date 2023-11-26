import { deleteBook, getBook } from "./books";

describe("DELETE api/v1/books endpoint", () => {
	test("book successfully deleted by bookservice", async () => {
		//Arrange
		const bookId = 2;
		//Act
		const res = deleteBook(bookId);
		//Assert
		expect(deleteBook(bookId)).toEqual(1);
	});
});
