import React from "react";
import SearchBar from "./Search/SearchBar";
import Countries from "../Countries/Countries";


export default function Home(): React.ReactElement {

    return (
        <React.Fragment>
            <SearchBar />
            <div className="countries__catalogue">
                <Countries />
            </div>
        </ React.Fragment>
    );
}