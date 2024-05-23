import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.send('welcome to express'))
router.get('/abc', (req, res) => res.send('welcome to abc'))

export default router;