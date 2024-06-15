"use client"

import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import CTA from './CTA';

type Myfunctions = {
    handleOpenCart: () => void,
}

function SideTableCart({ handleOpenCart }: Myfunctions) {

    const { cartItems } = useShoppingCart();
    // console.log('ids', cartItems);

    function handleClickedWrapper(e: any): void {
        if (e.target.id === 'wrapper') {
            handleOpenCart();
        }
    }

    return (
        <aside>
            <div
                id='wrapper'
                className='
                    backdrop-filter backdrop-brightness-75 
                    backdrop-blur-md z-[51] fixed top-0 right-0 w-screen h-svh'
                onClick={handleClickedWrapper}
            >
                <div className='h-svh bg-[#FEFEFE] w-[26rem] py-[2.5rem] px-[1.5rem]'>
                    <div className='h-[4rem] font-semibold text-3xl'>
                        <p>Cart</p>
                    </div>
                    <div className='h-3/4 w-full overflow-y-scroll flex flex-col gap-4'>
                        {cartItems && cartItems.length > 0 &&
                            (
                                cartItems.map((item) => <CartItem key={item.id} keyId={item.id} quantity={item.quantity} />)
                            )
                        }
                    </div>
                    <div className='h-[11rem] w-full flex flex-col justify-center items-start'>
                        <p>total</p>
                        <hr />
                        <CTA title={'Checkout'} hrefPath='/' />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideTableCart