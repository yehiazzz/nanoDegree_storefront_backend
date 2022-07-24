import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    TEST_DB_NAME,
    TEST_DB_USER,
    TEST_DB_PASSWORD,
    ENV,
} = process.env


let database

if (ENV === 'dev') {
    database = new Pool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD,
    })
}

if (ENV === 'test') {
    database = new Pool({
        host: DB_HOST,
        database: TEST_DB_NAME,
        user: TEST_DB_USER,
        password: TEST_DB_PASSWORD,
    })
}

export default database as Pool
