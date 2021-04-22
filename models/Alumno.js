const mongoose = require('mongoose')

const alumnoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    grado: {type: Number, required: true},
    idMaestro: [{type: mongoose.Types.ObjectId, ref: 'maestro'}]
})

const Alumno = mongoose.model('alumno', alumnoSchema)

module.exports = Alumno