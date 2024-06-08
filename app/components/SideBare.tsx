"use client"

import React, { useState } from "react";
import { LuSettings2 } from "react-icons/lu";

function SideBare({ allPrices,
    overthreeHundred,
    zeroToHundred,
    hundredToTwoHundred,
    twoHundredTothreeHundred,
    wirelessCategory,
    earbudsCategory,
    headphoneCategory }: any) {
    return (
        <aside>
            <div className=" w-[16.5rem] h-[31rem] overflow-scroll overflow-x-hidden bg-transparent text-lg text-[#000000] ">
                <div className="flex flex-col justify-start items-start gap-6  w-full h-auto p-4 ">
                    <div className=" flex flex-row justify-center items-center gap-8 font-bold">
                        <LuSettings2 />
                        Filter
                    </div>
                    
                    <h2 className="font-bold">CATEGORIES</h2>
                    <button className="hover:font-bold" onClick={wirelessCategory}>Wireless</button>
                    <button className="hover:font-bold" onClick={earbudsCategory}>Earbuds</button>
                    <button className="hover:font-bold" onClick={headphoneCategory}>Headphone</button>

                    <div className="my-[2rem]" />

                    <h2 className="font-bold">PRICE</h2>
                    <button className="hover:font-bold" onClick={allPrices}>All prices</button>
                    <button className="hover:font-bold" onClick={zeroToHundred}>$0.00 - 99.99</button>
                    <button className="hover:font-bold" onClick={hundredToTwoHundred}>$100 - 199.99</button>
                    <button className="hover:font-bold" onClick={twoHundredTothreeHundred}>$200 - 299.99</button>
                    <button className="hover:font-bold" onClick={overthreeHundred}>$300.00+</button>

                </div>
            </div>
        </aside>
    );
}

export default SideBare;
