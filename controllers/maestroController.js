const Maestro = require('../models/Maestro')

const maestroController = {
    cargaNuevoMaestro: async (req, res) => {
        const {nombre, apellido, materia} = req.body
        const nuevoMaestro = new Maestro({nombre, apellido, materia})
        await nuevoMaestro.save()
        res.json({success: true, respuesta: nuevoMaestro})
    },

    todosLosMaestros: async (req, res) => {
        const info = await Maestro.find()
        res.json({success: true, respuesta: info})
    },

    unMaestro: async (req, res) => {
        const {id} = req.params
        const info = await Maestro.findOne({_id: id})
        res.json({success: true, respuesta: info})
    }
}

module.exports = maestroController