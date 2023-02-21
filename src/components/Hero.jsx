import React from "react"
import leftTop from "../assets/mobile_SVG/leftTop.svg";
import leftBottom from "../assets/mobile_SVG/leftBottom.svg"
import centreTop from "../assets/mobile_SVG/centerTop.svg"
import centreBottom from "../assets/mobile_SVG/CentreBottom.svg"
import rightTop from "../assets/mobile_SVG/rightTop.svg"
import rightBottom from "../assets/mobile_SVG/rightBottom.svg"

import { useTheme } from "./ThemeContext";


export default function(){
    const darkTheme=useTheme();
    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
    }

    return(
        <section className="Hero" style={darkStyle}>
            <div className="inner-Hero">
                <h1>hi i'm zach</h1>
                    <p>I am a <span className="highlight"> Self Taught Developer</span> who is loves to learn and <br/> build
                    things.</p>
                    <img src={leftTop} alt="Your SVG" />
                    <img src={leftBottom} alt="Your SVG" />
                    <img src={centreTop} alt="Your SVG" />
                    <img src={centreBottom} alt="Your SVG" />
                    <img src={rightTop} alt="Your SVG" />
                    <img src={rightBottom} alt="Your SVG" />
            </div>
        </section>
    )

}