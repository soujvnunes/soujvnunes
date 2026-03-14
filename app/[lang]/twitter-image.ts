import { createSocialImage } from '@/shared/lib/og'

export const contentType = 'image/png'
export const alt = process.env.META_DESCRIPTION
export const size = {
  width: 1200,
  height: 600,
}

export default function RootTwitterImage() {
  return createSocialImage(size)
}
