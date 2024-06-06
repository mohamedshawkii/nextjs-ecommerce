import * as React from "react"
const Youtube = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={20}
      height={18}
      x={2}
      y={3}
      stroke="#FEFEFE"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10.447 8.724 4.764 2.382a1 1 0 0 1 0 1.788l-4.764 2.382A1 1 0 0 1 9 14.382V9.618a1 1 0 0 1 1.447-.894Z"
    />
  </svg>
)
export default Youtube

