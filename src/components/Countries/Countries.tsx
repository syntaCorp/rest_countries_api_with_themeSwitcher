import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CountryType, searchPropType } from "../../types/types";
import { selectAllCountries, selectErrorMessage, selectStatus } from "../../features/countriesSlice";
import { fetchCountries } from "../../features/countriesSlice";
import CountriesItem from "./CountriesItem";


export default function Countries({ searchTerm, region }: searchPropType): React.ReactElement {

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

    //introducing additional search capability 
    //to enable search by country name, capital ... 
    /*function filterdCountriesData(countries: CountryType[]) {
        return countries.filter((country: CountryType) => {
            if (country.region === region) {
                return searchParam.some((currentParam: string) => {
                    return (country[currentParam as keyof CountryType] as { common: string }).common.toLowerCase().indexOf(searchTerm) === 0;
                })
            } else if (region === 'Filter by region') {
                return country.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0;
            }
        })
    }
    */

    function renderData(countries: CountryType[]) {
        return countries.filter((country: CountryType) => {
            if (country.region === region) {
                return country.name.common.toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) === 0; //match country names that start with the search term
            }
            //when no region is selected show all regions unless a region is selected
            //ensures that all searches match the filtered region by country name
            else if (region === 'All') {
                return country.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0;
            }
            return false;
        })
    }
    return (
        <React.Fragment>
            {loadStatus === 'loading' ?
                <div className="status_box"><h1 className="loading">Loading...</h1></div>
                : loadStatus === 'success' && renderData(sortedCountries).length === 0 ?
                    <div className="status_box">
                        <h1 >No match found 🙄</h1>
                    </div>
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