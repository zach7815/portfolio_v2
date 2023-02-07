
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web'
import { useState } from "react";

function Navigation(){
    const [showMenu, setShowMenu]=useState(false);

    let menu;
    let menuMask;

    if(showMenu===true){
        menu= <div className="menu">
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