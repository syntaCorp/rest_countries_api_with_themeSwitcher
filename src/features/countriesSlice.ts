import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {countriesStateType} from '../types/types';
import { api } from "../app/Api";


const initialState: countriesStateType = {
    countries: [],
    status: 'idle',
    error: '',
};

//load all countries thunk 
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const response = await api.getCountries()
           return response;
    });

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action: any) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action: any) => {
                state.status = 'success';
                state.countries.push(...action.payload);
            })
            .addCase(fetchCountries.rejected, (state, action: any) => {
                // state.countries.push(action.payload);
                state.error = action.error.message;
                state.status = 'failed'
            })
    }
});


export const selectAllCountries = (state:any) => state.countries.countries;
export const selectErrorMessage = (state:any) => state.countries.error;
export const selectStatus = (state:any) => state.countries.status;


export default countriesSlice.reducer;

