import express from 'express'
import controller from '../controllers/note.controller.js'
const noteRouter = express.Router()

// CRUD Notes

noteRouter.get('/notes', controller.getAll)

noteRouter.get('/notes/:id', controller.getOne)

noteRouter.post('/notes', controller.create)

noteRouter.put('/notes/:id', controller.edit)

noteRouter.delete('/notes/:id', controller.remove)

export default noteRouter