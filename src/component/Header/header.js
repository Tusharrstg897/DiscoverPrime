import React from "react";
import "./header.css";

function Header(){
    return <div>
        <span onClick={()=>window.scroll(0,0)} className="header" >Discover<span className="prime">Prime</span></span>
    </div>
}

export default Header;