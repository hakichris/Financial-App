import { screen, render } from '@testing-library/react';
import Header from '../pages/Navbar';

describe('Header', () => {
    test('it should render correctly', () => {
      render(
             <Header />
      );
      expect(screen.getByText(/Financial/i)).toBeDefined();
    });
  });
