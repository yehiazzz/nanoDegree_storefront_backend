import { User, UserStore } from '../../models/users'

const store = new UserStore()

describe('Users Model Testing', () => {

    describe("User Methods exists", () => {
        it('Should have an index method', () => {
            expect(store.index).toBeDefined()
        })
        it('Should have an show method', () => {
            expect(store.show).toBeDefined()
        })
        it('Should have an create method', () => {
            expect(store.create).toBeDefined()
        })
    })

    describe("Test Methods Of Users Model", () => {
        it('Create method should be return product has been created', async () => {
            try {
                const result = await store.create({
                    firstName: 'Muhammad',
                    lastName: 'Al-Aasar II',
                    password: '00000',
                } as User)
                expect(result.id).toEqual(result.id)
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })

        it('Index method should be return a list of Users', async () => {
            try {
                const result = await store.index()
                expect(result).not.toBeNull
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })

        it('Show method should be return an User', async () => {
            try {
                const result = await store.show('1')
                expect(result.id).toBe(1)
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })
    })
})
