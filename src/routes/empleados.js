import { Router } from 'express'
import EmpleadoController from '../controllers/EmpleadoController'

export const router = Router()

router
    .get('/', EmpleadoController.getAll)
    .get('/:id', EmpleadoController.getById)
    .post('/', EmpleadoController.create)
