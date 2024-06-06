import * as React from "react"
const Contact = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#141718"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M38 34v-3.292a4 4 0 0 0-2.514-3.714l-4.069-1.627a4 4 0 0 0-5.063 1.925L26 28s-5-1-9-5-5-9-5-9l.708-.354a4 4 0 0 0 1.925-5.063l-1.627-4.069A4 4 0 0 0 9.292 2H6a4 4 0 0 0-4 4c0 17.673 14.327 32 32 32a4 4 0 0 0 4-4Z"
    />
  </svg>
)
export default Contact
