"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CTA from './CTA';

export default function StoreAllProduct(productsData: any) {
    const NewproductsData = productsData.productsData;
    // console.log(productsData.productsData);

    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, } = useShoppingCart()
    return (
        <div className='w-full h-[60rem] overflow-y-scroll overflow-x-hidden'>
            {NewproductsData && (
                <div className='
                    grid
                    Xsm:max-Beforexl:grid-cols-1
                    Beforexl:max-BasePcScreen:grid-cols-2
                    BasePcScreen:max-MidPcScreen:grid-cols-3
                    MidPcScreen:max-WidePcScreen:grid-cols-4
                    WidePcScreen:grid-cols-5
                    justify-center
                    items-center
                    gap-6'
                >
                    {NewproductsData.map((item: any) => (
                        <div className='
                            w-[16.5rem] h-[28.5rem] 
                            flex flex-col justify-center items-center gap-6'
                            key={item._id}
                        >
                            <div className='flex justify-center items-center w-full h-3/4 bg-[#F3F5F7] relative  overflow-hidden'>
                                <Image className='w-auto h-[10rem]' src={item.imageUrl} priority alt="product" height={500} width={500} />
                                <div className='flex flex-col gap-4 justify-center items-center absolute inset-0 w-full h-full backdrop-blur-sm opacity-0 hover:opacity-100'>
                                    <div onClick={() => increaseCartQuantity(item.price_id)}>
                                        <CTA title={'Add to cart'} />
                                    </div>
                                    <div onClick={() => decreaseCartQuantity(item.price_id)}>
                                        <CTA title={'decrease'} />
                                    </div>
                                    <div onClick={() => removeFromCart(item.price_id)}>
                                        <CTA title={'remove'} />
                                    </div>
                                </div>
                            </div>

                            <div className='self-start flex flex-col justify-start items-start
                                font-bold text-base'
                            >
                                <Link href={`Product/${item.slug}`} className="">
                                    <div>{item.name}</div>
                                    <div>{item.details}</div>
                                    <div>${item.price}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
