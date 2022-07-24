import database from '../database'

export type Product = {
    id?: number
    product_name: string
    price: number
    category: string
}

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
            const conn = await database.connect()
            const sql = 'SELECT * FROM products;'
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (e) {
            throw new Error(`You Can't viewing products. Error ${e}`)
        }
    }

    async show(id: string): Promise<Product> {
        try {
            const conn = await database.connect()
            const sql = 'SELECT * FROM products WHERE id=($1);'
            const result = await conn.query(sql, [parseInt(id)])
            conn.release()
            return result.rows[0]
        } catch (e) {
            throw new Error(`The System hasn't a Product with id ${id}. Error ${e}`)
        }
    }
    
    async create(item: Product): Promise<Product> {
        try {
            const conn = await database.connect()
            const sql =
                'INSERT INTO products (product_name, price, category) VALUES ($1, $2, $3) RETURNING *;'
            const result = await conn.query(sql, [item.product_name, item.price, item.category])
            conn.release()
            return result.rows[0]
        } catch (e) {
            throw new Error(`You can't create a product. Error ${e}`)
        }
    }
}
