import express, { Request, Response } from 'express'
import { User, UserStore } from '../models/users'
import verifyAuthToken from './verifyAuthToken'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const { TOKEN_SECERT } = process.env

const store = new UserStore()

const index = async (_req: Request, res: Response) => {
    try {
        const users = await store.index()
        res.json(users)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const show = async (req: Request, res: Response) => {
    try {
        const user = await store.show(req.params.id)
        res.json(user)
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const create = async (req: Request, res: Response) => {
    const user: User = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        password: req.body.password,
    }
    try {
        const newUser = await store.create(user)
        const token = jwt.sign({ user: newUser }, TOKEN_SECERT as string);
        res.json({
            user: newUser,
            token
        })
    } catch (e) {
        res.status(400)
        res.json(e)
    }
}

const userRoutes = (app: express.Application) => {
    app.get('/users', verifyAuthToken, index)
    app.get('/users/:id', verifyAuthToken, show)
    app.post('/users', create)
}

export default userRoutes
