import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=4&apikey=6b664f4871a93fb215675c7d0d2244be';

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
  searchParameters: '',
};

const CompanyFinancial = createSlice({
  name: 'financialstats',
  initialState,
  reducers: { 
    filterCalendar: (state, { payload }) => {
      const newItemArr = state.financialstats.filter((item) => item.calendarYear.includes(payload.toLowerCase()));
      return { ...state, financialstats: newItemArr };
    },
    updateSearch: (state, { payload }) => ({ ...state, searchParameters: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(getFinancial.fulfilled, (state, { payload }) => {
      if (!state.financialstats.length) {
        const newstats = payload.map(
          ({
            symbol: companySymbol, date: id, finalLink, reportedCurrency, netIncome,
            revenue, calendarYear, costOfRevenue, grossProfit,
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
          }),
        );
        return { ...state, financialstats: newstats };
      }
      return { ...state };
    });
  },
});

export const {filterCalendar, updateSearch } = CompanyFinancial.actions;
export default CompanyFinancial.reducer;
