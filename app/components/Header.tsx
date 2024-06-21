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
        <header className='BG-Gradient'>
            <div className=' flex flex-row justify-center items-center gap-12 h-[48rem] mr-16'>
                <div className='w-auto h-auto mt-auto'>
                    <Image
                        src={data[3].imageUrl}
                        alt="Hero photo"
                        width={800}
                        height={800}
                        className='w-auto h-[38rem] '
                        priority
                    />
                </div>
                <div className='flex flex-col justify-start items-start gap-4 text-6xl mt-[10rem]'>
                    <h2 className='font-extrabold leading-[4rem] tracking-wide'>
                        Listen to <br/> the <span className='text-[#377DFF] font-medium'>amazing</span><br/> 
                         music sound.</h2>
                    <p className='text-lg'>Experience music like never before</p>

                    <Link href={'/Shop'}>
                        <CTA title='Shopping Now'/>
                    </Link>
                    
                </div>
            </div> 
        </header>

    )
}
