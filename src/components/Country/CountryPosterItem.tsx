import React from "react";
import { flagType } from '../../types/types';
import { Link } from "react-router-dom";

export function CountryPosterItem(
    { commonName, officialName, population, capital, region, languages, subregion, borders, currencies, tld, flags: { svg }, alt,}: {
        commonName: string, officialName: string, population: number, capital: string, region: string, subregion: string, borders: string[],
        languages: Object, currencies: Object, tld: string[], flags: flagType, alt: string,
    }
): React.ReactElement {

    // test for nullish (undefined | null )
    const availableCurrency = (currencies && Object.values(currencies)[0]) || '';
    const { name: currencyName } = availableCurrency;

    const countryLanguages = (languages && Object.values(languages)) || [];

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
                            <p><span>Sub Region: </span>{subregion}</p>
                            <p><span>Capital: </span>{capital}</p>
                        </div>

                        <div>
                            <p><span>Top level Domain: </span>{tld[0]}</p>
                            <p><span>Currencies: </span>{currencyName ? currencyName : "N/A"}</p>
                            <p><span>Languages: </span>{countryLanguages.length ? countryLanguages.join(', ') : "N/A"}</p>
                        </div>
                    </div>

                    <div className="border__countries">
                        <h2>Border Countries:</h2>
                        <div className="border__countries-list">
                            <ul> {borders ? borders.map((border, index) => <Link to={`/country/code/${border}`}><li key={`${border}-${index}`} className="border__country-list">{border}</li></Link>) : "N/A"}</ul>
                        </div>
                    </div>
                </div>
            </section>
        </ React.Fragment>
    );
}