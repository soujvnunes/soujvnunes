'use client'

import type { SuspenseProps } from 'react'
import { useEffect, useState } from 'react'

import { cn } from '@/shared/utils/shadcn'

export const MemojiVideo = ({
  fallback,
  className,
  ...props
}: React.ComponentProps<'video'> & SuspenseProps) => {
  const [supportsHevc, setSupportsHevc] = useState<boolean | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    const canPlay = video.canPlayType('video/quicktime; codecs="hvc1"')

    setSupportsHevc(canPlay === 'probably' || canPlay === 'maybe')
  }, [])

  if (!supportsHevc) return fallback

  return (
    <video
      muted
      autoPlay
      playsInline
      preload="none"
      crossOrigin="anonymous"
      className={cn('h-full scale-150', className)}
      {...props}
    />
  )
}
