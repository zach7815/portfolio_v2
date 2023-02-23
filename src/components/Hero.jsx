import React from "react"
import BottomLeft from "./heroSVGs/BottomLeft";
import BottomTop from "./heroSVGs/TopLeft";
import CentreTop from "./heroSVGs/CentreTop";
import CentreBottom from "./heroSVGs/CentreBottom";
import TopRight from "./heroSVGs/TopRight";
import BottomRight from "./heroSVGs/BottomRight";
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
                    <p>I am a <span className="highlight"> Self Taught Developer</span> who is loves to learn and build
                    things.</p>
                   <BottomTop />
                   <BottomLeft />
                    <CentreTop />
                   <CentreBottom />
                    <TopRight />
                    <BottomRight />
            </div>
        </section>
    )

}