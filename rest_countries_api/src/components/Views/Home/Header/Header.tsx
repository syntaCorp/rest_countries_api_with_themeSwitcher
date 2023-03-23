import '../../../../styles/App.css';

import React from "react";

function Header(): React.ReactElement {

    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <a href="#">
                        <h1>Where in the World?</h1>
                    </a>
                </div>
                <div className="toogle__icon">
                    <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"></path></g>
                    </svg>
                    <button className="toggle__mode__btn">
                        Dark Mode
                    </button>
                </div>
            </header>
        </ React.Fragment>
    );
}


export default Header;