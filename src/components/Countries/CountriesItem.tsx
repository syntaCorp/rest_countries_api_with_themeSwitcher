import React from "react";
import { CountryType } from "../../types/types";
import { Link } from "react-router-dom";

export default function CountriesItem({name: { common }, population, region, flags: { svg, alt }, capital }: CountryType): React.ReactElement {

    return (
        <React.Fragment>
        <Link to={`/country/${common}`}>
          <div className="country__card" key={`${population}`}>
                <div className="flag">
                    <img src={svg} alt={alt} />
                </div>
                <div className="country__details">
                    <h2 className="country-name">{common}</h2>
                    <span className="country population"><span className="title">Population: </span>{population.toLocaleString()}</span>
                    <span className="country region"><span className="title">Region: </span>{region}</span>
                    <span className="country capital"><span className="title">Capital: </span>{capital}</span>
                </div>
            </div>
        </Link>
        </ React.Fragment>
    );
}