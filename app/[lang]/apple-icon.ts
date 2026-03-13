import { createIconImage } from '@/shared/lib/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function RootAppleIcon() {
  return createIconImage(size.width)
}
