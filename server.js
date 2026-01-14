import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/db.config.js'
import noteRouter from './routes/note.route.js'
import tagRouter from './routes/tag.route.js'
import cors from 'cors'

// ! Variables / Constantes
const app = express()
const PORT = process.env.PORT || 8088


// ! Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));


// ! Rutas
app.use('/api/v1', noteRouter)
app.use('/api/v1', tagRouter)


// ! Arranque del servidor
app.listen(PORT, (err) => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
  const uri = process.env.MONGO_URI
  connectDB(uri)
})