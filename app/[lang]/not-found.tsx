import Link from 'next/link'

export default function RootNotFound() {
  return (
    <section className="my-10 text-center">
      <p className="text-caption font-semibold tracking-tighter uppercase">404</p>
      <h1 className="text-headline leading-none font-bold text-balance">Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Home</Link>
    </section>
  )
}
