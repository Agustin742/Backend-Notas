import ModelTag from "../models/tag.model.js"

const obtenerProductos = async () => {
    try {
        const todosLosProductos = await ModelTag.find()

        return todosLosProductos

    } catch (error) {
        throw error // Lanzar el error para arriba
    }
}

const guardarProducto = async (productoAGuardar) => {
    try {
        const productoGuardado = await ModelTag.create(productoAGuardar)
        return productoGuardado

    } catch (error) {
        throw error
    }
}

const obtenerProductoPorId = async (id) => {
    try {
        const unProducto = await ModelTag.findById(id)
        return unProducto

    } catch (error) {
        throw error
    }
}

const editarProducto = async (id, data) => {
    try {
        const options = { new: true }

        const productoEditado = await ModelTag.findByIdAndUpdate(id, data, options)

        return productoEditado;

    } catch (error) {
        throw error
    }
}

const borrarProducto = async (id) => {
    try {
        const productoBorrado = await ModelTag.findByIdAndDelete(id)

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