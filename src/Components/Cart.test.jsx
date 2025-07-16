import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders cart with correct item count', () => {
  const mockCartItems = [
    { id: 1, title: 'Shirt' },
    { id: 2, title: 'Jeans' }
  ];

  render(<Cart cartItems={mockCartItems} />);

  const cartHeading = screen.getByText(/Cart:/i);
  expect(cartHeading).toHaveTextContent('2');
});
