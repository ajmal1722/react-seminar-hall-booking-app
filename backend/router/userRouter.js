import express from 'express'
const router = express.Router()

// Importing controller file
import { signUp, login } from '../controller/userController.js'

router.post('/signup', signUp)
router.post('/login', login)

export default router;