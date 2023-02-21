import React from "react";
import {useTheme} from '../ThemeContext'

function Contact(){

    const darkTheme = useTheme();

    const darkStyle={
        backgroundColor: darkTheme?"#272020": "#FFF",
        color:darkTheme?"#E7D7D7":"#191717",
    }

    return(
        <div className="contact" style={darkStyle}>
        <h5>What's Next?</h5>
        <h3>Get In Touch</h3>
        <p> I am open to new opportunities and I am happy to hear your ideas. Feel free to to ask me a question. Or if you just want to say hi that fine as well. I’ll try to get back to you as soon as possible!
</p>
<a href="mailto:"> Say Hello</a>

        </div>
    )
}

export default Contact;