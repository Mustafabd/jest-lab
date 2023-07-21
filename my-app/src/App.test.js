import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeChecked()
});

test("testing for ...",) () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText("Hello World")).toBeInTheDocument()
  const button = screen.getByRole("button");
  userEvent.click(button);
})