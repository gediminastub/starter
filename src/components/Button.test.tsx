import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Button} from './Button';

describe('Test', () => {
  it('renders a button', () => {
    let i = 0;

    render(<Button onClick={() => i++}>test</Button>);

    const button = screen.getByRole('button', {name: 'test'});
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(i).toBe(1);
  });
});
