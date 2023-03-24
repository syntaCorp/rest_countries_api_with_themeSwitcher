import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCountries, selectErrorMessage, selectStatus } from "../../../features/countriesSlice";
import { fetchCountries } from "../../../features/countriesSlice";
import CountryCard from "./CountryCard";
import { CountryType } from "../../../types/types";

export function CountriesCollection(): React.ReactElement {
    const dispatch = useDispatch<any>();

    const countries = useSelector(selectAllCountries);
    const loadStatus = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        if (loadStatus === 'idle') {
            dispatch(fetchCountries())
        }
    }, [loadStatus, dispatch]);


    //alphabetic sort 
    const sortedCountries = [...countries];
    sortedCountries.sort((item: CountryType, _item: CountryType) => item.name.common.localeCompare(_item.name.common));


    return (
        <React.Fragment>
            {loadStatus === 'loading' ?
                <h1 className="loading">Loading...</h1>
                : loadStatus === 'success' ?
                    sortedCountries.map((country: any, index: number) => {
                        return (<CountryCard
                            key={country.name + index}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flags={country.flags}
                            alt={country.alt}
                        />)
                    })
                    : <h1 className="loading">{errorMessage}</h1>
            }
        </ React.Fragment>
    );
}