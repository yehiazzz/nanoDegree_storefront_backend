import database from '../database'

export type Order = {
    id?: number
    userID: number
    orderStatus?: string
}

export class OrderStore {
    async index(userID: number): Promise<Order[]> {
        try {
            const conn = await database.connect()
            const sql = 'SELECT products.product_name, products.price, order_products.quantity, orders.order_status FROM orders JOIN users ON user_id=($1) JOIN order_products ON orders.id=order_products.order_id JOIN products ON order_products.product_id=products.id;'
            const result = await conn.query(sql, [userID])
            conn.release()
            return result.rows
        } catch (e) {
            throw new Error(`You Can't viewing Orders. Error ${e}`)
        }
    }
}