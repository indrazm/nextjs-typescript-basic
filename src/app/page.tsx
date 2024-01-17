export default function Page() {
  const user = {
    name: 'John Doe',
    email: 'john@domain.com'
  }

  const { name } = user
  console.log(name)

  return <h1>Hey There!</h1>
}
