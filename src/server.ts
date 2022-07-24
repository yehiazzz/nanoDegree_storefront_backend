import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './handlers/productRoutes'
import userRoutes from './handlers/userRoutes'
import orderRoutes from './handlers/orderRoutes'


const app: express.Application = express()
const port = 3005

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

productRoutes(app)
userRoutes(app)
orderRoutes(app)

app.listen(port, function () {
    console.log(`starting app on: http://localhost:${port}`)
})

export default app
