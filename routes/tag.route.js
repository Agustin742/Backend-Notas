import express from 'express'
import controller from '../controllers/tag.controller.js'
const tagRouter = express.Router()

// CRUD tag

tagRouter.get('/tags', controller.getAll)

tagRouter.get('/tags/:id', controller.getOne)

tagRouter.post('/tags', controller.create)

tagRouter.put('/tags/:id', controller.edit)

tagRouter.delete('/tags/:id', controller.remove)

export default tagRouter