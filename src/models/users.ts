import database from '../database'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env

export type User = {
    id?: number
    firstName: string
    lastName: string
    password: string
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const conn = await database.connect()
            const sql = 'SELECT * FROM users;'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (e) {
            throw new Error(`You Can't viewing Users. Error ${e}`)
        }
    }
    async show(id: string): Promise<User> {
        try {
            const conn = await database.connect()
            const sql = 'SELECT * FROM users WHERE id=($1);'
            const result = await conn.query(sql, [parseInt(id)])
            conn.release()
            return result.rows[0]
        } catch (e) {
            throw new Error(`The System hasn't a User with id ${id}. Error ${e}`)
        }
    }
    async create(user: User): Promise<User> {
        try {
            const conn = await database.connect()
            const sql =
                'INSERT INTO users (first_name, last_name, user_password) VALUES ($1, $2, $3) RETURNING *;'
            const hash = bcrypt.hashSync(
                user.password + BCRYPT_PASSWORD,
                parseInt(SALT_ROUNDS as string)
            )
            const result = await conn.query(sql, [user.firstName, user.lastName, hash])
            conn.release()
            return result.rows[0]
        } catch (e) {
            throw new Error(`You can't create a User. Error ${e}`)
        }
    }
    // async auth(firstName: string, password: string): Promise<User | null> {
    //     const conn = await database.connect()
    //     const sql = 'SELECT user_password FROM users WHERE first_name=($1);'
    //     const result = await conn.query(sql, [firstName])

    //     if (result.rows.length) {
    //         const user = result.rows[0]
    //         if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.user_password)) {
    //             return user
    //         }
    //     }
    //     return null
    // }
}
