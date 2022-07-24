# Storefront Backend Project

## Technologies
The Application using of the following libraries:
- Typescript/Javascript
- Postgres for the database.
- Node/Express for the application logic.
- dotenv for managing environment variables.
- db-migrate for database migrations.
- jsonwebtoken (JWT).
- jasmine/supertest for testing.
- bcrypt for hashing.
- eslint/prettier for clean and clear code.

## Getting Started
> I'm using a default port of postgres databases (5432)

### 1. Install the dependencies:
```sh
npm i
```
### 2. Create .env file and use this variables:
- DB_HOST
- DB_NAME
- DB_USER
- DB_PASSWORD
- TEST_DB_NAME
- TEST_DB_USER
- TEST_DB_PASSWORD

- ENV=dev
- BCRYPT_PASSWORD=your-secret-password
- SALT_ROUNDS=10
- TOKEN_SECERT=mk2022!

### 3. Install Migrations
```sh
db-migrate up
```
### 4. Run Project
```sh
npm run watch
```
```sh
npm run start
```

---
#### URL
```sh
172.0.0.1:3005
```
```sh
172.0.0.1:3005/users
```
```sh
172.0.0.1:3005/product
```
```sh
172.0.0.1:3005/orders
```

#### Command for Testing
```sh
npm run test
```
#### Command for Compile Prject to JS
```sh
npm run tsc
```