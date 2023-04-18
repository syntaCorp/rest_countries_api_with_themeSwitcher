import React from "react";
import { useSelector } from "react-redux";
import { CountryType, flagType } from '../../types/types';
import { Link } from "react-router-dom";
import { selectAllCountries } from "../../features/countriesSlice";

export function CountryPosterItem(
    { commonName, officialName, population, capital, region, languages, subregion, borders, currencies, tld, flags: { svg }, alt,}: {
        commonName: string, officialName: string, population: number, capital: string, region: string, subregion: string, borders: string[],
        languages: Object, currencies: Object, tld: string[], flags: flagType, alt: string,
    }
): React.ReactElement {

    // retrieve currency properties
    // test for nullish (undefined | null )
    const availableCurrency = (currencies && Object.values(currencies)[0]) || '';
    const { name: currencyName } = availableCurrency;

    //retrive languages properties
    const countryLanguages = (languages && Object.values(languages)) || [];

    //get countries border names by matching cca3 code
    const borderCountriesNames = useSelector(selectAllCountries).filter((country: CountryType) => {
        return borders?.includes(country.cca3);
      });


    return (
        <React.Fragment>
            <section className="country__poster">
                <div className="poster-img">
                    <img src={svg} alt={alt} />
                </div>

                <div className="poster__details">
                    <h1>{commonName}</h1>

                    <div className="country__poster-data">
                        <div>
                            <p><span>Native Name: </span>{officialName}</p>
                            <p><span>Population: </span>{population.toLocaleString()}</p>
                            <p><span>Region: </span>{region}</p>
                            <p><span>Sub Region: </span>{subregion ? subregion : 'N/A'}</p>
                            <p><span>Capital: </span>{capital}</p>
                        </div>

                        <div>
                            <p><span>Top level Domain: </span>{tld ? tld[0] : 'n/a'}</p>
                            <p><span>Currencies: </span>{currencyName ? currencyName : "N/A"}</p>
                            <p><span>Languages: </span>{countryLanguages.length ? countryLanguages.join(', ') : "N/A"}</p>
                        </div>
                    </div>

                    <div className="border__countries">
                        <h2>Border Countries:</h2>
                        <div className="border__countries-list">
                            <ul> {borders ? borderCountriesNames.map((country:CountryType, index:number) => 
                            <Link key={`${country.cca3}${index}`} to={`/country/${country.name.common}`}>
                                <li className="border__country-list">{country.name.common}</li>
                            </Link>) : "N/A"}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </ React.Fragment>
    );
}