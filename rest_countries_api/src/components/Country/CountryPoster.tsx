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

    const { name } = useParams<string>();

    useEffect(() => {
        // if (status === 'idle') {}
        dispatch(loadCountryPoster(name!));

    }, [dispatch, name]);

    return (
        <React.Fragment>
            {
                status === 'loading' ? <h1 className="loading">Loading...</h1>
                    : status === 'success' ?
                        <><Link to="/"><button className="back__button">&larr; Back</button></Link>
                            {[poster].map((item: any) => {
                                return (
                                    <CountryPosterItem
                                        key={`${item.name.official}_${item.population}`}
                                        commonName={item.name.common}
                                        officialName={item.name.official }
                                        population={item.population}
                                        languages={item.languages}
                                        region={item.region}
                                        subregion={item.subregion}
                                        currencies={item.currencies}
                                        borders={item.borders}
                                        capital={item.capital ? item.capital[0] : "N/A"}
                                        tld={item.tld}
                                        flags={item.flags}
                                        alt={item.flags.alt ? item.flags.alt : `Flag of ${item.name.common}`}
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