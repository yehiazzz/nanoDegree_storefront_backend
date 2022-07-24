import app from '../../server'
import supertest from 'supertest'
import { User } from "../../models/users"
import { verify } from 'jsonwebtoken';

const req = supertest(app)

describe('Test Order Endpoint responses', (): void => {
    const newUser: User = {
        firstName: "Muhammad",
        lastName: "Al-Aasar",
        password: "123456"
    }
    let newUserID: number
    let token: string
    
    it("Test", async () => {
        await req.post("/users").send(newUser).expect(200).then(res => {
            token = res.body.token
            const decodedJWT = verify(token as string, process.env.TOKEN_SECERT as string)
            newUserID = decodedJWT.user.id
        })
    })
    it('Gets the Order Endpoint Expectations', async (): Promise<void> => {
        await req.get('/orders/1').set("Authorization", `Bearer ${token}`).expect(200)
    })
})
