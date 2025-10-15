import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillTag from '../../../components/atoms/SkillTag';

describe('SkillTag Component', () => {
  it('renderiza el texto de la habilidad correctamente', () => {
    render(<SkillTag>HTML</SkillTag>);
    expect(screen.getByText('HTML')).toBeTruthy();
  });

  it('aplica la clase skill-tag', () => {
    render(<SkillTag>CSS</SkillTag>);
    const tag = screen.getByText('CSS');
    expect(tag).toHaveClass('skill-tag');
  });

  it('permite agregar clases adicionales', () => {
    render(<SkillTag className="test-class">JavaScript</SkillTag>);
    const tag = screen.getByText('JavaScript');
    expect(tag).toHaveClass('skill-tag');
    expect(tag).toHaveClass('test-class');
  });
});