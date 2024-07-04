import React from 'react'

import Lock from '@/public/svgs/Lock';
import Money from '@/public/svgs/Money';
import DeliveryCar from '@/public/svgs/DeliveryCar';
import Contact from '@/public/svgs/Contact';

const MOreFeature = () => {
    return (
        <section>
            <div className='
            sm:max-Afterxl:grid
            sm:max-Afterxl:grid-cols-2
            Xsm:max-sm:flex-col
            Xsm:max-lg:px-[2.5rem]
            h-auto w-auto px-[10rem] py-8
            flex flex-row justify-between items-center gap-8 
            '>
                <div className='sm:max-Afterxl:ml-auto bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem] '>
                    <div className='flex flex-col gap-3 p-[2.5rem]'>
                        <Lock />
                        <p className='text-base font-semibold'>Secure Payments</p>
                        <p>Order above $200</p>
                    </div>
                </div>
                <div className='sm:max-Afterxl:mr-auto bg-[#F3F5F7] flex flex-col justify-center ivtems-start w-[16.7rem] h-[14rem]'>
                    <div className='flex flex-col gap-3 p-[2.5rem]'>
                        <DeliveryCar />
                        <p className='text-base font-semibold'>Free Shipping</p>
                        <p>Order above $200</p>
                    </div>
                </div>
                <div className='sm:max-Afterxl:ml-auto bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                    <div className='flex flex-col gap-3 p-[2.5rem]'>
                        <Money />
                        <p className='text-base font-semibold'>Money-back</p>
                        <p>Order above $200</p>
                    </div>
                </div>
                <div className='sm:max-Afterxl:mr-auto bg-[#F3F5F7] flex flex-col justify-center items-start w-[16.7rem] h-[14rem]'>
                    <div className='flex flex-col gap-3 p-[2.5rem]'>
                        <Contact />
                        <p className='text-base font-semibold'>24/7 Support</p>
                        <p>Order above $200</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MOreFeature