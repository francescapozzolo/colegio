const mongoose = require('mongoose')

const maestroSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    materia: {type: String, required: true}
})

const Maestro = mongoose.model('maestro', maestroSchema)

module.exports = Maestro