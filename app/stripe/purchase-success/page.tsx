"use client"

import CTA from "@/app/components/CTA"
import Link from "next/link"

export default function successPage() {

    return (
        <div className="w-auto h-svh pt-[6rem] flex flex-col items-center justify-center gap-8">
            <p className=" text-[#6C7275] text-2xl ">Thank you!</p>
            <p className="font-bold text-4xl">Your order has been received</p>
            <Link href={"/"}>
                <CTA title={"Back to Home Page"} />
            </Link>
        </div>
    )
}