"use client";

import CTA from '@/app/components/CTA';
import { useShoppingCart } from '@/app/context/ShoppingCartContext';
import { simplifiedProduct } from '@/app/interface';
import client from '@/lib/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';

export default function ProductPage({ params, }: { params: { slug: string } }) {
  const [productBySlug, setProductBySlug] = useState<simplifiedProduct | null>(null);
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems } = useShoppingCart();

  useEffect(() => {
    const query = `*[_type == "products" && slug.current == "${params.slug}"][]{
      _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      category,
      price_id,
    }`
    client.fetch(query).then(
      (res) => {
        setProductBySlug(res);
        console.log(res);

      }
    )
  }, [])

  return (
    <div className='
      flex flex-row
      justify-center
      items-start'>
        {productBySlug && (
          <div className='
            py-[14rem]
            gap-8
            flex flex-row 
            Xsm:max-xl:flex-col
            Xsm:max-xl:items-center
            justify-start
            items-start w-auto h-auto'
          >
            <div className='w-3/4 h-[20rem] bg-[#F3F5F7] flex flex-col justify-center'>
              <Image
                className='w-auto h-[15rem] object-contain object-center'
                src={productBySlug[0].imageUrl} alt="product image"
                width={800}
                height={800}
              />
            </div>
            <div className='
              pt-[2rem]
              w-3/4
              gap-4
              flex flex-col 
              justify-start
              items-start h-auto'
            >
              <div className='font-bold text-3xl '>{productBySlug[0].name}</div>
              <div className='font-base text-xl'>
                {productBySlug[0].details}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Vero enim maiores optio fugiat ducimus aliquid laboriosam distinctio soluta.
                Tenetur dolore itaque aperiam molestias corrupti quae veritatis maiores mollitia, assumenda pariatur!
              </div>
              <div className='font-base text-xl'>
                <span className='text-lg font-bold'>Piece Price: </span>{productBySlug[0].price}
              </div>
              <div className='font-base text-xl'>
                <span className='text-lg font-bold'>category: </span>{productBySlug[0].category}
              </div>
              <div onClick={() => increaseCartQuantity(productBySlug[0].price_id)}>
                <CTA title='Add to Cart' />
              </div>
              <div className='flex flex-row justify-center items-center border rounded-lg mt-auto'>
                <button className='p-2' onClick={() => increaseCartQuantity(productBySlug[0].price_id)}><FaPlus size={18} /></button>
                <div className='py-2 px-6 text-base font-medium'>
                  {cartItems.length - 1 === 0 ?
                    cartItems.map((item, index) => (
                      productBySlug[0].price_id === item.id && (<div key={index}>{item.quantity}</div>)
                    ))
                    : <div>0</div>
                  }
                </div>
                <button className='p-2' onClick={() => decreaseCartQuantity(productBySlug[0].price_id)}><FaMinus size={18} /></button>
              </div>
              <button className='mt-auto pb-2 ' onClick={() => removeFromCart(productBySlug[0].price_id)}>
                {/* <TiDeleteOutline size={27} /> */}
                Remove From The Cart
              </button>
            </div>
          </div>
        )}
    </div>
  )
}