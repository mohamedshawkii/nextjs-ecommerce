import { fullProduct } from '../../interface';
import client from '@/lib/client';
import Image from 'next/image';
import React from 'react'


async function GetData(slug: string) {
  const query = `*[_type == "products" && slug.current == "${slug}" ][0]{
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
export default async function ProductPage({ params, }: { params: { slug: string } }) {
  const data: fullProduct[] = await GetData(params.slug);
  return (
    <div className=' h-auto'>
      page
      <Image src={data.imageUrl} alt="product image" width={300} height={300} />
      <div>{data.name}</div>
    </div>
  )
}