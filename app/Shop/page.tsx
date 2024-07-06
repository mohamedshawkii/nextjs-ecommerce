"use client"

import React, { useEffect, useState } from 'react'
import StoreAllProduct from '../components/StoreAllProduct'
import SideBare from '../components/SideBare'
import { ProductInterFace } from '../interface';
import client from '@/lib/client';
import { LuSettings2 } from 'react-icons/lu';

const ShopPage = () => {
  const [productsData, setProductsData] = useState<ProductInterFace | null>(null);

  useEffect(() => {
    async function fetchProducts (){
      try {
        const query = `*[_type == "products"][]{
          _id,
          price,
          name,
          details,
          "slug": slug.current,
          "imageUrl": image[0].asset->url,
          price_id,
          }`
        await client.fetch(query).then(
          (res) => {
            setProductsData(res);
            // console.log(res);
          }
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts ()
  }, [])

  async function allPrices() {
    try {
      const query = `*[_type == "products"][]{
        _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
        price_id,
        }`
      await client.fetch(query).then(
        (res) => {
          setProductsData(res);
          // console.log(res);
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function zeroToHundred() {
    try {
      const query = `*[_type == "products"][]{
        _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
        price_id,
        }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const zeroToHundredRange = res.filter(
              (res: { price: number; }) => res?.price < 100);
            // console.log(byPrice);
            setProductsData(zeroToHundredRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function hundredToTwoHundred() {
    try {
      const query = `*[_type == "products"][]{
        _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
        price_id,
        }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const hundredToTwoHundredRange = res.filter(
              (res: { price: number; }) => res?.price < 199.99 && res?.price > 100);
            // console.log(byPrice);
            setProductsData(hundredToTwoHundredRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

  }

  async function twoHundredTothreeHundred() {
    try {
      const query = `*[_type == "products"][]{
        _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
        price_id,
        }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const twoHundredTothreeHundredRange = res.filter(
              (res: { price: number; }) => res?.price < 299.9 && res?.price > 200);
            // console.log(byPrice);
            setProductsData(twoHundredTothreeHundredRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

  }

  async function overthreeHundred() {
    try {
      const query = `*[_type == "products"][]{
      _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      price_id,
      }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const overthreeHundredRange = res.filter(
              (res: { price: number; }) => res?.price > 300.00
            );
            // console.log(byPrice);
            setProductsData(overthreeHundredRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  async function wirelessCategory() {
    try {
      const query = `*[_type == "products"][]{
        _id,
        price,
        name,
        details,
        "slug": slug.current,
        "imageUrl": image[0].asset->url,
        price_id,
        category
        }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const wirelessCategoryRange = res.filter(
              (item: { category: string }) => item?.category.includes("Wireless"));
            // console.log(wirelessCategoryRange);
            setProductsData(wirelessCategoryRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

  }

  async function earbudsCategory() {
    try {
      const query = `*[_type == "products"][]{
        _id,
       price,
       name,
       details,
       "slug": slug.current,
       "imageUrl": image[0].asset->url,
       price_id,
       category
       }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const earbudsCategoryRange = res.filter(
              (res: { category: string; }) => res?.category === 'Earbuds');
            // console.log(earbudsCategoryRange);
            setProductsData(earbudsCategoryRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }

  }

  async function headphoneCategory() {
    try {
      const query = `*[_type == "products"][]{
        _id,
       price,
       name,
       details,
       "slug": slug.current,
       "imageUrl": image[0].asset->url,
       price_id,
       category
 
       }`
      await client.fetch(query).then(
        (res) => {
          if (res) {
            const headphoneCategoryRange = res.filter(
              (res: { category: string; }) => res?.category === 'Headphone');
            // console.log(headphoneCategoryRange);
            setProductsData(headphoneCategoryRange);
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='Xsm:max-Beforexl:px-[2.5rem] px-[10rem] w-full h-auto' >
      <div className=' h-[24.5rem]'>
      </div>
      <div className='flex flex-row justify-start items-start w-full font-bold text-xl'>
        <div className="Xsm:max-Beforexl:hidden flex flex-row justify-center items-center mb-[2rem] gap-8">
          <LuSettings2 size={27} />
          Filter
        </div>
        <div className='Xsm:max-Beforexl:m-0  ml-[12rem]'>
          <h2>Our Products</h2>
        </div>
      </div>
      <div className='Xsm:max-Beforexl:flex-col flex flex-row w-full h-auto pb-[4rem]'>
        <div className='
          Xsm:max-Beforexl:flex
          Xsm:max-Beforexl:flex-row
          Xsm:max-Beforexl:items-center 
          Xsm:max-Beforexl:justify-center
          
          Xsm:max-Beforexl:py-[2rem]
          Beforexl:pr-[2rem]'>
          <SideBare
            allPrices={allPrices}
            overthreeHundred={overthreeHundred}
            zeroToHundred={zeroToHundred}
            hundredToTwoHundred={hundredToTwoHundred}
            twoHundredTothreeHundred={twoHundredTothreeHundred}
            wirelessCategory={wirelessCategory}
            earbudsCategory={earbudsCategory}
            headphoneCategory={headphoneCategory}
          />
        </div>
        {productsData && <StoreAllProduct productsData={productsData} />}
      </div>
    </div>
  )
}

export default ShopPage