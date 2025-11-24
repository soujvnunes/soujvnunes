import Image from 'next/image'
import {
  Page,
  Main,
  Intro,
  Ctas,
  PrimaryLink,
  SecondaryLink,
  logo,
} from './page.css'

export default function Home() {
  return (
    <Page>
      <Main>
        <Image
          className={logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Intro>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{' '}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              Templates
            </a>{' '}
            or the{' '}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              Learning
            </a>{' '}
            center.
          </p>
        </Intro>
        <Ctas>
          <PrimaryLink
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className={logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </PrimaryLink>
          <SecondaryLink
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Documentation
          </SecondaryLink>
        </Ctas>
      </Main>
    </Page>
  )
}
