import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {countriesStateType} from '../types/types';
import { api } from "../app/Api";


const initialState: countriesStateType = {
    countries: [],
    status: 'idle',
    error: '',
};

// handle request using asyncThunk
const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

//load all countries thunk 
export const fetchCountries = createAsyncThunk('countries/fetchCountries',
    async () => {
        //    return api.getCountries();
           const response = await http.get('/all')
           const data = await response.data
           return data;
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

