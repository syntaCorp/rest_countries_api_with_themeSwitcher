import React, { useState, useContext } from "react";
import { ThemeContext } from '../../../app/ThemeContext';


export default function Filter({ handleFilterByRegion }: { handleFilterByRegion: any }): React.ReactElement {
    const regions: string[] = ['All','Africa', 'Americas', 'Asia', 'Europe', 'Oceania',];

    //retrieve current theme mode
    const {currentTheme} = useContext(ThemeContext);

    // toogle drop down view mode 
    const [dropDown, setdropDown] = useState(false);
    const [currentRegion, setCurrentRegion] = useState('Filter by region');

    //control drop down display
    const handleDropDown = () => {
        setdropDown(!dropDown);
    }

    const handleFilter = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        //change filter region
        handleFilterByRegion(event.currentTarget.id);

        //set selected region string
        setCurrentRegion(event.currentTarget.id);

        //toogle drop down display on list select
        handleDropDown();
    }


    return (
        <React.Fragment>
            <div className="filter__bar">
                <div>{currentRegion === 'All' ? 'Filter by region' :  currentRegion}</div>
                <svg onClick={() => handleDropDown()} className={`filter__arrow ${!dropDown ? 'rotate' : ''}`} width="25px" height="25px" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.45 8.55L6 5.1L2.55 8.55L1.5 7.5L6 3L10.5 7.5L9.45 8.55Z" 
                    fill={`${currentTheme === 'dark' ? '#FFFFFF': '#000000'}`} />
                </svg>

            </div>
            <div className={`drop__filter ${!dropDown ? 'hidden' : ''}`}>
                <ul className="filter__options">
                    {regions.map((region, index) => <li onClick={(e) => handleFilter(e)} key={region + index}
                        id={region}>{region}</li>)}
                </ul>
            </div>
        </ React.Fragment>
    );
}