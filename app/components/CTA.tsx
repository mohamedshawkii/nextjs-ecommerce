import Link from 'next/link'
import React from 'react'
type muType = {
    title: string
}

function CTA({ title }: muType) {
    return (

            <button className=' text-pretty w-[13rem] h-[4rem] font-semibold text-lg bg-[#141718] text-[#FEFEFE] rounded-2xl
            hover:bg-transparent hover:text-[#141718] border-[2px] border-[#141718] 
        '>
                {title}
            </button>


    )
}

export default CTA