import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const verifyAuthToken = (req: Request, res: Response, next: () => void): void => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader?.split(' ')[1]
        // console.log(authHeader)
        jwt.verify(token as string, process.env.TOKEN_SECERT as string)
        next()
    } catch (e) {
        res.status(401)
    }
}

export default verifyAuthToken
