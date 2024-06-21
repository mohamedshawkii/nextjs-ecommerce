"use client";

import client from '@/lib/client';
import React, { useEffect, useState } from 'react'
import { simplifiedProduct } from '../interface';
import Image from 'next/image';
import SearchIcon from '@/public/svgs/SearchIcon';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { TiDeleteOutline } from "react-icons/ti";

export default function SearchBar() {

  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const [needFilter, setNeedFilter] = useState<simplifiedProduct | null>();
  const [filtered, setFiltered] = useState<simplifiedProduct | null>();
  const [userInput, setUserInput] = useState<string>('');

  useEffect(() => {
    const query = `*[_type == "products"][]{
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
        setNeedFilter(res);
      })
  }, [])

  function handleSearchInput() {
    // event.preventDefault();
    if (needFilter) {
      setFiltered(needFilter.filter(
        (item: { name: string, }) => item?.name.toLowerCase().includes(userInput.toLowerCase()))
      )
    }
  }

  useEffect(() => {
    setFiltered(null);
  }, [userInput])
  // console.log('userInput', userInput);
  // console.log('filtered', filtered);

  return (
    <div className="flex flex-row justify-end items-center relative">
      <form action={handleSearchInput}>
        <div className='flex flex-row justify-center items-center '>
          <input
            // ref={inputRef}
            type="text"
            placeholder='Search Product...'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className='bg-transparent border-none rounded-sm box-border outline-none'
          />
          <button type='submit'><SearchIcon /></button>
        </div>
      </form>
      {userInput ?
        (<div className="
        overflow-x-hidden overflow-scroll
        mt-10 absolute top-[0px] right-[20px] rounded-xl 
        w-[25rem] h-auto bg-[#E8ECEF] "
        >
          <div className='flex flex-col gap-4 justify-center items-center py-8 px-4'>
            {filtered && (
              <>
                {filtered.map((item) => (
                  <div key={item._id} className='h-[6rem] w-full flex flex-row gap-4 justify-start items-start'>
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
                    <div className='flex flex-col justify-start items-start w-3/6 h-full text-pretty'>
                      {item.name}
                      <div className='flex flex-row justify-center items-center border rounded-lg mt-auto'>
                        <button className='p-2' onClick={() => increaseCartQuantity(item.price_id)}><FaPlus size={18} /></button>
                        <button className='p-2' onClick={() => decreaseCartQuantity(item.price_id)}><FaMinus size={18} /></button>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/6 h-full'>
                      <div className='text-pretty'>
                        {item.price}
                      </div>
                      <button className='mt-auto pb-2 ' onClick={() => removeFromCart(item.price_id)}><TiDeleteOutline size={27} /></button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>) : null
      }

    </div>
  )
}


