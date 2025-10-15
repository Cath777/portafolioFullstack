import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: acathagutierrez@gmail.com'</p>
            <p>Tel: +569 89876543</p>
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
          <p>&copy; {new Date().getFullYear()} Aida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;