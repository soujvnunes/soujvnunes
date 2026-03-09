import Image from 'next/image'

import memojiFallback from '@/shared/assets/memoji-fallback.svg'

import { cn } from '../utils/shadcn'

import { MemojiVideo } from './ui/MemojiVideo'

export const Memoji = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('inline-flex h-32 w-32 items-center justify-center overflow-hidden', className)}
    {...props}>
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
  </div>
)
