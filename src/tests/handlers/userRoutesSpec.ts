import app from '../../server'
import supertest from 'supertest'
import { User } from "../../models/users"
import { verify } from 'jsonwebtoken'

const req = supertest(app)

describe('Test User Endpoint responses', () => {
    const newUser: User = {
        firstName: "Muhammad",
        lastName: "Al-Aasar",
        password: "20221443"
    }
    let token :string
    let newUserID :number

    it("Test create user", async () => {
        await req.post("/users").send(newUser).expect(200).then(res => {
            token = res.body.token
            const decodedJWT = verify(token as string, process.env.TOKEN_SECERT as string)
            newUserID = decodedJWT.user.id
        })
    })
    
    it('Gets all Users', async () => {
        await req.get('/users').set("Authorization", `Bearer ${token}`).expect(200)
    })
    it('Get specific User', async () => {
        await req.get(`/users/${newUserID}`).set("Authorization", `Bearer ${token}`).expect(200)
    })
})
