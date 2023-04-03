import axios from "axios";

//configure request to server with axios

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});

export const api = {
    //get all countries
    getCountries: async () => {
        const response = await http.get('/all')
        const data = await response.data
        return data;
    },
    //get country by name
    getCountry: async (name: string) => {
        const response = await http.get(`/name/${name}`);
        const data = await response.data
        return data;
    },

    //get country data by code
    getByCountryCode: async (code: string) => {
        const response = await http.get(`/alpha/${code}`);
        return response.data;    
    }

}
