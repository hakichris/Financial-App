import { configureStore } from '@reduxjs/toolkit';
import financialstatsReducer from './CompanyFinancialSlice';

const store = configureStore({
  reducer: {
    finance: financialstatsReducer,
  },
});

export default store;
