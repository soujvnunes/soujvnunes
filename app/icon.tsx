import { ImageResponse } from 'next/og'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function RootIcon() {
  const googleSansBold = await readFile(join(process.cwd(), 'app/googlesans-bold.otf'))

  return new ImageResponse(
    <div
      tw="flex items-center justify-center w-full h-full text-[#FFFBF4] text-[1.5rem] rounded-lg"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #100A01, #1F1402)',
      }}>
      <span
        style={{
          letterSpacing: '-.2em',
          color: '#6366F1',
        }}>
        j
      </span>
      <span
        style={{
          color: '#F59E0B',
        }}>
        v
      </span>
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
