"use client"

import React from "react";

function SideBare({ allPrices,
    overthreeHundred,
    zeroToHundred,
    hundredToTwoHundred,
    twoHundredTothreeHundred,
    wirelessCategory,
    earbudsCategory,
    headphoneCategory }: any) {
    return (
        <aside className="Xsm:max-Beforexl:w-full">
            <div className="Xsm:max-Beforexl:w-[15rem] w-[16.5rem] h-[31rem] overflow-scroll overflow-x-hidden bg-transparent text-lg text-[#000000]">
                <div className="flex flex-col justify-start items-start gap-6  w-full h-auto ">
                    <h2 className="font-bold">CATEGORIES</h2>
                    <button className="hover:font-bold" onClick={wirelessCategory}>Wireless</button>
                    <button className="hover:font-bold" onClick={earbudsCategory}>Earbuds</button>
                    <button className="hover:font-bold" onClick={headphoneCategory}>Headphone</button>

                    <div className="my-[1rem]" />

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
