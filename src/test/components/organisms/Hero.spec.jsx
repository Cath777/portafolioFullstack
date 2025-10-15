import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../../components/organisms/Hero';

describe('Hero Component', () => {
  it('renderiza el título correctamente', () => {
    render(<Hero />);
    const title = screen.getByText(/Estudiante Ingeniería en informática/i);
    expect(title).toBeTruthy();
  });

  it('renderiza la imagen de perfil', () => {
    render(<Hero />);
    const image = screen.getByRole('img');
    expect(image).toBeTruthy();
    expect(image).toHaveAttribute('alt', expect.any(String));
  });

  it('renderiza los botones de acción', () => {
    render(<Hero />);
    const verProyectosButton = screen.getByText(/Ver proyectos/i);
    const contactarButton = screen.getByText(/Contactar/i);
    expect(verProyectosButton).toBeTruthy();
    expect(contactarButton).toBeTruthy();
  });

  it('renderiza el texto de descripción', () => {
    render(<Hero />);
    const description = screen.getByText(/Hola, mi nombre es/i);
    expect(description).toBeTruthy();
  });
});