import Image from 'next/image'

import memojiFallback from '@/shared/assets/memoji-fallback.svg'

import { MemojiVideo } from './ui/MemojiVideo'

export const Memoji = () => (
  <span className="inline-flex h-32 w-32 items-center justify-center overflow-hidden">
    <MemojiVideo
      src="/memoji.mov"
      fallback={
        <Image
          alt=""
          className="scale-150"
          src={memojiFallback}
        />
      }
    />
  </span>
)
