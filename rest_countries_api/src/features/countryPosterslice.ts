import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../app/Api";
import { PosterType } from "../types/types";


const initialState: PosterType = {
    country: [],
    status: 'idle',
    error: '',
}
export const loadCountryPoster = createAsyncThunk(
    'countryPoster/loadCountryPoster',
    async (name: string) => {
        const response = await api.getCountry(name);
        return response;
    }
);


export const countryPosterSlice = createSlice({
    name: 'countryPoster',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loadCountryPoster.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadCountryPoster.fulfilled, (state, action: any) => {
                state.country.push(...action.payload);
                state.status = 'success';
                state.error = '';
            })
            .addCase(loadCountryPoster.rejected, (state, action: any) => {
                state.error = action.error.message;
                state.status = 'failed';
            })
    }
});

//export state selectors
export const selectCountryPoster = (state: any) => state.countryPoster.country;
export const selectStatus = (state: any) => state.countryPoster.status;
export const selectErrorMessage = (state: any) => state.countryPoster.error;


export default countryPosterSlice.reducer;