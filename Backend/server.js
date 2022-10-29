import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './Config/db.js'
import { notFound,errorHandler } from "./middlewares/errorHandler.js";
import userRoutes from './routes/userRoutes.js'

const app = express()

dotenv.config()
connectDB()

app.get('/', (req,res) => {
    res.send("API is running....")
})

app.use(express.json())
app.use(notFound)
app.use(errorHandler)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("server runnning....".yellow.bold))