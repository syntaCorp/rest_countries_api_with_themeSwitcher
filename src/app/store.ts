import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from '../features/countriesSlice';
import countryPosterReducer from '../features/countryPosterslice';


const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryPoster: countryPosterReducer,
  }
});

 export default store;