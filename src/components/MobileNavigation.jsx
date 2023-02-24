
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

function Navigation(){
    const [showMenu, setShowMenu]=useState(false);

    const darkTheme=useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }

    let menu;
    let menuMask;

    if(showMenu===true){
        menu= <div className="menu" style={darkStyle}>
        <ul>
        <li>home</li>
        <li>about</li>
        <li>skills</li>
        <li>projects</li>
        <li>contact</li>
    </ul>
        <button className="download">Resumé</button>
    </div>

    menuMask= <div className="menuMask"></div>
    }


    return (
        <>
        <FontAwesomeIcon
       icon={faBars}
       className="mobile-menu"
       size="2x"
       onClick={()=>{setShowMenu(!showMenu)}}
       />
        <nav className="nav">

       {menuMask}
       {menu}
       </nav>
        </>

    )
};

export default Navigation;