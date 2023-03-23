import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from '../features/countriesSlice';


export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  }
});

