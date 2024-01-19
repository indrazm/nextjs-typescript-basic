import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="h-screen flex justify-center items-center">{children}</main>
}
