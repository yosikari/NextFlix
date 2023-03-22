import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'

import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../firebase'

import { toast } from 'react-toastify';

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
}

const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => { },
    signIn: async () => { },
    logout: async () => { },
    error: null,
    loading: false,
})

interface AuthProviderProps {
    children: React.ReactNode
}

const notify = (msg: string) => toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [error, setError] = useState('')
    const [initialLoading, setInitialLoading] = useState(true)
    const [loading, setLoading] = useState(false)

    //persisting the user
    useEffect(
        () =>
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                    setLoading(false)
                } else {
                    setUser(null)
                    setLoading(true)
                    router.push('/login')
                }

                setInitialLoading(false)
            }),
        [auth]
    )

    const signUp = async (email: string, password: string) => {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                router.push('/')
                setLoading(false)
            })
            .catch((error) => {
                notify(error.message)
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                router.push('/')
                setLoading(false)
            })
            .catch((error) => {
                notify('Wrong email or password.')
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }

    const logout = async () => {
        setLoading(true)

        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch((error) => {
                notify(error.message)
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }

    const memoedValue = useMemo(
        () => ({ user, signUp, signIn, error, loading, logout }),
        [user, loading, error]
    )

    return (
        <AuthContext.Provider value={memoedValue}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

// Export only the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
    return useContext(AuthContext)
}