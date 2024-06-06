import * as React from "react"
const Close = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
    //   fill="#343839"
      fillRule="evenodd"
      d="M15.442 5.442a.625.625 0 1 0-.884-.884L10 9.116 5.442 4.558a.625.625 0 1 0-.884.884L9.116 10l-4.558 4.558a.625.625 0 1 0 .884.884L10 10.884l4.558 4.558a.625.625 0 1 0 .884-.884L10.884 10l4.558-4.558Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Close
