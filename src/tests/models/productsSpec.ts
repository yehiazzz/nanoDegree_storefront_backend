import { Product, ProductStore } from '../../models/products'

const store = new ProductStore()

describe('Products Model Testing', () => {

    describe("Products Methods exists", () => {
        it('Should have an create method', () => {
            expect(store.create).toBeDefined()
        })
        it('Should have an index method', () => {
            expect(store.index).toBeDefined()
        })
        it('Should have an show method', () => {
            expect(store.show).toBeDefined()
        })
    })

    describe("Test Methods of Products Model", () => {
        it('Create method should be return product has been created', async () => {
            try {
                const result = await store.create({
                    product_name: 'Test Product',
                    price: 100,
                    category: 'Test Category'
                })
                expect(result).toEqual({
                    id: result.id,
                    product_name: 'Test Product',
                    price: 100,
                    category: 'Test Category'
                })
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })

        it('Index method should be return a list of Products', async () => {
            try {
                const result = await store.index()
                expect(result.length).toBe(2)
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })

        it('Show method should be return an Product', async () => {
            try {
                const result = await store.show('1')
                expect(result.id).toBe(1)
            } catch (e) {
                throw new Error(`Error ${e}`)
            }
        })
    })
})
