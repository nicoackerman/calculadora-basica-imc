import express, {json} from "express"
import 'dotenv/config'
import cors from 'cors'
import { registersRouter } from "./registers-router.js"

const app = express()
const PORT = process.env.API_PORT ?? 3100
app.disable('x-powered-by')
app.use(json());
app.use(cors());



app.use('/registers', registersRouter)
app.use('/udi', (req, res) => {
    res.status(200).send('<h1>Online...</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})  