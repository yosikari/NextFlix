import payments from "@/lib/stripe"
import { onCurrentUserSubscriptionUpdate, Subscription } from "@stripe/firestore-stripe-payments"
import { User } from "firebase/auth"
import { useState, useEffect } from "react"

function useSubscription(user: User | null) {
    const [subscription, setSubscription] = useState<Subscription | null>(null)

    useEffect(() => {
        if (!user) return

        // sub listener.. 
        onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
            setSubscription(
                snapshot.subscriptions.filter(
                    (sub) =>
                        sub.status === 'active' ||
                        sub.status === 'trialing'
                )[0]
            )
        })
    }, [user])

    return subscription
}

export default useSubscription