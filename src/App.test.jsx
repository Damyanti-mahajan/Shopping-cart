import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest'; 
import App from './App';
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: 'Mock Product 1',
            price: 199,
            image: 'img.jpg',
          },
        ]),
    })
  );
});

test('renders app title and fetches products', async () => {
  render(<App />);
  expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Mock Product 1/i)).toBeInTheDocument();
  });
});
