import React from "react";
import JsSVG from "./JSXicons/JsSVG"
import HTMLlogo from "./JSXicons/HTML"
import CSSLogo from "./JSXicons/CSsSvg"
import Nodelogo from "./JSXicons/NodeSVG"
import SassLogo from "./JSXicons/SassSVG"
import ReactLogo from "./JSXicons/ReactSVG"

function Skills(){

return (
    <section>
        <h2> Skills</h2>
        <div className="skills">


        {/* skill one */}
        <div className="skill">
        <JsSVG height="75px" width="75px" />
        <h4>Javascript</h4>
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
        <Nodelogo/>
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