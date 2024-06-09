"use client";

import client from '@/lib/client';
import React, { useState } from 'react'
import { simplifiedProduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from '@/public/svgs/SearchIcon';

export default function SearchBar() {
  const [searchedProduct, setsearchedProduct] = useState<simplifiedProduct | null>(null);
  const [userInput, setUserInput] = useState<string>('');

  function HandleSearchedProduct() {
    const query = `*[_type == "products"][]{
      _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const data = res.filter(
            (res: { name: string, includes: () => void }) => res?.name.includes(`${userInput}`));
          console.log(data);
          setsearchedProduct(data);
        }
      }
    )
  }

  return (
    <div className="flex flex-row justify-end items-center relative">
        <form action={HandleSearchedProduct}>
          <div className='flex flex-row justify-center items-center '>
            <input
              type="text"
              placeholder='Search Product...'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className=' bg-transparent border-none'
            />
            <button type='submit'><SearchIcon /></button>
          </div>
        </form>
      <div className="mt-10 absolute top-[0px] right-[20px]">
        {searchedProduct && (<>
          {searchedProduct.map((item) => (
            <div key={item._id}>
              <div className='w-[16.5rem] h-[28.5rem] 
                  flex flex-col justify-center items-center gap-6'>
                <div className='flex justify-center items-center w-full h-3/4 bg-[#F3F5F7]'>
                  <Image className='w-auto h-[10rem]' src={item.imageUrl} alt="product" height={500} width={500} />
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
            </div>
          ))}
        </>
        )}
      </div>
    </div>
  )
}


