import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/products'
import dotenv from 'dotenv'
import verifyAuthToken from './verifyAuthToken'

dotenv.config()

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
    try {
        const products = await store.index()
        res.json(products)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const product = await store.show(req.params.id)
        res.json(product)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const create = async (req: Request, res: Response) => {
    const product: Product = {
        product_name: req.body.product_name,
        price: req.body.price,
        category: req.body.category,
    }
    try {
        const newProduct = await store.create(product)
        res.json(newProduct)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const productRoutes = (app: express.Application) => {
    app.get('/products', index)
    app.get('/products/:id', show)
    app.post('/products', verifyAuthToken, create)
}

export default productRoutes
