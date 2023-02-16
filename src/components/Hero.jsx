import React from "react"
import leftTop from "../assets/mobile_SVG/leftTop.svg";
import leftBottom from "../assets/mobile_SVG/leftBottom.svg"
import centreTop from "../assets/mobile_SVG/centerTop.svg"
import centreBottom from "../assets/mobile_SVG/CentreBottom.svg"
import rightTop from "../assets/mobile_SVG/rightTop.svg"
import rightBottom from "../assets/mobile_SVG/rightBottom.svg"


export default function(){

    return(
        <section className="Hero">
            <div className="inner-Hero">
                <h1>hi i'm zach</h1>
                    <h4>I am a <span className="highlight"> Self Taught Developer</span> who is loves to learn and <br/> build
                    things.</h4>
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