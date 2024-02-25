import EmpleadoService from "../services/EmpleadoService"

export default class EmpleadoController {
    
    static async getAll(req, res) {
        const empleados = await EmpleadoService.getAll()
        res.status(200).json(empleados)
    }

    static async getById({ params }, res) {
        const { id } = params
        const empleado = await EmpleadoService.getById({ id })
        res.status(200).json(empleado)
    }

    static async create({ body }, res) {
        const nuevoEmpleado = await EmpleadoService.create({ data: body })
        res.status(201).json(nuevoEmpleado)
    }
}