
import { CheckoutForm } from './subComponents/CheckoutForm'
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function CheckOut({ searchParams }: { searchParams: any }) {

    const checkOutTotal = searchParams.total as number;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: checkOutTotal,
        currency: "USD",
    })

    if (paymentIntent.client_secret == null) {
        throw Error("Stripe failed to create payment intent")
    }

    return (
        <div className='h-auto w-full flex flex-col justify-center'>
            <CheckoutForm clientSecret={paymentIntent.client_secret} checkOutTotal={checkOutTotal} />
        </div>
    );
}