"use client"

import { useShoppingCart } from "@/app/context/ShoppingCartContext"
import CheckOutCartItems from "../../components/CheckOutCartItems"
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { FormEvent, useState } from "react"

type CheckoutFormProps = {
    clientSecret: string,
    checkOutTotal: number
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
)

export function CheckoutForm({ clientSecret, checkOutTotal }: CheckoutFormProps) {
    const { cartItems, } = useShoppingCart();

    return (
        <div className="max-w-5xl w-full h-full mx-auto 
            py-8 pt-[6rem]">
            <div className="w-full h-auto grid grid-cols-4 grid-flow-row-dense justify-center items-center gap-7 py-7 px-4
            Xsm:max-lg::grid-flow-row-dense
            Xsm:max-lg:grid-cols-none
            Xsm:max-lg:gap-8
            ">
                {cartItems &&
                    (
                        cartItems.map((item, index) =>
                            <CheckOutCartItems
                                key={index}
                                keyId={item.id}
                                quantity={item.quantity}
                            />)
                    )
                }
            </div>
            <Elements options={{ clientSecret }} stripe={stripePromise}>
                <Form totalPrice={checkOutTotal} />
            </Elements>
        </div>
    )
}

function Form({ totalPrice }: { totalPrice: number }) {
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>()

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (stripe == null || elements == null) return
        setIsLoading(true)

        stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
            },
        })
            .then(({ error }) => {
                if (error.type === "card_error" || error.type === "validation_error") {
                    setErrorMessage(error.message)
                } else {
                    setErrorMessage("An unknown error occurred")
                }
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <form className="flex flex-col Xsm:max-lg:items-center items-start gap-7 w-full" onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl">Checkout</h1>
            {errorMessage && (
                <div>
                    {errorMessage}
                </div>
            )}
            <PaymentElement className="w-full Xsm:max-lg:w-3/4" />
            <button
                type='submit'
                className='text-pretty w-[13rem] h-[4rem] font-semibold text-lg bg-[#141718] text-[#FEFEFE] rounded-2xl
                hover:bg-transparent hover:text-[#141718] border-[2px]border-[#141718]'
                disabled={stripe == null || elements == null || isLoading}
            >
                {isLoading ? "Purchasing..." : `Purchase ${totalPrice}`}
            </button>
        </form>
    )
}