import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  fromBaseCurrency: string;
  toSelectedCurrency: string;
}

const initialState: CurrencyState = {
  fromBaseCurrency: "EUR",
  toSelectedCurrency: localStorage.getItem("selected-currency") || "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.toSelectedCurrency = action.payload;

      localStorage.setItem("selected-currency", state.toSelectedCurrency);
    },
  },
});

export const selectSelectedCurrency = (state: RootState) =>
  state.currency.toSelectedCurrency;
export const selectBaseCurrency = (state: RootState) =>
  state.currency.fromBaseCurrency;

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
