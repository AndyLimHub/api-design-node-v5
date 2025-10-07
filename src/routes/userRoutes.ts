import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'users' })
})

router.post('/:id', (req, res) => {
  res.json({ message: 'user created' })
})

router.put('/', (req, res) => {
  res.json({ message: 'user updated' })
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'user deleted' })
})

export default router
