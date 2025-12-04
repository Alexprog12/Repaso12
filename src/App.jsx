
import { Route, Routes, } from 'react-router-dom'
import './App.css'
import Rutas from './Rutas'
import Cursos from './Cursos'
import Perfil from './Perfil'
import Pags2 from './Pag2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Rutas></Rutas>}></Route>
      <Route path='/cursos' element={<Cursos></Cursos>}></Route>
      <Route path='/perfil' element={<Perfil></Perfil>}></Route>
      <Route path='/pag2' element={<Pags2></Pags2>}></Route>
    </Routes>
  )
}

export default App
