import React from "react"
import {useThemeUpdate} from './ThemeContext.jsx'

export default function Toggle(){


    const toggleTheme = useThemeUpdate();
    return(
        <input type="checkbox"
         name="toggle" id="toggle"
         className="cm-toggle"
         onClick={toggleTheme}

          />
    )
}