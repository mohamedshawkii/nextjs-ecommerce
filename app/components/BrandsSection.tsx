import client from '@/lib/client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
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
            <div className='flex flex-row justify-center items-center gap-2 w-full py-[2.5rem] px-[10rem]'>
                {
                    data.map((item: { _id: React.Key | null | undefined; imageUrl: string | StaticImport; }) => (
                        <div key={item._id} className='w-full h-full'>
                            <Image src={item.imageUrl} alt="product" height={800} width={800} className='w-auto h-[5rem]'/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
 