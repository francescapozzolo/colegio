import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [alumnos, setAlumnos] = useState([])
  const [maestros, setMaestros] = useState([])
  const [nuevoMaestro, setNuevoMaestro] = useState({nombre: '', apellido: '', materia: ''})

  useEffect(() => {
    fetch('http://localhost:4000/api/alumno')
    .then(res => res.json())
    .then(data => setAlumnos(data.respuesta))
  }, [])

  useEffect(() => {
    fetch('http://localhost:4000/api/maestro')
    .then(res => res.json())
    .then(data => setMaestros(data.respuesta))
  }, [])

  const leerInput = (e) => {
    setNuevoMaestro({
      ...nuevoMaestro,
      [e.target.name]: e.target.value
    })
  }

  const enviarValores = async (e) => {
    e.preventDefault()
    const respuesta = await axios.post('http://localhost:4000/api/maestro', nuevoMaestro)
    setMaestros([
      ...maestros,
      respuesta.data.respuesta
    ])
    setNuevoMaestro({nombre: '', apellido: '', materia: ''})
  }
  return (
      <div className="container" style={{width: '90%', margin: '2vh auto', backgroundColor: 'lightgreen', height: '90vh'}}>
        <div className="cajita">
          <h1>Lista de Alumnos</h1>
          <hr/>
          {alumnos.length === 0 && <h3>No hay alumnos aún!</h3>}
          {alumnos.map(alumno => <h3 key={alumno._id}>{alumno.nombre} {alumno.apellido}</h3>)}
        </div>
        <div className="cajita">
          <h1>Lista de Maestros</h1>
          <hr/>
          {maestros.length === 0 && <h3>No hay maestros aún!</h3>}
          {maestros.map(maestro => <h3>{maestro.nombre} {maestro.apellido}</h3>)}
        </div>
        <div className="cajita">
          <h1>Cargar Nuevo Alumno</h1>
          <hr/>
          <form>
            <input type="text" className="input" placeholder="Nombre"/>
            <input type="text" className="input" placeholder="Apellido"/>
            <input type="number" className="input" placeholder="Grado"/>
            <select name="" className="input">
              {maestros.map(maestro => (
                <option>{maestro.nombre} {maestro.apellido}</option>
              ))}
            </select>
            <button className="boton">Enviar</button>
          </form>
        </div>
        <div className="cajita">
          <h1>Cargar Nuevo Maestro</h1>
          <hr/>
          <form>
            <input type="text" className="input" placeholder="Nombre"
            onChange={leerInput} value={nuevoMaestro.nombre} name="nombre" />
            <input type="text" className="input" placeholder="Apellido"
            onChange={leerInput} value={nuevoMaestro.apellido} name="apellido" />
            <input type="text" className="input" placeholder="Materia"
            onChange={leerInput} value={nuevoMaestro.materia} name="materia" />
            <button className="boton" onClick={enviarValores}>Enviar</button>
          </form>
        </div>
      </div>
    )
  }

export default App
