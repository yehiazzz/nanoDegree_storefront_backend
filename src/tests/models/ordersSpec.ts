import { Order, OrderStore } from '../../models/orders'

const store = new OrderStore()

describe('Orders Model Testing', () => {
    it('Should have an index method', () => {
        expect(store.index).toBeDefined()
    })
    it('Index method should be return a list of Orders', async () => {
        try {
            const result = await store.index(1)
            expect(result).not.toBeNull()
        } catch (e) {
            throw new Error(`Error ${e}`)
        }
    })
})
