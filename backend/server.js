import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './router/userRouter.js';

dotenv.config();

const app = express()

app.use('/', userRoutes);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
})