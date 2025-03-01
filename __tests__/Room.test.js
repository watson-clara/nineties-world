import { render, screen } from '@testing-library/react';
import Room from '../components/Room';

describe('Room Component', () => {
  it('renders children correctly', () => {
    render(
      <Room>
        <div data-testid="test-child">Test Child</div>
      </Room>
    );
    
    const childElement = screen.getByTestId('test-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Test Child');
  });
}); 