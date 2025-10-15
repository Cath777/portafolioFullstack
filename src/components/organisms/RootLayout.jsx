import { Outlet, NavLink } from 'react-router-dom'
import Footer from './Footer'

export default function RootLayout(){
  return (
    <div>
      <header className="site">
        <div className="container">
          <nav className="site">
            <NavLink to="/" className="brand" aria-label="Inicio">Emilia mi Diosa</NavLink>
            <div>
              <NavLink to="/" end>Inicio</NavLink>
              <NavLink to="/about">Sobre mí</NavLink>
              <NavLink to="/projects">Proyectos</NavLink>
              <NavLink to="/news">Noticias</NavLink>
              <NavLink to="/contact">Contacto</NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main className="container" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}