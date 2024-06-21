"use client";

import client from '@/lib/client';
import { useEffect, useState } from 'react'
import { ProductInterFace } from '../interface';
import Image from 'next/image';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { TiDeleteOutline } from 'react-icons/ti';

function CartItem({ keyId, quantity }: { keyId: string | number, quantity: number }) {

    const [product, setProduct] = useState<ProductInterFace | null>();
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

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
            {product && product.map((item) =>
                <div className='h-[6rem] flex flex-row gap-4 justify-start items-start'>
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

                    <div className='flex flex-col justify-between items-start w-3/6 h-full text-pretty'>
                        {item.name}
                        <div className='flex flex-row justify-center items-center border rounded-lg mt-auto'>
                            <button className='p-2' onClick={() => increaseCartQuantity(item.price_id)}><FaPlus size={18} /></button>
                            <div className='py-2 px-6 text-base font-medium'>{quantity}</div>
                            <button className='p-2' onClick={() => decreaseCartQuantity(item.price_id)}><FaMinus size={18} /></button>

                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center w-1/6 h-full'>
                        <div className='text-pretty'>
                            {Math.round(item.price * quantity)}
                        </div>
                        <button className='mt-auto pb-2 ' onClick={() => removeFromCart(item.price_id)}><TiDeleteOutline size={27} /></button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default CartItem