import { ImageResponse } from 'next/og'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const contentType = 'image/png'
export const alt = process.env.META_DESCRIPTION
export const size = {
  width: 1200,
  height: 630,
}

export default async function RootOpengraphImage() {
  const googleSansBold = await readFile(join(process.cwd(), 'app/googlesans-bold.otf'))

  return new ImageResponse(
    <div
      tw="flex flex-col justify-center p-10 w-full h-full text-[#FFFBF4] items-end"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #100A01, #1F1402)',
      }}>
      <h1 tw="text-[4rem] -mr-1 relative my-0">
        <div tw="bottom-1 right-0 left-0 bg-[#d97706] absolute h-1 rounded-sm -z-1 mr-8" />
        <span tw="z-1">
          <span tw="text-[#FFFBF4]/40">https://</span>
          sou
          <span
            tw="text-[#6366F1] tracking-[-0.2em]"
            style={{
              letterSpacing: '-.2em',
            }}>
            j
          </span>
          <span tw="text-[#F59E0B]">v</span>
          nun.es
        </span>
        <svg
          fill="none"
          width="40"
          height="40"
          stroke="#F59E0B"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          // @ts-expect-error Not implemented
          tw="absolute -right-2 -bottom-4"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M14 4.1 12 6" />
          <path d="m5.1 8-2.9-.8" />
          <path d="m6 12-1.9 2" />
          <path d="M7.2 2.2 8 5.1" />
          <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
        </svg>
      </h1>
      <p tw="text-[2.5rem] text-[#FFFBF4]/40">Victor Nunes • Senior Frontend Engineer</p>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Sofia Pro',
          data: googleSansBold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
