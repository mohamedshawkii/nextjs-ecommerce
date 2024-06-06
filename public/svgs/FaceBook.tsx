import * as React from "react"
const FaceBook = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 3h-3a5 5 0 0 0-5 5v2H6v4h4v7h4v-7h4v-4h-4V8a1 1 0 0 1 1-1h3V3Z"
    />
  </svg>
)
export default FaceBook

