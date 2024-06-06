import * as React from "react"
const Lock = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#141718"
      strokeLinecap="round"
      strokeWidth={2.5}
      d="M32 16H16m16 0a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V24a8 8 0 0 1 8-8m16 0v-4a8 8 0 1 0-16 0v4m8 16v-4"
    />
  </svg>
)
export default Lock

