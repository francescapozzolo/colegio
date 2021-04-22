const Alumno = require('../models/Alumno')

const alumnoController = {
    cargaNuevoAlumno: async (req, res) => {
        const {nombre, apellido, grado, idMaestro} = req.body
        const nuevoAlumno = new Alumno({
            nombre, apellido, grado, idMaestro
        })
        await nuevoAlumno.save()
        res.json({success: true, respuesta: nuevoAlumno})
    },

    todosLosAlumnos: async (req, res) => {
        const info = await Alumno.find()
        res.json({success: true, respuesta: info})
    },

    unAlumno: async (req, res) => {
        const {id} = req.params
        const info = await Alumno.findOne({_id: id}).populate('idMaestro', 'apellido')
        res.json({success: true, respuesta: info})
    }
}

module.exports = alumnoController