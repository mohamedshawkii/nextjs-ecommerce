import client from '@/lib/client';
import Image from 'next/image';
import React from 'react'

async function GetData() {
    const query = `*[_type == "otherbrands"][]{"imageUrl": image[0].asset->url,}`
    const data = await client.fetch(query);
    return data;
}

export default async function BrandsSection() {
    const data = await GetData();
    return (
        <section>
            <div className='
            sm:max-BasePcScreen:grid
            sm:max-BasePcScreen:grid-cols-2
            Xsm:max-sm:flex-col
            Xsm:max-sm:px-[2.5rem]
            
            flex flex-row justify-between 
            items-center gap-4 py-[2.5rem] px-[10rem]
            ' >
                {
                    data.map((item: any) => (
                        <div key={item._id} className='flex flex-row items-center justify-center'>
                            <Image src={item.imageUrl} alt="product" height={800} width={800} className='w-auto h-auto' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
