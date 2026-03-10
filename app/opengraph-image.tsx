import { createSocialImage } from '@/shared/lib/og'

export const contentType = 'image/png'
export const alt = process.env.META_DESCRIPTION
export const size = {
  width: 1200,
  height: 630,
}

export default function RootOpengraphImage() {
  return createSocialImage(size)
}
