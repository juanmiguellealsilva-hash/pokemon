import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Inicio from "./componentes/Inicio.jsx"
import Info from "./componentes/Info.jsx"
import Coleccion from "./componentes/Coleccion.jsx"
import Favoritos from "./componentes/Favoritos.jsx"
import Usuario from "./componentes/Usuario.jsx"
import Pokemon from "./componentes/Pokemon.jsx"

function App() {
  return (
    <Router>
      <nav className='c-menu'>
        <Link to="/">Inicio</Link>
        <Link to="/coleccion">Coleccion</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/info">Info</Link>
        <Link to="/usuario">Usuario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/coleccion" element={<Coleccion />} />
        <Route path="/info" element={<Info />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default App