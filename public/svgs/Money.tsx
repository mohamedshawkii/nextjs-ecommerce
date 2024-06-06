import * as React from "react"
const Money = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <rect
      width={40}
      height={32}
      x={4}
      y={8}
      stroke="#141718"
      strokeWidth={2.5}
      rx={4}
    />
    <circle
      cx={4}
      cy={4}
      r={4}
      stroke="#141718"
      strokeWidth={2.5}
      transform="matrix(1 0 0 -1 20 28)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="#141718"
      transform="matrix(1 0 0 -1 34 26)"
    />
    <circle
      cx={2}
      cy={2}
      r={2}
      fill="#141718"
      transform="matrix(1 0 0 -1 10 26)"
    />
  </svg>
)
export default Money
