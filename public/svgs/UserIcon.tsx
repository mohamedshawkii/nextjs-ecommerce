import * as React from "react"
const UserIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141718"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.559 19.549a7.003 7.003 0 0 0-13.118 0m13.118 0A9.976 9.976 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.977 9.977 0 0 0 3.441 7.549m13.118 0A9.961 9.961 0 0 1 12 22a9.961 9.961 0 0 1-6.559-2.451M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)
export default UserIcon
