📖# Minimalist Book Manager API

This is the repository for the Minimalist Book Manager API. It provides an API for adding, deleting, updating and getting books.

## Author

- [@netcam22](https://github.com/netcam22)

### Technologies & Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)

## Usage

The API provides the following endpoints for managing books in an in-memory database:

GET "/api/v1/books"

GET "/api/v1/books/bookId"

POST "/api/v1/books"

PUT "/api/v1/books/bookId"

DELETE "/api/v1/books/bookId"
