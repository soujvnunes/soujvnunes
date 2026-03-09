import { ImageResponse } from 'next/og'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default async function RootAppleIcon() {
  const googleSansBold = await readFile(join(process.cwd(), 'app/googlesans-bold.otf'))

  return new ImageResponse(
    <div
      tw="flex items-center justify-center w-full h-full"
      style={{
        fontSize: `${Math.round(size.height * 0.75)}px`,
        borderRadius: `${Math.round(size.height / 8)}px`,
        backgroundImage: 'linear-gradient(to bottom right, #100A01, #1F1402)',
      }}>
      <span tw="relative text-[#F59E0B]">
        <span tw="absolute text-[#6366F1] -left-[10%]">j</span>v
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
