import { useState } from 'react'
import useAuth from '@/hooks/useAuth'
import { CheckIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Link from 'next/link'
import { Product } from '@stripe/firestore-stripe-payments'
import Table from './Table'
import Loader from './Loader'
import { loadCheckout } from '@/lib/stripe'
import CardNote from './CardNote'


interface Props {
    products: Product[];
}

function Plans({ products }: Props) {

    const { logout, user } = useAuth()
    const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
    const [isBillingLoading, setIsBillingLoading] = useState(false)

    const [isClipboardCard, setIsClipboardCard] = useState(false)
    const [isClipboardCVC, setIsClipboardCVC] = useState(false)
    const [isClipboardDate, setIsClipboardDate] = useState(false)


    const subscribeToPlan = () => {
        if (!user) return
        loadCheckout(selectedPlan?.prices[0].id!)
        setIsBillingLoading(true)
    }

    return (
        <div>
            <Head>
                <title>Netflix</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="border-b border-white/10 bg-[#141414]">
                <Link href="/">
                    <img
                        src="https://rb.gy/ulxxee"
                        alt="logo"
                        width={150}
                        height={90}
                        className="cursor-pointer object-contain"
                    />
                </Link>
                <button
                    className="text-lg font-medium hover:underline"
                    onClick={logout}
                >
                    Sign Out
                </button>
            </header>

            <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
                <h1 className="mb-3 text-3xl font-medium">
                    Choose the plan that&apos;s right for you
                </h1>
                <ul>
                    <li className="plansLi">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Watch all you want.
                        Ad-free.
                    </li>
                    <li className="plansLi">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Recommendations
                        just for you.
                    </li>
                    <li className="plansLi">
                        <CheckIcon className="h-7 w-7 text-[#E50914]" />
                        Change or cancel
                        your plan anytime.
                    </li>
                </ul>

                <div className="mt-4 flex flex-col space-y-4">
                    <div className="flex w-full items-center justify-center self-end md:w-3/5">
                        {products.map((product) => (
                            <div key={product.id} className={`planBox ${selectedPlan?.id === product.id ? "opacity-100" : "opacity-60"}`}
                                onClick={() => setSelectedPlan(product)}
                            >
                                {product.name}
                            </div>
                        ))}
                    </div>
                    <Table products={products} selectedPlan={selectedPlan} />
                    <button
                        disabled={!selectedPlan || isBillingLoading}
                        className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${isBillingLoading && 'opacity-60'
                            }`}
                        onClick={subscribeToPlan}
                    >
                        {isBillingLoading ? (
                            <Loader color="fill-gray-900" />
                        ) : (
                            'Subscribe'
                        )}
                    </button>

                    <CardNote />

                </div >
            </main >
        </div >
    )
}

export default Plans