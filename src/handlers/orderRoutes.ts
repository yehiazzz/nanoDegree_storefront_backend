import express, { Request, Response } from 'express'
import {  OrderStore } from '../models/orders'
import verifyAuthToken from './verifyAuthToken'

const store = new OrderStore()

const index = async (req: Request, res: Response) => {
    try {
        const userID = parseInt(req.params.id)
        const userOrders = await store.index(userID)
        res.json(userOrders)
        // console.log(userOrders)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const orderRoutes = (app: express.Application) => {
    app.get('/orders/:id', verifyAuthToken, index)
}

export default orderRoutes
