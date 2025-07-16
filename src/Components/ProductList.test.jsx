import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

const mockProducts = [
  { id: 1, title: 'Product One', price: 100, image: 'img1.jpg' },
  { id: 2, title: 'Product Two', price: 200, image: 'img2.jpg' },
];

test('renders all product cards', () => {
  render(<ProductList products={mockProducts} addToCart={() => {}} />);
  expect(screen.getByText(/Product One/i)).toBeInTheDocument();
  expect(screen.getByText(/Product Two/i)).toBeInTheDocument();
});
