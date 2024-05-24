import express from 'express'
const router = express.Router()

// Importing controller file
import { home } from '../controller/userController.js'

router.get('/', home)
router.get('/abc', (req, res) => res.send('welcome to abc'))

export default router;