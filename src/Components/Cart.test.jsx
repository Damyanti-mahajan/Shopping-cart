import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { vi } from 'vitest';

// ✅ Proper mock cart item with `product` and `quantity`
const mockCartItems = [
  {
    product: {
      id: 1,
      title: 'Test Product for Cart Testing',
      price: 150,
      image: 'https://via.placeholder.com/150',
    },
    quantity: 2,
  }
];

describe('Cart Component', () => {
  it('displays empty message when cart is empty', () => {
    render(
      <Cart
        cartItems={[]}
        removeFromCart={vi.fn()}
        increaseQty={vi.fn()}
        decreaseQty={vi.fn()}
        clearCart={vi.fn()}
      />
    );

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart items and total amount correctly', () => {
    render(
      <Cart
        cartItems={mockCartItems}
        removeFromCart={vi.fn()}
        increaseQty={vi.fn()}
        decreaseQty={vi.fn()}
        clearCart={vi.fn()}
      />
    );

    expect(screen.getByText(/Test Product for Cart Testing/)).toBeInTheDocument();
    expect(screen.getByText('$150 × 2 =')).toBeInTheDocument();
    expect(screen.getByText('Total: $300.00')).toBeInTheDocument();
  });

  it('calls increaseQty when + button is clicked', () => {
    const increaseMock = vi.fn();

    render(
      <Cart
        cartItems={mockCartItems}
        removeFromCart={vi.fn()}
        increaseQty={increaseMock}
        decreaseQty={vi.fn()}
        clearCart={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText('+'));
    expect(increaseMock).toHaveBeenCalledWith(mockCartItems[0].product);
  });

  it('calls decreaseQty when − button is clicked', () => {
    const decreaseMock = vi.fn();

    render(
      <Cart
        cartItems={mockCartItems}
        removeFromCart={vi.fn()}
        increaseQty={vi.fn()}
        decreaseQty={decreaseMock}
        clearCart={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText('−'));
    expect(decreaseMock).toHaveBeenCalledWith(mockCartItems[0].product);
  });

  it('calls removeFromCart when X button is clicked', () => {
    const removeMock = vi.fn();

    render(
      <Cart
        cartItems={mockCartItems}
        removeFromCart={removeMock}
        increaseQty={vi.fn()}
        decreaseQty={vi.fn()}
        clearCart={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText('X'));
    expect(removeMock).toHaveBeenCalledWith(mockCartItems[0].product);
  });

  it('calls clearCart when Clear Cart button is clicked', () => {
    const clearMock = vi.fn();

    render(
      <Cart
        cartItems={mockCartItems}
        removeFromCart={vi.fn()}
        increaseQty={vi.fn()}
        decreaseQty={vi.fn()}
        clearCart={clearMock}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /clear cart/i }));
    expect(clearMock).toHaveBeenCalled();
  });
});
