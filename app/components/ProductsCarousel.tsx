"use client";

import React, { useEffect, useState } from 'react';
import client from "@/lib/client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { simplifiedProduct } from '../interface';

function ProductsCarousel() {
  const [products, setProducts] = useState<simplifiedProduct | null>(null);

  useEffect(() => {
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
        setProducts(res);
        // console.log(res);
      }
    )
  }, [])

  return (
    <section>
      <div className='
        Xsm:max-Beforexl:pl-[2.5rem]
        py-[3rem] pl-[10rem] h-[41rem] flex flex-col gap-8'>
        <div className=' Xsm:max-Beforexl:font-medium Xsm:max-Beforexl:text-3xl font-semibold text-5xl'>
          <p>New Arrivals</p>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
              1700: {
                slidesPerView: 5,
              },
            }}
            className="h-[30rem]"
          >
            {products && (<>
              {products.map((item) => (
                <SwiperSlide key={item._id} >
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
                </SwiperSlide>
              ))}
            </>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel