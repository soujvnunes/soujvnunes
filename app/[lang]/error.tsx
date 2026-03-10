'use client'

import { useEffect } from 'react'

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="my-10 text-center">
      <p className="text-caption font-semibold tracking-tighter uppercase">Error</p>
      <h1 className="text-headline leading-none font-bold text-balance">Something went wrong</h1>
      <p>An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-4 underline">
        Try again
      </button>
    </section>
  )
}
