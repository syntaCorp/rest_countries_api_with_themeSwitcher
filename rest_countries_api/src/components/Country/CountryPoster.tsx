import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadCountryPoster } from "../../features/countryPosterslice";
import { selectCountryPoster, selectErrorMessage, selectStatus } from "../../features/countryPosterslice";
import { CountryPosterItem } from "./CountryPosterItem";


function CountryPoster(): React.ReactElement {
    const dispatch = useDispatch<any>();

    const poster = useSelector(selectCountryPoster);
    const status = useSelector(selectStatus);
    const error = useSelector(selectErrorMessage);

    const { name } = useParams();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadCountryPoster(name!))
        }

    }, [dispatch, name, status]);


    // const {currency} = currencies;
    // console.log(currency);


    return (
        <React.Fragment>
            {
                status === 'loading' ? <h1>Loading...</h1>
                    : status === 'success' ?
                        <><Link to="/"><button className="back__button">&larr; Back</button></Link>
                            {poster.map((item: any) => {
                                console.log("item currencies:", item.currencies)

                                return (
                                    <CountryPosterItem
                                        key={`${item.name.common}_${item.name.population}`}
                                        commonName={item.name.common}
                                        nativeName={item.name.nativeName}
                                        population={item.population}
                                        languages={item.languages}
                                        region={item.region}
                                        subregion={item.subregion}
                                        currencies={item.currencies}
                                        borders={item.borders}
                                        capital={item.capital[0]}
                                        tld={item.tld}
                                        flags={item.flags}
                                        alt={item.flags.alt ? item.flags.alt : item.name.common}
                                    />
                                )
                            })}
                        </>
                        : <> <Link to="/"><button>&larr; Back</button></Link><h1 className="loading">{error}</h1></>
            }
        </ React.Fragment>
    );
}

export default CountryPoster;