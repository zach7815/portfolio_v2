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
            <section style={darkStyle } className="projectSection" id="projects">
                <h2>Projects</h2>
                <MobileDetailedProject/>
                <h3>Other Noteworthy Projects</h3>
                <div className="smallPContainer">
                <SmallProjectCard />
                <SmallProjectCard />
                <SmallProjectCard />
                </div>
            </section>

        </>
    )
}

export default Project