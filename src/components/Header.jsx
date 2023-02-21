import React from "react";
import Navigation from "./Navigation";
import { useTheme} from "./ThemeContext";
import Toggle from "./Toggle";



export default function Header(){
    const darkTheme=useTheme();
    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }


    return(

            <header style={darkStyle}>
            <Navigation/>
            <Toggle/>
            </header>

    )

}