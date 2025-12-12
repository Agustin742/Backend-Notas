import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/db.config.js'
import noteRouter from './routes/note.route.js'
import tagRouter from './routes/tag.route.js'

// ! Variables / Constantes
const app = express()
const PORT = process.env.PORT || 8088


// ! Middlewares
app.use(express.json())
app.use(express.urlencoded())

// ! Rutas
app.use('/api/', noteRouter)
app.use('/api/', tagRouter)


// ! Arranque del servidor
app.listen(PORT, (err) => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
  const uri = process.env.MONGO_URI
  connectDB(uri)
})