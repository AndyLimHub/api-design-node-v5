import { app } from './server.ts' // <-- note the .ts extension

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
