import { createIconImage } from '@/shared/lib/og'

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
  const size = Number(await id)

  return createIconImage(size)
}
