import services from '../services/tag.service.js'

const getAll = async (req, res) => {
  try {
    const todosLosProductos = await services.obtenerProductos()
    
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
    const tags = req.body

    // Validación mínima
    if (!Array.isArray(tags)) {
      return res.status(400).json({
        ok: false,
        message: 'Se esperaba un array de tags'
      })
    }

    const tagsGuardados = []

    for (const tag of tags) {
      const tagGuardado = await services.guardarProducto({
        name: tag.name,
        color: tag.color
      })

      tagsGuardados.push(tagGuardado)
    }

    res.status(201).json({
      ok: true,
      data: tagsGuardados
    })

  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      message: 'Error al crear tags'
    })
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




