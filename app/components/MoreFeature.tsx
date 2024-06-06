import React from 'react'

import Lock from '@/public/svgs/Lock';
import Money from '@/public/svgs/Money';
import DeliveryCar from '@/public/svgs/DeliveryCar';
import Contact from '@/public/svgs/Contact';

const MOreFeature = () => {
    return (
        <div className='h-[19rem] w-auto px-[10rem] flex flex-row justify-between items-center gap-5'>
            <div className='bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                <div className='flex flex-col gap-3 p-[2.5rem]'>
                    <Lock />
                    <p className='text-base font-semibold'>Free Shipping</p>
                    <p>Order above $200</p>
                </div>
            </div>
            <div className='bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                <div className='flex flex-col gap-3 p-[2.5rem]'>
                    <DeliveryCar />
                    <p className='text-base font-semibold'>Free Shipping</p>
                    <p>Order above $200</p>
                </div>
            </div>
            <div className='bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                <div className='flex flex-col gap-3 p-[2.5rem]'>
                    <Money />
                    <p className='text-base font-semibold'>Free Shipping</p>
                    <p>Order above $200</p>
                </div>
            </div>
            <div className='bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                <div className='flex flex-col gap-3 p-[2.5rem]'>
                    <Contact />
                    <p className='text-base font-semibold'>Free Shipping</p>
                    <p>Order above $200</p>
                </div>
            </div>
        </div>
    )
}

export default MOreFeature