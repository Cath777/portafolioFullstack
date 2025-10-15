import { Outlet, NavLink } from 'react-router-dom';
import Footer from './components/organisms/Footer';

export default function App() {
  return (
    <div className="app-container">
      <header className="site">
        <div className="container">
          <nav className="site">
            <NavLink to="/" className="brand" aria-label="Inicio">Mi Portafolio</NavLink>
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
  );
}
