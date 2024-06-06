import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
export const CTAWithUnderLine = () => {
    return (
        <button className='
            flex flex-row justify-center items-center gap-2
            font-semibold text-base text-[#FFAB00]
            hover:text-[#FEFEFE] border-b-[2px] border-[#FFAB00] hover:border-[#FEFEFE]'>
            <p className='pb-1'>Shopping Now</p>
            <FaArrowRight/>
        </button>
    )
}