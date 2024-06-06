import React from 'react'
import client from "@/lib/client";
import { simplifiedProduct } from "../interface";

async function GetData() {
    const query = `*[_type == "products"][0...6]{
    _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
    }`
    const data = await client.fetch(query);
    return data;
}
export default async function ProductCard() {
    const data: simplifiedProduct[] = await GetData();
    return (
        <div className='flex flex-row justify-center items-center gap-2 w-auto h-[19rem] p-8'>
            {
                data.map((item) => (
                    <div key={item._id} className='w-full h-full bg-gray-500 flex flex-col justify-center items-center text-center'>
                        <img src={item.imageUrl} alt="product" width={80} />
                        <div>{item.name}</div>
                        <div>{item.details}</div>
                        <div>{item.price}</div>
                    </div>
                ))
            }
        </div>
    );
}
