import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('welcome to express'))

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
})