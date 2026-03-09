import { ImageResponse } from 'next/og'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export function generateImageMetadata() {
  return [
    { contentType: 'image/png', size: { width: 16, height: 16 }, id: '16' },
    { contentType: 'image/png', size: { width: 32, height: 32 }, id: '32' },
    { contentType: 'image/png', size: { width: 48, height: 48 }, id: '48' },
    { contentType: 'image/png', size: { width: 192, height: 192 }, id: '192' },
    { contentType: 'image/png', size: { width: 512, height: 512 }, id: '512' },
  ]
}

export default async function RootIcon({ id }: { id: Promise<string> }) {
  const googleSansBold = await readFile(join(process.cwd(), 'app/googlesans-bold.otf'))
  const size = Number(await id)

  return new ImageResponse(
    <div
      tw="flex items-center justify-center w-full h-full"
      style={{
        fontSize: `${Math.round(size * 0.75)}px`,
        borderRadius: `${Math.round(size / 8)}px`,
        backgroundImage: 'linear-gradient(to bottom right, #100A01, #1F1402)',
      }}>
      <span tw="relative text-[#F59E0B]">
        <span tw="absolute text-[#6366F1] -left-[10%]">j</span>v
      </span>
    </div>,
    {
      width: size,
      height: size,
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
