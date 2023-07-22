import React from "react";

function Navbar(){
    return(
        <>
            <div className="navbar">
                <img src="https://avatars.githubusercontent.com/u/56528673?v=4" className="img1" alt="logo" />
                <div className="search_bar">Search</div>
                <div className="menu">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/menu--v3.png" alt="menu"/>
                </div>
            </div>
        
        </>
    );
}

export default Navbar;