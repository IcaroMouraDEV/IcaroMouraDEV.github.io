import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { skills } from '../data';

describe('test Skill component', () => {
  it('component is defined', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 2, name: /habilidades/i })

    expect(heading).toBeDefined();
    expect(heading).toHaveTextContent(/Habilidades/)
  });
  it('render cards', () => {
    render(<App />)
    const heading = screen.getAllByTestId('skill-card');
    const element = (index) => heading[index].childNodes[0];

    expect(heading).toHaveLength(skills.length);
    expect(element(0)).toHaveTextContent('React');
    expect(element(1)).toHaveTextContent('JavaScript');
    expect(element(2)).toHaveTextContent('Redux');
    expect(element(3)).toHaveTextContent('Git');
  });
});
