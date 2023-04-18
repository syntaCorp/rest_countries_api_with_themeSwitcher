import React, { EventHandler, useState } from "react";
import SearchBar from "./Search/SearchBar";
import Countries from "../Countries/Countries";


export default function Home(): React.ReactElement {
    const [searchTerm, setSearchText] = useState<string>('');
    const [filterByRegion, setFilterByRegion] = useState<string>('All');


    //search bar text
    const handleSearchTerm = (term: string) => {
        setSearchText(term);
    }

    //handle menu items selection
    const handleFilterByRegion: EventHandler<any> = (filterTerm: string) => {
        // const filterValue: string = event.currentTarget.id;
        setFilterByRegion(filterTerm);
    }

    return (
        <React.Fragment>
          <main>
          <SearchBar
                handleSearchTerm={handleSearchTerm}
                searchTerm={searchTerm}
                handleFilterByRegion={handleFilterByRegion}
            />

            <div className="countries__catalogue">
                <Countries searchTerm={searchTerm}  region={filterByRegion} />
            </div>
          </main>
        </ React.Fragment>
    );
}