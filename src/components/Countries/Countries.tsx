import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CountryType, searchPropType } from "../../types/types";
import { selectAllCountries, selectErrorMessage, selectStatus } from "../../features/countriesSlice";
import { fetchCountries } from "../../features/countriesSlice";
import CountriesItem from "./CountriesItem";


export default function Countries({ searchTerm, region }: searchPropType): React.ReactElement {

    //search and filter states
    const [searchParam] = useState(['name']);

    const dispatch = useDispatch<any>();
    const countries = useSelector(selectAllCountries);
    const loadStatus = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (loadStatus === 'idle') {
            dispatch(fetchCountries())
        }
    }, [loadStatus, dispatch]);


    //alphabetically sort countries 
    const sortedCountries = [...countries].sort((item: CountryType, _item: CountryType) => item.name.common.localeCompare(_item.name.common));

    // function filterdCountriesData(countries: CountryType[]) {
    //     return countries.filter((country: CountryType) => {

    //         if (country.region === region) {
    //             return searchParam.some((currentParam: string) => {
    //                 return country[currentParam as keyof country].common.toLowerCase().indexOf(searchTerm) === 0;
    //             })
    //         } else if (region === 'Filter by region') {
    //             return country.region;
    //         }

    //     })
    // }

    //existing function to render data
    function renderData(countries: CountryType[]) {
        return countries.filter((country: CountryType) => {
            if (country.region === region) {
                return country.name.common.toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) === 0;
            }
            else if ( region === 'Filter by region'){
                return country.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0;
            }
        })
    }

    return (
        <React.Fragment>
            {loadStatus === 'loading' ?
                <div className="status_box"><h1 className="loading">Loading...</h1></div>
                : loadStatus === 'success' ?
                    renderData(sortedCountries)
                        .map((country: any, index: number) => {
                            return (<CountriesItem
                                key={country.name.common + index}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flags={country.flags}
                                alt={country.flags.alt}
                                cioc={country.cioc}
                                cca3={country.cca3}
                            />)
                        })
                    : <div className="status_box">
                        <h1 className="loading">{errorMessage}</h1>
                    </div>
            }
        </ React.Fragment>
    );
}