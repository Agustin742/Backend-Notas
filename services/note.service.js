import ModelNote from "../models/note.model.js"

const obtenerProductos = async () => {
    try {
        const todosLosProductos = await ModelNote.find()

        return todosLosProductos

    } catch (error) {
        throw error // Lanzar el error para arriba
    }
}

const guardarProducto = async (productoAGuardar) => {
    try {
        const productoGuardado = await ModelNote.create(productoAGuardar)
        return productoGuardado

    } catch (error) {
        throw error
    }
}

const obtenerProductoPorId = async (id) => {
    try {
        const unProducto = await ModelNote.findById(id)
        return unProducto

    } catch (error) {
        throw error
    }
}

const editarProducto = async (id, data) => {
    try {
        const options = { new: true }

        const productoEditado = await ModelNote.findByIdAndUpdate(id, data, options)

        return productoEditado;

    } catch (error) {
        throw error
    }
}

const borrarProducto = async (id) => {
    try {
        const productoBorrado = await ModelNote.findByIdAndDelete(id)

        return productoBorrado
    } catch (error) {
        throw error
    }
}

export default {
    obtenerProductos,
    guardarProducto,
    obtenerProductoPorId,
    editarProducto,
    borrarProducto
}