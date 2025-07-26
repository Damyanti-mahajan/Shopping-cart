import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetailList from './ProductDetailList';
import '@testing-library/jest-dom';


const mockProduct = {
  title: 'Sample Product',
  description: 'This is a sample product description.',
  price: 999,
  image: 'https://via.placeholder.com/150',
  rating: {
    rate: 4.5,
    count: 100
  }
};

describe('ProductDetailList Component', () => {
  it('should not render when product is null', () => {
    const { container } = render(<ProductDetailList product={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders product details correctly', () => {
    render(
      <ProductDetailList
        product={mockProduct}
        closeDetails={() => {}}
        addToCart={() => {}}
      />
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`₹ ${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(/★/)).toBeInTheDocument();
    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProduct.image);
  });

  it('calls closeDetails when close button is clicked', () => {
    const mockClose = vi.fn();

    render(
      <ProductDetailList
        product={mockProduct}
        closeDetails={mockClose}
        addToCart={() => {}}
      />
    );

    fireEvent.click(screen.getByText('×'));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('calls addToCart when Add to Cart button is clicked', () => {
    const mockAddToCart = vi.fn();

    render(
      <ProductDetailList
        product={mockProduct}
        closeDetails={() => {}}
        addToCart={mockAddToCart}
      />
    );

    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
