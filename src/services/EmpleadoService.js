import Empleado from "../models/Empleado";

export default class EmpleadoService {

    static async getAll() {
        const empleados = await Empleado.find()
        return empleados
    }

    static async getById({ id }) {
        const empleado = await Empleado.findById(id)

        if (empleado === null) return {message: "Empleado no encontrado"}
        return empleado
    }

    static async create({ data }) {
        const empleado = new Empleado(data)
        const nuevoEmpleado = await empleado.save()
        
        return {
            nombre: nuevoEmpleado.nombre,
            apellido: nuevoEmpleado.apellido,
            edad: nuevoEmpleado.edad,
            cargo: nuevoEmpleado.cargo
        }
    }

    static async update({ id, data }) {
        const empleadoActualizado = await Empleado.findByIdAndUpdate(id, { $set: data })
        return empleadoActualizado
    }

    static async delete({ id }) {
        const result = await Empleado.findByIdAndDelete(id)
        return result
    }
}