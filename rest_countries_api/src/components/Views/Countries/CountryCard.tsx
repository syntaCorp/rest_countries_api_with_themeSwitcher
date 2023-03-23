import React from "react";
import { CountryType } from "../../../types/types";

export default function CountryCard({name: { common }, population, region, flags: {png, svg, alt}, capital}:CountryType): React.ReactElement {

    return (
        <React.Fragment>
            <div className="country__card" key={common}>
                <div className="flag">
                    <img src={svg} alt={alt} />
                </div>
                    <div className="country__details">
                        <h2 className="country-name">{common}</h2>

                        <span className="country population"><span className="title">Population: </span>{population}</span>

                        <span className="country region"><span className="title">Region: </span>{region}</span>

                        <span className="country capital"><span className="title">Capital: </span>{capital}</span>
                    </div>
            </div>
        </ React.Fragment>
    );
}