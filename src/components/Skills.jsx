import React from "react";
import JsSVG from "./JSXicons/JsSVG"
import HTMLlogo from "./JSXicons/HTML"
import CSSLogo from "./JSXicons/CSsSvg"
import Nodelogo from "./JSXicons/NodeSVG"
import SassLogo from "./JSXicons/SassSVG"
import ReactLogo from "./JSXicons/ReactSVG"
import {useTheme} from './ThemeContext.jsx'

function Skills(){
    const darkTheme = useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }
    const svgStyle={
        fill:darkTheme?"#FFF":"#272020",
    }

return (
    <section style={darkStyle} id="skills">
        <h2> Skills</h2>
        <div className="skills" style={svgStyle}>


        {/* skill one */}
        <div className="skill">
        <JsSVG/>
        <h4>JavaScript</h4>
        </div>
        {/* skill 2 */}
        <div className="skill">
        <HTMLlogo/>
        <h4>HTML 5</h4>
        </div>



        <div className="skill">
       <CSSLogo/>
        <h4>CSS</h4>
        </div>

        <div className="skill">
        <Nodelogo style={svgStyle}/>
        <h4>Node JS</h4>
        </div>

        <div className="skill">
       <SassLogo/>
        <h4>Sass</h4>
        </div>

        <div className="skill">
       <ReactLogo/>
        <h4>React</h4>
        </div>
        </div>
    </section>
)


}

export default Skills;