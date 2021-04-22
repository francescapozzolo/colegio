const express = require('express')
const router = express.Router()
const maestroController = require('../controllers/maestroController')
const alumnoController = require('../controllers/alumnoController')

const {todosLosAlumnos, cargaNuevoAlumno, unAlumno} = alumnoController
const {todosLosMaestros, cargaNuevoMaestro, unMaestro} = maestroController

router.route('/maestro')
.get(todosLosMaestros)
.post(cargaNuevoMaestro)

router.route('/maestro/:id')
.get(unMaestro)

router.route('/alumno')
.get(todosLosAlumnos)
.post(cargaNuevoAlumno)

router.route('/alumno/:id')
.get(unAlumno)

module.exports = router