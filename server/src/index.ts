import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI || ''

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV !== 'production') {
  mongoose
    .connect(DB_URI)
    .then(() => console.log('Connected to database'))
    .catch(err => console.log("Can't connect to database", err.message))

  app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
}

export default app
