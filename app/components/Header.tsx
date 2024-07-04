import client from '@/lib/client'
import Image from 'next/image';
import React from 'react'
import CTA from './CTA';
import Link from 'next/link';


async function GetData() {
    const query = `*[_type == "herosection"][0...4]{"imageUrl": image[0].asset->url,}`
    const data = await client.fetch(query);
    return data;
}

export default async function Header() {
    const data = await GetData();

    return (
        <header className='BG-Gradient w-full h-full'>
            <div className='
                Xsm:max-Beforexl:mr-0
                Xsm:max-Beforexl:flex-col-reverse
                pt-[12rem]
                gap-12
                h-auto mr-16
                flex flex-row justify-center items-center'
            >
                <div className='w-auto h-auto mt-auto'>
                    <Image
                        src={data[3].imageUrl}
                        alt="Hero photo"
                        width={800}
                        height={800}
                        className='
                        Xsm:max-md:h-[24rem]
                        md:max-Beforexl:h-[32rem]
                        Beforexl:max-BasePcScreen:h-[34rem]
                        w-auto h-[38rem]'
                        priority
                    />
                </div>
                <div className='
                    Xsm:max-md:text-4xl 
                    Xsm:max-md:justify-center 
                    Xsm:max-md:items-center 

                    md:max-Beforexl:justify-center 
                    md:max-Beforexl:items-center 

                    flex flex-col justify-start items-start gap-4 
                    text-6xl'>
                    <h2 className='
                    Xsm:max-md:font-bold 
                    Xsm:max-md:tracking-normal  
                    Xsm:max-md:leading-[2.7rem] 
                    Xsm:max-Beforexl:text-center 

                    md:max-lg:text-center 

                    font-extrabold leading-[4rem] tracking-wide'>
                        Listen to <br /> the <span className='text-[#377DFF] font-medium'>amazing</span><br />
                        music sound.
                    </h2>
                    <p className='Xsm:max-md:text-sm text-lg'>Experience music like never before</p>
                    <Link href={'/Shop'}>
                        <CTA title='Shopping Now' />
                    </Link>
                </div>
            </div>
        </header>

    )
}
