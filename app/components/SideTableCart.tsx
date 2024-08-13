"use client"
import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import CTA from './CTA';
import Link from 'next/link';
import client from '@/lib/client';
import { simplifiedProduct } from '../interface';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

type Myfunctions = {
    handleOpenCart: () => void,
}

function SideTableCart({ handleOpenCart }: Myfunctions) {
    const [product, setProduct] = useState<simplifiedProduct | null>();
    const [total, setTotal] = useState<number>(0);
    const { cartItems, getTotalPrice, } = useShoppingCart();
    const [emptyCheckOut, setEmptyCheckOut] = useState<boolean>(true);
    const currPath = usePathname()


    useEffect(() => {
        if (total) {
            setEmptyCheckOut(false);

        } else {
            setEmptyCheckOut(true);
        }
    })


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
                setProduct(res);
            }
        )
    }, [])


    useEffect(() => {
        if (product) {
            const sum = cartItems.reduce((total, cartItem) => {
                const item = product?.find((i: { price_id: string | number; }) => i.price_id === cartItem.id)
                return total + item?.price * cartItem.quantity
            }, 0)
            setTotal(Math.round(sum));
        }
    })

    function handleClickedWrapper(e: any) {

        if (e.target.id === 'wrapper') {
            handleOpenCart();
        }
    }

    useEffect(() => {
        if (`/checkout` === currPath) {
            handleOpenCart()
        }
    }, [currPath])


    return (
        <aside>
            <div
                id='wrapper'
                className='
                    backdrop-filter backdrop-brightness-75
                    backdrop-blur-md z-[51] fixed top-0 right-0 w-screen h-svh

                    Xsm:max-xl:overflow-auto'
                onClick={handleClickedWrapper}
            >
                <div className='h-full bg-[#FEFEFE] w-[26rem] py-[2.5rem] px-[1.5rem]
                 Xsm:max-xl:w-full Xsm:max-xl:h-full
                '>
                    <div className='h-[4rem] font-semibold text-3xl flex flex-row justify-start gap-2'>
                        <p className='my-auto'>Cart</p>
                        <button
                            className="flex flex-row justify-center items-center gap-2 ml-auto"
                            onClick={handleOpenCart}
                        >
                            <span className="font-bold text-lg">Close</span><IoCloseCircleSharp size={27} />
                        </button>
                    </div>
                    <div className='h-2/4 w-full overflow-y-scroll flex flex-col gap-4'>
                        {cartItems &&
                            (
                                cartItems.map((item, index) => <CartItem
                                    key={index}
                                    keyId={item.id}
                                    quantity={item.quantity}
                                />)

                            )
                        }
                    </div>
                    <div className=' w-full flex flex-col items-start text-lg font-semibold'>
                        <p className='py-4'>total: {total}</p>
                        <hr className='border-[1px] border-[#141718] w-full ' />
                        <div className='py-4'>{emptyCheckOut && (<div>the cart is empty</div>)}</div>
                        <div className='py-4' onClick={() => getTotalPrice(total)}>
                            <Link href={`${total ? `/checkout?total=${total}` : `/Shop`}`}>
                                <CTA title={'Checkout'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideTableCart