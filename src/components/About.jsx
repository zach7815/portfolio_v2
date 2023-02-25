import React from "react";
import profileImg from "../images/desktop-profile-Img.png"
import mobileProfImg from "../images/mobile-profile-Img.png"
import  {useTheme} from "./ThemeContext"


export default function About(){
    const darkTheme=useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }

    return(
        <>
            <section className="about" style={darkStyle}  id="about">
                <h2>About</h2>
                <div className="aboutContents">
                <div className="aboutText">
                <p className="mainText">
                Born in the UK, I am now living and working in Hong Kong.
                My interest in  <span className="highlight">Web development came in 2017 </span> where as a teacher we had to manage our own class page on the website.
                I enjoyed learning the limits of what you could do with these pages.
                </p>
                <p className="mainText">
                In my last job in the UK I was in charge of the charity’s website. It was a WordPress and I enjoyed learning about the technical limits of the site, finding bugs and working with external developers to troubleshoot them. At the same time in my time off I bought a web development course on Udemy and haven’t looked back since.
                </p>
                </div>
                <picture>
                <source srcSet={mobileProfImg}
            media="(min-width: 200px)"/>
                <img className="profileImage" id="profImg" src={profileImg} alt="An image of Zach petting a dog"/>

                    </picture>
                    </div>
                        </section>
        </>
    )

};