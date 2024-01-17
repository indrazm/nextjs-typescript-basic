import { createUser } from './action'

export default function Page() {
  return (
    <form action={createUser}>
      <main className="w-[320px] space-y-1">
        <label>Name</label>
        <input name="name" type="text" placeholder="John doe" />
        <label>Email</label>
        <input name="email" type="text" placeholder="john@doe.com" />
        <label>Password</label>
        <input name="password" type="password" placeholder="password" />
        <button>Register</button>
      </main>
    </form>
  )
}
