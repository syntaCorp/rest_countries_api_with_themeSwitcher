import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import SearchBar from "./Search/SearchBar";
import Countries from "../Countries/Countries";


export default function Home(): React.ReactElement {
    const [searchTerm, setSearchText] = useState<string>('');

    const handleSearchTerm: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value: string = event.currentTarget.value;
        setSearchText(value);
    }

    return (
        <React.Fragment>
            <SearchBar handleSearchTerm={handleSearchTerm} searchTerm={searchTerm} />
            <div className="countries__catalogue">
                <Countries searchTerm={searchTerm} />
            </div>
        </ React.Fragment>
    );
}