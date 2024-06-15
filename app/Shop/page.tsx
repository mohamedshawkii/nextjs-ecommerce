"use client"

import React, { useEffect, useState } from 'react'
import StoreAllProduct from '../components/StoreAllProduct'
import SideBare from '../components/SideBare'
import { ProductInterFace } from '../interface';
import client from '@/lib/client';
import { LuSettings2 } from 'react-icons/lu';

const page = () => {
  const [productsData, setProductsData] = useState<ProductInterFace | null>(null);

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
        setProductsData(res);
        // console.log(res);
      }
    )
  }, [])

  function allPrices() {
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
        setProductsData(res);
        // console.log(res);
      }
    )
  }

  function zeroToHundred() {
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
          const zeroToHundredRange = res.filter(
            (res: { price: number; }) => res?.price < 100);
          // console.log(byPrice);
          setProductsData(zeroToHundredRange);
        }
      }
    )
  }

  function hundredToTwoHundred() {
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
          const hundredToTwoHundredRange = res.filter(
            (res: { price: number; }) => res?.price < 199.99 && res?.price > 100);
          // console.log(byPrice);
          setProductsData(hundredToTwoHundredRange);
        }
      }
    )
  }

  function twoHundredTothreeHundred() {
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
          const twoHundredTothreeHundredRange = res.filter(
            (res: { price: number; }) => res?.price < 299.9 && res?.price > 200);
          // console.log(byPrice);
          setProductsData(twoHundredTothreeHundredRange);
        }
      }
    )
  }

  function overthreeHundred() {
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
          const overthreeHundredRange = res.filter(
            (res: { price: number; }) => res?.price > 300.00
          );
          // console.log(byPrice);
          setProductsData(overthreeHundredRange);
        }
      }
    )
  }

  function wirelessCategory() {
    const query = `*[_type == "products"][]{
      _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      category,
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const wirelessCategoryRange = res.filter(
            (item: { category: string }) => item?.category.includes("Wireless"));
          // console.log(wirelessCategoryRange);
          setProductsData(wirelessCategoryRange);
        }
      }
    )
  }

  function earbudsCategory() {
    const query = `*[_type == "products"][]{
       _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      category,
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const earbudsCategoryRange = res.filter(
            (res: { category: string; }) => res?.category === 'Earbuds');
          // console.log(earbudsCategoryRange);
          setProductsData(earbudsCategoryRange);
        }
      }
    )
  }

  function headphoneCategory() {
    const query = `*[_type == "products"][]{
       _id,
      price,
      name,
      details,
      "slug": slug.current,
      "imageUrl": image[0].asset->url,
      category,
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const headphoneCategoryRange = res.filter(
            (res: { category: string; }) => res?.category === 'Headphone');
          // console.log(headphoneCategoryRange);
          setProductsData(headphoneCategoryRange);
        }
      }
    )
  }

  return (
    <div className='px-[10rem] w-full h-auto' >
      <div className=' h-[24.5rem]'>
      </div>
      <div className='flex flex-row justify-start items-start w-full font-bold text-xl'>
        <div className=" flex flex-row justify-center items-center mb-[2rem] gap-8">
          <LuSettings2 size={27} />
          Filter
        </div>
        <div className=' ml-[12rem]'>
          <h2>Our Products</h2>
        </div>
      </div>
      <div className='flex flex-row w-full h-auto pb-[4rem]  '>
        <div className='pr-[2rem]'>
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

export default page