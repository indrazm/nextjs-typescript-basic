'use client'

import { signIn } from 'next-auth/react'

export default function Page() {
  return (
    <main>
      <h1>Hey There!</h1>
      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
        onClick={async () => {
          await signIn('github')
        }}
      >
        Sign In with GitHub
      </button>
    </main>
  )
}
