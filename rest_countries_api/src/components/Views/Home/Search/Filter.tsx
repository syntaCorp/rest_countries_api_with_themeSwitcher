import React from "react";

export default function Filter(): React.ReactElement {
    const regions: string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <React.Fragment>
            <div className="filter__bar">
                <div>Filter by region</div>
                <svg className="filter__arrow" width="16px" height="16px" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.45 8.55L6 5.1L2.55 8.55L1.5 7.5L6 3L10.5 7.5L9.45 8.55Z" fill="black" />
                </svg>

            </div>
            <div className="drop__filter hidden">
                <ul className="filter__options">
                    {regions.map(region => <li key={region} id={region.toLocaleLowerCase()}>{region}</li>)}
                </ul>
            </div>
        </ React.Fragment>
    );
}