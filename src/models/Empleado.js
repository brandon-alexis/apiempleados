import { Schema, model } from 'mongoose'

const empleadoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    cargo: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

const Empleado = model('empleado', empleadoSchema)

export default Empleado