import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
     <h1>Home Page</h1>
     <p>
      <Link href='/users' className='text-yellow-500 font-bold'>Users</Link>
     </p>
    </main>
  )
}
