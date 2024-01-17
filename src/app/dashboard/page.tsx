import { auth } from '@/utils/nextauth'

export default async function Page() {
  const session = await auth()

  return (
    <main className="space-y-4 p-8">
      <header className="flex justify-between items-center">
        <h1>Dashboard</h1>
        <button>Logout</button>
      </header>
      <pre>{JSON.stringify(session, null, 4)}</pre>
    </main>
  )
}
