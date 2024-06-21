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
        <div className="max-w-5xl w-full mx-auto space-y-8">
            <div className="w-full h-auto grid grid-cols-4 justify-center items-center gap-8 py-8">
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
        <form onSubmit={handleSubmit}>
            <div>Checkout</div>
            {errorMessage && (
                <div>
                    {errorMessage}
                </div>
            )}
            <PaymentElement />
            <button
                type='submit'
                className=' text-pretty w-[13rem] h-[4rem] font-semibold text-lg bg-[#141718] text-[#FEFEFE] rounded-2xl
                    hover:bg-transparent hover:text-[#141718] border-[2px] border-[#141718]'
                disabled={stripe == null || elements == null || isLoading}
            >
                {isLoading ? "Purchasing..." : `Purchase ${totalPrice}`}
            </button>
        </form>
    )
}