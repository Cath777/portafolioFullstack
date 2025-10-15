import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../../../components/organisms/ContactForm';

describe('ContactForm Component', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  it('renderiza todos los campos del formulario', () => {
    expect(screen.getByLabelText(/nombre/i)).toBeTruthy();
    expect(screen.getByLabelText(/email/i)).toBeTruthy();
    expect(screen.getByLabelText(/mensaje/i)).toBeTruthy();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeTruthy();
  });

  it('permite ingresar texto en los campos', () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensaje/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hola, este es un mensaje de prueba' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hola, este es un mensaje de prueba');
  });

  it('muestra mensajes de validación', () => {
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    
    fireEvent.click(submitButton);

    // Verifica que se muestren los mensajes de error de validación
    expect(screen.getByText(/el nombre es requerido/i)).toBeTruthy();
    expect(screen.getByText(/el email es requerido/i)).toBeTruthy();
    expect(screen.getByText(/el mensaje es requerido/i)).toBeTruthy();
  });

  it('permite enviar el formulario con datos válidos', () => {
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hola, este es un mensaje de prueba' } });

    fireEvent.click(submitButton);

    // Verifica que se muestre un mensaje de éxito
    expect(screen.getByText(/mensaje enviado con éxito/i)).toBeTruthy();
  });
});