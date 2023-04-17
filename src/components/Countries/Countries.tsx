import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountryType } from "../../types/types";
import { selectAllCountries, selectErrorMessage, selectStatus } from "../../features/countriesSlice";
import { fetchCountries } from "../../features/countriesSlice";

import CountriesItem from "./CountriesItem";


type PropType = {
    searchTerm: string;
    region: string;
}

export default function Countries({ searchTerm, region }: PropType): React.ReactElement {
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
    const sortedCountries = [...countries];
    sortedCountries.sort((item: CountryType, _item: CountryType) => item.name.common.localeCompare(_item.name.common));

    function renderData(countries: CountryType[]) {
        return countries.filter((country: CountryType) => {
            if (searchTerm !== '') {
                // return country.name.common.toLowerCase()
                //     .includes(searchTerm.toLowerCase())
                return country.name.common.toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) === 0;
            }
            else if (region !== '') {
                if(region === 'Filter by region') return country.name.common.toLowerCase();
                return country.region.toLowerCase() === region.toLowerCase();
            }

            return country.name.common.toLowerCase()
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