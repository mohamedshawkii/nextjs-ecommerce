import * as React from "react"
const Instagram = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="#FEFEFE"
      strokeWidth={1.5}
      rx={4}
    />
    <circle cx={18} cy={6} r={1} fill="#FEFEFE" />
    <circle cx={12} cy={12} r={5} stroke="#FEFEFE" strokeWidth={1.5} />
  </svg>
)
export default Instagram

