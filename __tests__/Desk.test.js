import { render, screen, fireEvent } from '@testing-library/react';
import Desk from '../components/Desk';

describe('Desk Component', () => {
  it('renders correctly with default position', () => {
    render(<Desk />);
    
    const deskElement = screen.getByTestId('desk');
    expect(deskElement).toBeInTheDocument();
    expect(deskElement.style.left).toBe('100px');
    expect(deskElement.style.top).toBe('400px');
  });

  it('renders with custom position', () => {
    render(<Desk position={{ x: 200, y: 300 }} />);
    
    const deskElement = screen.getByTestId('desk');
    expect(deskElement.style.left).toBe('200px');
    expect(deskElement.style.top).toBe('300px');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Desk onClick={handleClick} />);
    
    fireEvent.click(screen.getByTestId('desk'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
}); 