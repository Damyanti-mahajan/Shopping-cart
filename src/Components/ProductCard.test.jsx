import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // ✅ Add this line
import ProductCard from './ProductCard';

const mockProduct = {
  id: 1,
  title: 'Test Product Title',
  price: 999,
  image: 'https://example.com/image.jpg',
};

test('renders product details', () => {
  render(<ProductCard product={mockProduct} addToCart={() => {}} />);
  expect(screen.getByText(/Test Product Title/i)).toBeInTheDocument();
  expect(screen.getByText(/₹999/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Add to Cart/i })).toBeInTheDocument();
});

test('calls addToCart on button click', () => {
  const mockAddToCart = vi.fn(); // ✅ Replaced jest.fn() with vi.fn()
  render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
  const button = screen.getByText(/Add to Cart/i);
  fireEvent.click(button);
  expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
});
