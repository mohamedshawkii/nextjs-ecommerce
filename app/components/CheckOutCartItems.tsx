"use client";

import client from '@/lib/client';
import { useEffect, useState } from 'react'
import { ProductInterFace } from '../interface';
import Image from 'next/image';

function CheckOutCartItems({ keyId, quantity }: { keyId: string | number, quantity: number }) {
    const [product, setProduct] = useState<ProductInterFace | null>();

    useEffect(() => {
        if (keyId) {
            const query = `*[_type == "products" && price_id == "${keyId}" ][]{
                _id,
                price,
                name,
                details,
                "slug": slug.current,
                "imageUrl": image[0].asset->url,
                price_id,
                }`

            client.fetch(query).then(
                (res) => {
                    setProduct(res);
                }
            )
        }

    }, [keyId])

    return (
        <div>
            {product && product.map((item,_index) =>
                <div key={_index} className='h-[6rem] flex flex-row gap-4 justify-start items-start'>
                    <div className='w-auto h-full'>
                        <div className='h-[6rem] w-[5rem] bg-[#F3F5F7] flex'>
                            <Image
                                src={item.imageUrl}
                                width={500}
                                height={500}
                                alt={'product'}
                                className='w-auto h-2/4 object-cover object-center self-center mx-auto'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col justify-start items-start w-4/6 h-full text-pretty'>
                        <div className='text-wrap text-lg line-clamp-2 font-bold'>{item.name}</div>
                        <div><span className=' font-semibold'>quantity:</span> {quantity}</div>
                        <div><span className=' font-semibold'>price:</span> {item.price}</div>
                        <div><span className=' font-semibold'>SubTotal:</span> {Math.round(item.price * quantity)}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CheckOutCartItems