import { Router } from 'express'
import { validateBody } from '../middleware/validation.ts'
import { z } from 'zod'

const createHabitSchema = z.object({
  name: z.string(),
})

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'got one habit' })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
  res.json({ message: 'added one habit' }).status(201)
})

router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted one habit' })
})

router.post('/:id/complete', (req, res) => {
  res.json({ message: 'habit completed' }).status(201)
})

export default router
