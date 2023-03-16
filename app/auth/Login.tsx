'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
    return (
        <li className='list-none'>
            <button onClick={() => signIn()} className="text-sm py-2 px-4 bg-slate-600 rounded-xl">Sign In</button>
        </li>
    )
}