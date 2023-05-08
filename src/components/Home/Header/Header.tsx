import { Link } from 'react-router-dom';
import React, { useContext, } from "react";

import '../../../styles/App.css';
import { ThemeContext } from "../../../app/ThemeContext"

function Header(): React.ReactElement {
    const { currentTheme, switchTheme } = useContext(ThemeContext);

    return (
        <React.Fragment>
            <header className="header">
                <div className="header-wrap">
                    <div>
                        <Link to="/">
                            <h1 className='header__title'>Where in the World?</h1>
                        </Link>
                    </div>
                    <div className="toogle__theme" onClick={() => switchTheme(currentTheme)}>
                        <svg className={`${currentTheme === 'light' ? 'dark__mode-icon' : 'dark__mode-icon--hidden'}`} width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"></path></g>
                        </svg>
                        <svg className={`${currentTheme === 'dark' ? 'light__mode-icon' : 'light__mode-icon--hidden'}`} fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 446.871 446.871" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="223.529" cy="233.414" r="99.343"></circle> <path d="M446.871,286.247l-100.517-78.137l56.634-115.218l-120.904,29.806L229.245,6.977L175.46,118.05L51.969,83.31 l51.298,113.56L0,273.168l123.234,34.494c0,0-18.082-28.153-22.613-52.489c-4.104-22.105,1.851-52.36,3.001-57.778 c0.344-0.788,12.78-28.866,28.159-47.228c15.618-18.643,44.647-31.832,44.647-31.832l-0.298-0.094 c4.279-1.033,30.729-7.141,53.102-7.141c20.891,0,44.969,9.243,51.508,11.922c0.023,0.012,25.689,15.829,40.87,34.845 c15.168,18.999,23.961,51.846,23.961,51.846l0.292-0.636c0.97,6.521,4.355,32.958-0.433,53.558 c-5.534,23.681-25.853,50.935-25.853,50.935l0.187-0.022c-4.133,4.133-23.751,23.271-43.205,32.777 c-21.859,10.684-55.816,12.109-55.816,12.109l101.532,81.459l-1.623-126.545L446.871,286.247z"></path> <path d="M123.234,307.382l2.399,130.152l95.11-79.1c0,0-30.285-5.933-52.483-15.928 C146.069,332.558,123.234,307.382,123.234,307.382z"></path> </g> </g> </g></svg>

                        <button className="toggle__mode__btn">
                            {currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        </button>
                    </div>
                </div>
            </header>
        </ React.Fragment>
    );
}


export default Header;