import React from "react";
import SmallGithub from "../JSXicons/githubSmall";
import DocumentIcon from "./documentIcon";
import ExternalLink from "./externalSite";
import {useTheme} from '../ThemeContext.jsx'


function SmallProjectCard(){

    const darkTheme = useTheme();
    const smallCardStyling={
        border:darkTheme?"solid 1px #F2E2E2":"solid 1px #707070",
    }

    const externalSiteSvg={
        fill:darkTheme?"black":"white",
        stroke:darkTheme?"white":"black"
    }
    return (
        <div className="smallProjCard" style={smallCardStyling}>
        <div className="icons">
        <DocumentIcon/>
        <div className="iconsRight">


       <a href="" target="blank"><SmallGithub/></a>
       <a href="" target="blank"><ExternalLink/></a>
        </div>
        </div>

        <h4>Dummy Small Project</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda aliquid eveniet ad ut odit
        vel repudiandae? Magni rem inventore minima? Sit temporibus autem perferendis mollitia, quis placeat saepe alias!</p>
        <div className="technologies smallPtech">
        <span className="tech">tech one </span>
        <span className="tech">tech two </span>
        <span className="tech">tech three </span>
        <span className="tech">tech four </span>
        <span className="tech">tech five </span>
            </div>
        </div>
    )
}

export default SmallProjectCard;