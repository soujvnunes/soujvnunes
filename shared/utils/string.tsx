import type { ReactNode } from 'react'

export const parseString = (text: string, classMap: Record<string, string>): ReactNode[] => {
  const flags = Object.keys(classMap).join('|')
  // eslint-disable-next-line security/detect-non-literal-regexp
  const regex = new RegExp(`\\{(${flags}):([^}]+)\\}`, 'g')
  const result: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) result.push(text.slice(lastIndex, match.index))

    const [, flag, content] = match
    // eslint-disable-next-line security/detect-object-injection
    const className = Object.hasOwn(classMap, flag) ? classMap[flag] : undefined

    result.push(
      <span
        key={match.index}
        className={className}>
        {content}
      </span>,
    )
    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) result.push(text.slice(lastIndex))

  return result
}
