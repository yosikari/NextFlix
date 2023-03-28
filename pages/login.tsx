import { useState } from "react"
import { useRouter } from 'next/router'

import Head from "next/head"
import Image from 'next/image'
import { SubmitHandler, useForm } from "react-hook-form"
import useAuth from "@/hooks/useAuth"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRight } from "react-icons/fa"

//google login
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"

interface Inputs {
    email: string
    password: string
}

function Login() {
    const router = useRouter()
    const [login, setLogin] = useState(false)
    const { signIn, signUp } = useAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        if (login) {
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    }

    //google login
    const googleAuth = new GoogleAuthProvider()
    const loginWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleAuth)
            .then(() => router.push('/'))
    }


    const guestMod = async () => {
        await signUp(`guest-${guidGenerator()}@guest.com`, 'guest123')
    }

    function guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }

    return (
        <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <Head>
                <title>NextFlix Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image
                src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                layout="fill"
                className="-z-10 !hidden opacity-60 sm:!inline"
                objectFit="cover"
                alt="bg"
            />
            <img
                src="https://rb.gy/ulxxee"
                className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                width={150}
                height={150}
                alt="logo"
            />

            <form
                className="relative mt-24 space-y-8 rounded bg-black/75 
            py-10 px-6 md:mt-0 md:max-w-md md:px-14"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <div className="space-y-4">
                    <label className="inline-block w-full">
                        <input
                            type="email"
                            placeholder="Email"
                            className={`input ${errors.email && 'border-b-2 border-orange-500'}`}
                            {...register("email", { required: true })} />
                        {errors.email && (
                            <p className="p-1 text-[13px] text-orange-500">
                                Please enter a valid email.
                            </p>
                        )}
                    </label>
                    <label className="inline-block w-full">
                        <input
                            type="password"
                            placeholder="Password"
                            className={`input ${errors.password && 'border-b-2 border-orange-500'}`}
                            {...register("password", { required: true })} />
                        {errors.password && (
                            <p className="p-1 text-[13px] text-orange-500">
                                Your password must contain between 6 and 60 characters.
                            </p>
                        )}
                    </label>
                </div>
                <button
                    className="w-full rounded bg-[#e50914] py-3 font-semibold"
                    onClick={() => setLogin(true)}
                >Sign In</button>
                <div className="text-[gray]">
                    New to Nextflix?
                    <button
                        type='submit'
                        className="ml-2 text-white hover:underline"
                        onClick={() => setLogin(false)}
                    >Sign up now</button>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-between transition
                    hover:text-[#e50914] md:hover:w-[50%] "
                    onClick={guestMod}
                >Continue as a guest
                    <FaArrowRight className="w-4 h-4 ml-2" />
                </button>
            </form>

            <button onClick={loginWithGoogle}
            type="button" className="self-center mt-2 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Sign in with Google</button>

            {/* Flash notification */}
            <ToastContainer />
        </div>
    )
}

export default Login