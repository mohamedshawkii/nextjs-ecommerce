"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function StoreAllProduct(productsData: any) {
    // console.log(productsData.productsData);
    const NewproductsData = productsData.productsData;

    return (
        <div className='w-full overflow-scroll overflow-x-hidden h-[60rem]'>
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
                            <div className='flex justify-center items-center w-full h-3/4 bg-[#F3F5F7]'>
                                <Image className='w-auto h-[10rem]' src={item.imageUrl} priority alt="product" height={500} width={500} />
                            </div>
                            <div className=' self-start flex flex-col justify-start items-start
                           font-bold text-base
                          '>
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
