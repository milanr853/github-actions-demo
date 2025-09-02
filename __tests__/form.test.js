import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../src/components/Form';

test('renders form fields and submits correctly', () => {
  render(<Form />);
  const name = screen.getByLabelText(/Name/i);
  const age = screen.getByLabelText(/Age/i);
  const email = screen.getByLabelText(/Email/i);
  const phone = screen.getByLabelText(/Phone/i);
  const button = screen.getByRole('button', { name: /submit/i });

  // initial values empty
  expect(name).toHaveValue('');
  expect(age).toHaveValue('');
  expect(email).toHaveValue('');
  expect(phone).toHaveValue('');

  // change values
  fireEvent.change(name, { target: { value: 'Alice' } });
  fireEvent.change(age, { target: { value: '30' } });
  fireEvent.change(email, { target: { value: 'alice@example.com' } });
  fireEvent.change(phone, { target: { value: '1234567890' } });

  expect(name).toHaveValue('Alice');
  expect(age).toHaveValue('30');
  expect(email).toHaveValue('alice@example.com');
  expect(phone).toHaveValue('1234567890');

  // submit and check submitted block
  fireEvent.click(button);
  const status = screen.getByRole('status');
  expect(status).toBeInTheDocument();
  expect(screen.getByTestId('submitted-values')).toHaveTextContent('Alice');
  expect(screen.getByTestId('submitted-values')).toHaveTextContent('30');
  expect(screen.getByTestId('submitted-values')).toHaveTextContent('alice@example.com');
  expect(screen.getByTestId('submitted-values')).toHaveTextContent('1234567890');
});