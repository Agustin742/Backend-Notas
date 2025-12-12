import services from '../services/tag.service.js'

const getAll = async (req, res) => {
  try {
    const todosLosProductos = await services.obtenerProductos()
    res.json(todosLosProductos)
    
    res.json({
      ok: true,
      data: todosLosProductos
    })

  } catch (error) {
    console.log(error);
  }
}

const getOne = async (req, res) => {
  const id = req.params.id

  try {
    const productoGuardado = await services.obtenerProductoPorId(id)

    res.status(201).json({
      ok:true,
      data: productoGuardado
    })

  } catch (error) {
    console.log(error);
  }
}

const create = async (req, res) => {
  try {
    const productoPorCrear = req.body
    const productoGuardado = await services.guardarProducto(productoPorCrear)

    res.status(201).json({
      ok:true,
      data: productoGuardado
    })

  } catch (error) {
    console.log(error);
  }
}

const edit = async (req, res) => {
  const id = req.params.id
  const datos = req.body

  try {
    const productoEditado = await services.editarProducto(id, datos)

    res.json({
      ok: true,
      data: productoEditado
    })

  } catch (error) {
    console.log(error);
  }
}

const remove = async (req, res) => {
  const id = req.params.id

  try {
    const productoBorrado = await services.borrarProducto(id)

    res.json({
      ok: true,
      data: productoBorrado
    })

  } catch (error) {
    console.log(error);
  }
}

export default {
    getAll,
    getOne,
    create,
    edit,
    remove
}




