import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import userRoutes from './router/userRouter.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './database/connection.js';

dotenv.config();

const app = express()

// Connect to the database
connectDB();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
})