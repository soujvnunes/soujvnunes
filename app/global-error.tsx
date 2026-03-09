'use client'

import { useEffect } from 'react'

export default function RootGlobalError({
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
    <html lang="en">
      <body className="bg-base text-neutral antialiased">
        <section className="my-10 text-center">
          <p className="text-sm font-semibold tracking-tighter uppercase">Critical Error</p>
          <h1 className="text-4xl leading-none font-bold">Something went wrong</h1>
          <p className="mt-2">A critical error occurred in the application.</p>
          <button
            onClick={reset}
            className="mt-4 underline">
            Try again
          </button>
        </section>
      </body>
    </html>
  )
}
