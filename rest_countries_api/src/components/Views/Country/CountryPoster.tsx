import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadCountryPoster } from "../../../features/countryPosterslice";
import { selectCountryPoster, selectErrorMessage, selectStatus } from "../../../features/countryPosterslice";


function CountryPoster(): React.ReactElement {
    const dispatch = useDispatch<any>();

    const poster = useSelector(selectCountryPoster);
    const status = useSelector(selectStatus);
    const error = useSelector(selectErrorMessage);

    const { name } = useParams();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadCountryPoster(name!));
        }

    }, [dispatch, name, status]);
    
    const {name:{common, nativeName:{nld: {common:commonNativeName}}}, population,region,  borders, capital, tld, currencies, languages } = poster;


    return (
        <React.Fragment>
            <section className="country__poster">
                <Link to="/"><button>Back</button></Link>
                {/* <CountryPosterData />
                
                    create a separate component to hold the content of the page and pass the data as props to this component. 

                    go to bed good night.. 12:36am
                */}
            
            </section>


        </ React.Fragment>
    );
}

export default CountryPoster;