import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react';
import InputInspector from './Input_Inspector';

it('should render the component onto the screen', () => {
  render(<InputInspector />);
  expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
  //   expect(screen.getByTestId('add-word-button')).toBeInTheDocument();
});
