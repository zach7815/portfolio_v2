import React from "react";
import MobileDetailedProject from "./projectsComponents/MobileDetailedProject";
import SmallProjectCard from "./projectsComponents/SmallProjectCard.jsx"


function Project(){
    return(
        <>
            <section className="projectSection">
                <h2>Project</h2>
                <MobileDetailedProject/>
                <h3>Other Noteworthy Projects</h3>
                <SmallProjectCard/>
            </section>

        </>
    )
}

export default Project