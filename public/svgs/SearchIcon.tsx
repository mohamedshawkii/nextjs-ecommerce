import * as React from "react"
const SearchIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#141718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.5 18.5 22 22m-1-10.5a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0Z"
    />
  </svg>
)
export default SearchIcon

