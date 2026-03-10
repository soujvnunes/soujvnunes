'use client'

import type { SuspenseProps } from 'react'
import { useReducer } from 'react'

import { cn } from '@/shared/utils/shadcn'

type State = {
  canPlay: boolean
  isPaused: boolean
  isPlaying: boolean
}
type Action =
  | { type: 'PAUSE' }
  | { type: 'PLAYING' }
  | { type: 'CAN_PLAY' }
  | { type: 'LOOP' }
  | { type: 'ENDED' }

const initialState: State = {
  isPlaying: false,
  canPlay: false,
  isPaused: false,
}
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PAUSE':
      return { ...state, isPaused: true }
    case 'PLAYING':
      return { ...state, isPlaying: true, isPaused: false }
    case 'CAN_PLAY':
      return { ...state, canPlay: true }
    case 'LOOP':
      return { ...state, isPaused: false }
    case 'ENDED':
      return { ...state, isPlaying: false }
    default:
      return state
  }
}

export type MemojiVideoProps = React.ComponentProps<'video'> & SuspenseProps

export const MemojiVideo = ({ fallback, className, ...props }: MemojiVideoProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const loading = (state.canPlay && state.isPaused) || !state.isPlaying

  return (
    <>
      <video
        muted
        autoPlay
        playsInline
        preload="none"
        crossOrigin="anonymous"
        onPause={() => dispatch({ type: 'PAUSE' })}
        onPlaying={(event) => {
          if (!state.isPlaying) {
            event.currentTarget.currentTime = 0
          }

          dispatch({ type: 'PLAYING' })
        }}
        onCanPlayThrough={() => dispatch({ type: 'CAN_PLAY' })}
        onEnded={(event) => {
          const video = event.currentTarget

          dispatch({ type: 'LOOP' })

          video.currentTime = 7
          video.play().catch(() => {
            video.currentTime = 0
            dispatch({ type: 'ENDED' })
          })
        }}
        className={cn(
          'h-full scale-150',
          {
            'pointer-events-none opacity-0': loading,
          },
          className,
        )}
        {...props}
      />
      {loading && fallback}
    </>
  )
}
