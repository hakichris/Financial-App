import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=5&apikey=6b664f4871a93fb215675c7d0d2244be';

export const getFinancial = createAsyncThunk(
  'company/getCompanystats',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  },
);

const initialState = {
  financialstats: [],
};

const CompanyFinancial = createSlice({
  name: 'financialstats',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getFinancial.fulfilled, (state, { payload }) => {
      if (!state.financialstats.length) {
        const newstats = payload.map(
          ({
            symbol: companySymbol, date: id, finalLink, reportedCurrency, netIncome,
            revenue, calendarYear, costOfRevenue, grossProfit, grossProfitRatio,
          }) => ({
            companySymbol,
            id,
            finalLink,
            reportedCurrency,
            netIncome,
            revenue,
            calendarYear,
            costOfRevenue,
            grossProfit,
            grossProfitRatio,
          }),
        );
        return { ...state, financialstats: newstats };
      }
      return { ...state };
    });
  },
});

export default CompanyFinancial.reducer;
