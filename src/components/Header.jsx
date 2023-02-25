import React from "react";
import MobileNavigation from "./MobileNavigation";
import { useTheme} from "./ThemeContext";
import Toggle from "./Toggle";
import DesktopNavigation from "./DeskTop Navigation";



export default function Header(){
    const darkTheme=useTheme();
    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }


    return(

            <header style={darkStyle}>
            <MobileNavigation/>
            <DesktopNavigation />
            <Toggle/>
            </header>

    )

}