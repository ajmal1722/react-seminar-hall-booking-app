import express from 'express';
import dotenv from 'dotenv';
import userController from './controller/userController.js';

dotenv.config();

const app = express()

app.use('/', userController);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App started on http://localhost:${port}`)
})