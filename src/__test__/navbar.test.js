import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router';
import Header from '../pages/Navbar';
import financialstatsReducer from '../redux/CompanyFinancialSlice';

const store = configureStore({
  reducer: {
    finance: financialstatsReducer,
  },
});

describe('Header', () => {
  test('it should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Financial/i)).toBeDefined();
  });
});
