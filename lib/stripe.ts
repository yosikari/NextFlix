import { createCheckoutSession, getStripePayments } from "@stripe/firestore-stripe-payments"
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'


const payments = getStripePayments(app, {
    productsCollection: 'products',
    customersCollection: 'customers',
})

const loadCheckout = async (priceId: string) => {
    const snapshot = await createCheckoutSession(payments, {
        price: priceId,
        //this will be the localhost:3000 or our domain 
        success_url: window.location.origin,
        cancel_url: window.location.origin
    })
    try {
        window.location.assign(snapshot.url)
    }
    catch (err: any) { console.log(err.message) }
}

export { loadCheckout }
export default payments