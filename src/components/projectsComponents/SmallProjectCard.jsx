import React from "react";
import SmallGithub from "../JSXicons/githubSmall";
import DocumentIcon from "./documentIcon";
import ExternalLink from "./externalSite";

function SmallProjectCard(){
    return (
        <div className="smallProjCard">
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