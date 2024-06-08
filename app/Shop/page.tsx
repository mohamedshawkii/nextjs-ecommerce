"use client"

import React, { useEffect, useState } from 'react'
import StoreAllProduct from '../components/StoreAllProduct'
import SideBare from '../components/SideBare'
import { ProductInterFace } from '../interface';
import client from '@/lib/client';

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
          const byPrice = res.filter(
            (res: { price: number; }) => res?.price < 100);
          // console.log(byPrice);
          setProductsData(byPrice);
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
          const byPrice = res.filter(
            (res: { price: number; }) => res?.price < 199.99 && res?.price > 100);
          // console.log(byPrice);
          setProductsData(byPrice);
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
          const byPrice = res.filter(
            (res: { price: number; }) => res?.price < 299.9 && res?.price > 200);
          // console.log(byPrice);
          setProductsData(byPrice);
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
          const byPrice = res.filter(
            (res: { price: number; }) => res?.price > 300.00);
          // console.log(byPrice);
          setProductsData(byPrice);
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
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const byPrice = res.filter(
            (res: { category: string }) => res?.category.includes("Wireless") );
          console.log(byPrice);
          setProductsData(byPrice);
        }
      }
    )
  }
//.indexOf("Wireless")
  function earbudsCategory() {
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
          const byPrice = res.filter(
            (res: { category: string; }) => res?.category === 'Earbuds');
          console.log(byPrice);
          setProductsData(byPrice);
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
      }`
    client.fetch(query).then(
      (res) => {
        if (res) {
          const byPrice = res.filter(
            (res: { category: string; }) => res?.category === 'Headphone');
          setProductsData(byPrice);
          console.log(byPrice);
        }
      }
    )
  }



  return (
    <div className='px-[10rem] w-full h-auto' >
      <div className=' h-[24.5rem]'>
      </div>
      <div className='flex flex-row py-[4rem] w-full h-auto'>
        <div className='pr-[1.5rem]'>
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