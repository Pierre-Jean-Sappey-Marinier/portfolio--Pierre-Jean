import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects component', () => {
  test('renders the component', () => {
    render(<Projects />);

    // Vérifie que le titre du composant est rendu
    const titleElement = screen.getByText('Projets');
    expect(titleElement).toBeInTheDocument();

    // Vérifie que les liens sont rendus
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(6);

    // Vérifie que les descriptions sont rendues
    const descriptionElements = screen.getAllByTestId('description');
    expect(descriptionElements.length).toBe(6);
  });
});
