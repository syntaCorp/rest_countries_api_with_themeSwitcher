import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCountries, selectErrorMessage, selectStatus } from "../../../features/countriesSlice";
import { fetchCountries } from "../../../features/countriesSlice";
import CountryCard from "./CountryCard";

export function CountriesCollection(): React.ReactElement {
    const dispatch = useDispatch<any>();

    const countries = useSelector(selectAllCountries);
    const loadStatus = useSelector(selectStatus);
    const errorMessage = useSelector(selectErrorMessage);
    console.log(countries)
    console.log(loadStatus)
    console.log(errorMessage)

    useEffect(() => {
        if (loadStatus === 'idle') {
            dispatch(fetchCountries())
        }
    }, [loadStatus, dispatch]);

    console.log(errorMessage)


    return (
        <React.Fragment>
            {loadStatus === 'loading' ? <h1 className="loading">Loading...</h1> :
                countries.map((country: any, index: number) => {
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
            }
        </ React.Fragment>
    );
}