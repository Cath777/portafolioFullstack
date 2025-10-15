import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: tu-email@ejemplo.com</p>
            <p>Tel: +123 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Navegación</h3>
            <nav>
              <a href="/">Inicio</a>
              <a href="/about">Sobre Mí</a>
              <a href="/projects">Proyectos</a>
              <a href="/contact">Contacto</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;