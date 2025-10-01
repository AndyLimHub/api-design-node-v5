import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<button>click</button>')
})

app.get('/health', (req, res) => {
  res.json({ message: 'yerr' })
})

export { app }
export default app
