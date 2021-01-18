import React from 'react';
import { render, screen } from '@testing-library/react';
import Rettiwt from './Rettiwt/index';

test('renders learn react link', () => {
  render(<Rettiwt />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
