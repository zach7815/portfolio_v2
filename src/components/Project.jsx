import React from "react";
import MobileDetailedProject from "./projectsComponents/MobileDetailedProject";
import SmallProjectCard from "./projectsComponents/SmallProjectCard.jsx"
import {useTheme} from './ThemeContext.jsx'


function Project(){
    const darkTheme = useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }




    return(
        <>
            <section style={darkStyle
            } className="projectSection">
                <h2>Project</h2>
                <MobileDetailedProject/>
                <h3>Other Noteworthy Projects</h3>
                <SmallProjectCard />
            </section>

        </>
    )
}

export default Project