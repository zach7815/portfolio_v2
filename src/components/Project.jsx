import React from "react";
import MobileDetailedProject from "./projectsComponents/MobileDetailedProject";
import SmallProjectCard from "./projectsComponents/SmallProjectCard.jsx"
import {useTheme} from './ThemeContext.jsx'
import SmallProject from '/ProjectInfo/SmallProject.json'
import LargeProject from '/ProjectInfo/LargeProject.json'


function Project(){
    const darkTheme = useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }




    return(
        <div>
            <section style={darkStyle } className="projectSection" id="projects">
                <h2>Projects</h2>
                {LargeProject.map(project=>{

                   return(<MobileDetailedProject
                    key={project.key}
                    imagesrc={project.imagesrc}
                    imageAlt={project.imageAlt}
                    header={project.header}
                    description={project.description}
                    topFeatures={project.topFeatures}
                    technologies={project.technologies}
                    githubURL={project.githubURL}
                    liveURL={project.liveURL||null}
                   />)
                })}


                <h3>Other Noteworthy Projects</h3>
                <div className="smallPContainer">
               {SmallProject.map(project=>{
                return(
                <SmallProjectCard
                    key={project.ke
                    }
                    githubURL={project.githubURL}
                    liveLink={project.liveLink}
                    title={project.title}
                    about={project.about}
                    technologies={project.technologies}
                />
                )
               })}
                </div>
            </section>

        </div>
    )
}

export default Project