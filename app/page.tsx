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
      <main className="flex min-h-screen w-full flex-col items-start justify-between py-margin px-padding">
        <div className="text-center">
          <Headline>Lemme bring your ideas to life on the web!</Headline>
          <Subtitle>
            Explore my previous projects and get in touch to discuss how we can
            collaborate.
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
        <div className="flex flex-row w-full max-w-[440px] gap-4">
          <a
            className="flex justify-center items-center h-10 px-4 rounded-full border border-transparent transition-ease cursor-pointer w-fit text-caption uppercase font-bold tracking-wide bg-ground-fore text-ground-back gap-2 hover:bg-main"
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
            className="flex justify-center items-center h-10 px-4 rounded-full border border-transparent transition-ease cursor-pointer w-fit text-caption uppercase font-bold tracking-wide hover:opacity-80"
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
