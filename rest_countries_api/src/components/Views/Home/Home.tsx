import React from "react";
import SearchBar from "./Search/SearchBar";
import { CountriesCollection } from "../Countries/CountriesCollection";


export default function Home(): React.ReactElement {

    return (
        <React.Fragment>
            <SearchBar />
            <div className="countries__catalogue">
                <CountriesCollection />
            </div>
        </ React.Fragment>
    );
}