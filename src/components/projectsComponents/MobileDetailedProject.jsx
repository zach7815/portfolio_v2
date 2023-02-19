import React from "react";
import mobileProfImg from "/src/images/mobile-profile-Img.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function MobileDetailedProject(){

    return (
        <div className="projectContainer">
        <h3> Dummy Header</h3>
        <p>A weather dashboard that uses React, Node JS, React and three different APIs. The Weather app displays the users current locations current weather and next 5 days weather.</p>
        <h4>Top 3 features</h4>
        <ul>
            <li>feature one</li>
            <li>feature 2</li>
            <li>feature 3</li>
        </ul>
        <img src={mobileProfImg} alt="dummy image"/>
        <h4>Technologies used</h4>
        <div className="technologies">
        <span className="tech">tech one </span>
        <span className="tech">tech two </span>
        <span className="tech">tech three </span>
        <span className="tech">tech four </span>
        <span className="tech">tech five </span>
        </div>
<div className="projectbtn">
<button>Live Site</button>
    <button>  <FontAwesomeIcon icon={faGithub} />Github</button>
</div>



        </div>
    )

}

export default MobileDetailedProject;