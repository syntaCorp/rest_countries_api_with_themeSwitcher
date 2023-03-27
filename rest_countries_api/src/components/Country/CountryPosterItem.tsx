import React from "react";
import { flagType } from '../../types/types';

export function CountryPosterItem(
    {   commonName, nativeName, population, capital, region, languages, subregion, borders, currencies, tld, flags: { svg }, alt }: {
        commonName: string, nativeName: [], population: number, capital: string, region: string, subregion: string, borders: string[],
        languages: Object, currencies: Object, tld: string[], flags: flagType, alt: string
    }
    ): React.ReactElement {

    const { common: commonNativeName } = Object.values(nativeName)[0];
    const { name: currencyName } = Object.values(currencies)[0];
    const countryLanguages = Object.values(languages);

    return (
        <React.Fragment>
            <section className="country__poster">
                <div className="poster-img">
                    <img src={svg} alt="" />
                </div>

                <div className="poster__details">
                    <h1>{commonName}</h1>
                    <div>
                        <p>Native Name: {commonNativeName}</p>
                        <p>Population: {population.toLocaleString()}</p>
                        <p>Region: {region}</p>
                        <p>Sub Region: {subregion}</p>
                        <p>Capital: {capital}</p>
                    </div>
                    <div>
                        <p>Top level Domain: {tld}</p>
                        <p>Currencies: {currencyName}</p>
                        <p>Languages: {countryLanguages.map((language: string, index: number) => <ul><li key={language + index}>{language}</li></ul>)}</p>
                    </div>
                    <p>Border Countries: {borders ?
                        borders.map((border: string, index: number) => <ul><li key={border + index} className="border__country">{border}</li></ul>) : "N/A"}   
                    </p>
                </div>
            </section>
        </ React.Fragment>



    );
}