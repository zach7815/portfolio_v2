import * as React from "react"
import { useTheme } from "../ThemeContext"

function ExternalLink(props) {
const darkTheme=useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24.393}
      height={23.906}
      viewBox="0 0 24.393 23.906"
      {...props}
    >
      <g
        data-name="8666682_external_link_icon"
        transform="translate(-2 -1.567)"
        fill={darkTheme?"black":"white"}
        stroke={darkTheme?"white":"black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 19"
          d="M20.907 14.923v7.163a2.388 2.388 0 01-2.388 2.388H5.388A2.388 2.388 0 013 22.085V8.954a2.388 2.388 0 012.388-2.388h7.162"
        />
        <path data-name="Path 20" d="M17.325 2.984h7.163v7.163" />
        <path
          data-name="Line 1"
          transform="translate(10.98 2.98)"
          d="M0 13L14 0"
        />
      </g>
    </svg>
  )
}

export default ExternalLink
