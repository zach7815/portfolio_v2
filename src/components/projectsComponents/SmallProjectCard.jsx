import React from "react";
import SmallGithub from "../JSXicons/githubSmall";
import DocumentIcon from "./documentIcon";
import ExternalLink from "./externalSite";
import {useTheme} from '../ThemeContext.jsx'


function SmallProjectCard({githubURL, liveLink, title, about, technologies}){

    const darkTheme = useTheme();
    const smallCardStyling={
        border:darkTheme?"solid 1px #F2E2E2":"solid 1px #707070",
    }

    const svgStyling={
        fill:darkTheme?"white":"black",
    }
    return (
        <div className="smallProjCard" style={smallCardStyling}>
        <div className="icons">
        <DocumentIcon style={svgStyling} className="docIcon"/>
        <div className="iconsRight">


       <a href={githubURL} target="_blank"><SmallGithub style={svgStyling}/></a>
       <a href={liveLink} target="_blank"><ExternalLink/></a>
        </div>
        </div>

        <h4>{title}</h4>
        <p>{about}</p>
        <div className="technologies smallPtech">

        {technologies.map(tech=>{
            return(
                <span className="tech">{tech}</span>
            )
        })}
            </div>
        </div>
    )
}

export default SmallProjectCard;