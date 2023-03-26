import { modalState } from '@/atoms/modalAtom'
import Modal from '@/components/Modal'
import Row from '@/components/Row'
import useList from '@/hooks/useList'
import Head from 'next/head'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import useAuth from '../hooks/useAuth'
import useSubscription from '../hooks/useSubscription'

function MyList() {
  const { user } = useAuth()
  const subscription = useSubscription(user)
  const list = useList(user?.uid)
  const showModal = useRecoilValue(modalState)

  return (
    <div>
      <Head>
        <title>My List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
            title="Home"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">My Watchlist</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {subscription?.created}
            </p>
          </div>
        </div>

        <div className="grid-cols-4 border-x-0 border-t border-b-0 px-0 mt-2 pt-2">
        {list.length > 0 ?
            <Row title="" movies={list} />:
            <div>
                <h2 className='text-xl'>Your watchlist is empty.</h2>
                <a className='membershipLink' href='/'>Go back</a>
            </div>
          }
        </div>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default MyList
