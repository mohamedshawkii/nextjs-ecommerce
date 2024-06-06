import * as React from "react"
const EmailIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#141718"
      fillRule="evenodd"
      d="M4.077 6.53a1.25 1.25 0 0 1 1.196-.884h14c.563 0 1.04.373 1.195.885l-8.195 5.464L4.077 6.53Zm-1.554.352v10.014a2.75 2.75 0 0 0 2.75 2.75h14a2.75 2.75 0 0 0 2.75-2.75v-9.99m-1.5 1.391v8.599c0 .69-.56 1.25-1.25 1.25h-14c-.69 0-1.25-.56-1.25-1.25V8.297l7.834 5.223a.75.75 0 0 0 .832 0l7.834-5.223Zm1.5-1.415a2.75 2.75 0 0 0-2.75-2.736h-14a2.75 2.75 0 0 0-2.75 2.736"
      clipRule="evenodd"
    />
  </svg>
)
export default EmailIcon
