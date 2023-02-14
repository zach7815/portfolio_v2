import * as React from "react"

function SassSVG(props) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={64} cy={64} r={50} fill="#c69" />
      <path
        d="M90.9 41.8c-.6-2.4-2.3-4.4-4.9-5.8-5.1-2.7-13.3-2.8-20.8-.1-4.5 1.6-13 5.2-19.4 11.1-6.4 6-7.4 11.3-6.9 13.4 1.1 5.8 7.2 9.9 12 13.3 1.3.9 2.5 1.7 3.4 2.5-2.7 1.4-10 5.5-12 9.8-1.5 3.4-.8 5.9-.2 7 .6 1.3 1.6 2.3 2.6 2.6 1 .3 2.1.4 3.2.4 4.3 0 8.5-2.3 11.1-6.2 2.6-3.9 2.8-9.1 1.6-12.3 1.7-.4 3.5-.4 5.5-.2 3.9.5 5.8 2 6.7 3.2 1 1.3 1.2 2.6 1.1 3.4-.2 1.5-1.4 2.4-2 2.8-.5.3-.9.6-.8 1.2.2.8 1 .7 1.3.7.9-.2 4.1-1.8 4.3-5.4.1-2.2-.8-4.4-2.5-6.2-2.2-2.3-5.5-3.5-9.3-3.4-2.8 0-4.7.3-6.2.8l-.1-.1c-1.4-1.5-3.3-2.9-5-4.3-4-3-7.7-5.9-7.5-10.2.3-5.4 5.6-10.7 15.9-15.8 9.1-4.5 16.5-4.7 20.4-3.3 1.6.6 2.7 1.4 3.1 2.3.8 1.7.5 3.9-.9 6.3-2.3 4-8.1 9-17 10-5.4.6-7.7-1.8-7.8-1.9-.6-.7-1-1.1-1.7-.7-.8.4-.4 1.5-.2 1.9.4 1.1 2.1 3 5 4 2.3.8 8.2 1.3 15.5-1.5 8.4-3.4 14.2-12.4 12.5-19.3zM56.4 84.4c-.1.2-.1.4-.2.6-.1.2-.2.4-.2.6-.4.9-1 1.8-1.8 2.6-2.3 2.5-5.4 3.2-6.4 2.6-.3-.2-.4-.5-.5-.9-.2-1.2.5-3.6 2.6-5.7 2.5-2.6 6-4.5 6.8-4.9.3 1.8.2 3.5-.3 5.1z"
        fill="#fff"
      />
    </svg>
  )
}

export default SassSVG