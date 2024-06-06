import * as React from "react"
const AngleBracket = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={6}
    fill="none"
    {...props}
  >
    <path
    //   stroke="#141718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="m1.204.75 4.5 4.5 4.5-4.5"
    />
  </svg>
)
export default AngleBracket