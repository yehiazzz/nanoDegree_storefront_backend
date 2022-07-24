import app from '../../server'
import supertest from 'supertest'
import { User } from '../../models/users'
import { verify } from 'jsonwebtoken'
import { Product } from '../../models/products'

const req = supertest(app)

describe('Test Product Endpoint responses', (): void => {
    const newproduct: Product = {
        product_name: "Tablet",
        price: 3000,
        category: "Tablets"
    }
    const newUser: User = {
        firstName: "Muhammad",
        lastName: "Al-Aasar",
        password: "20221443"
    }
    let token: string
    let newUserID: number

    it("Test create user", async () => {
        await req.post("/users").send(newUser).expect(200).then(res => {
            token = res.body.token
            const decodedJWT = verify(token as string, process.env.TOKEN_SECERT as string)
            newUserID = decodedJWT.user.id
        })
    })

    it('Gets all Products', async (): Promise<void> => {
        const res = await req.get('/products')
        expect(res.status).toBe(200)
    })
    it('Get specific Product', async (): Promise<void> => {
        const res = await req.get('/products/1')
        expect(res.status).toBe(200)
    })
    it('Create Product', async (): Promise<void> => {
        await req.post('/products').send(newproduct).set("Authorization", `Bearer ${token}`).expect(200).then(res => {
            expect(res.body.product_name).toEqual("Tablet")
        })
    })
})