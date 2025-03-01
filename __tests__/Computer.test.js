import { render, screen, fireEvent, act } from '@testing-library/react';
import Computer from '../components/Computer';

// Mock timers for testing setTimeout
jest.useFakeTimers();

describe('Computer Component', () => {
  it('renders correctly with default position', () => {
    render(<Computer />);
    
    const computerElement = screen.getByTestId('computer');
    expect(computerElement).toBeInTheDocument();
    expect(computerElement.style.left).toBe('120px');
    expect(computerElement.style.top).toBe('350px');
  });

  it('renders with custom position', () => {
    render(<Computer position={{ x: 200, y: 300 }} />);
    
    const computerElement = screen.getByTestId('computer');
    expect(computerElement.style.left).toBe('200px');
    expect(computerElement.style.top).toBe('300px');
  });

  it('turns on when clicked and shows boot screen', () => {
    render(<Computer />);
    
    const screenElement = screen.getByTestId('computer').querySelector('div div');
    expect(screenElement).not.toHaveClass('screenOn');
    
    fireEvent.click(screenElement);
    
    expect(screenElement).toHaveClass('screenOn');
    expect(screen.getByText('90s OS')).toBeInTheDocument();
  });

  it('shows desktop after boot sequence', () => {
    render(<Computer />);
    
    const screenElement = screen.getByTestId('computer').querySelector('div div');
    fireEvent.click(screenElement);
    
    // Fast-forward time to complete boot sequence
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    
    expect(screen.getByText('My PC')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('Chat')).toBeInTheDocument();
  });
}); 