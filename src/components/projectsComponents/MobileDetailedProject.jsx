import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {useTheme} from '../ThemeContext'


function MobileDetailedProject({imagesrc, imageAlt, header,
    description, topFeatures, technologies,
    githubURL, liveURL
}){
    const darkTheme = useTheme();

    const colorStyling={
        color:darkTheme?"#E7D7D7":"#191717",
    }
    const bigCardStyling={
        boxShadow:darkTheme?"none":"6px 6px 29px #bfbfbfeb",
        border:darkTheme?"solid 1px #F2E2E2":"none",
    }




    return (
        <div className="projectContainer" style={bigCardStyling}>
        <div className="projDetail">
        <h3> {header}</h3>
        <p>{description}</p>
        <h4>Top 3 features</h4>
       {topFeatures.map(feature=>{
        return(
            <ul>
                <li>{feature}</li>
            </ul>
        )
       })}
        </div>
        <img src={imagesrc} alt={imageAlt}/>
        <div className="stack">
        <h4>Technologies used</h4>
        <div className="technologies">

        {technologies.map(tech=>{
           return <span className="tech">{tech}</span>
        })}
        </div>
        </div>
<div className="projectbtn" style={colorStyling}>
<button><a href={liveURL}  target="_blank">Live Site</a></button>
    <button>  <a href={githubURL} target="_blank"><FontAwesomeIcon icon={faGithub} /> Github </a></button>
</div>



        </div>
    )

}

export default MobileDetailedProject;