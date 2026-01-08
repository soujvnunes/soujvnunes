import Image from 'next/image'
import { Headline, Subtitle } from '@/components/ui/typography'

export default function Home() {
  return (
    <>
      <nav>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <aside>socials</aside>
      </nav>
      <div role="feed">
        <ul>
          <li>
            <article>hy</article>
          </li>
        </ul>
      </div>
      <main className="flex min-h-screen w-full flex-col items-start justify-between px-padding py-margin">
        <div className="text-center">
          <Headline>Lemme design & develop you something extraordinary!</Headline>
          <Subtitle>
            Explore my previous projects and get in touch to discuss how we can collaborate.
          </Subtitle>
          <Subtitle>
            Looking for a starting point or more instructions? Head over to{' '}
            <a
              className="font-medium text-main"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              Templates
            </a>{' '}
            or the{' '}
            <a
              className="font-medium text-main"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              Learning
            </a>{' '}
            center.
          </Subtitle>
        </div>
        <div className="flex w-full max-w-110 flex-row gap-4">
          <a
            className="transition-ease flex h-10 w-fit cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-ground-fore px-4 text-caption font-bold tracking-wide text-ground-back uppercase hover:bg-main"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="transition-ease flex h-10 w-fit cursor-pointer items-center justify-center rounded-full border border-transparent px-4 text-caption font-bold tracking-wide uppercase hover:opacity-80"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Documentation
          </a>
        </div>
      </main>
    </>
  )
}
