import { dicts } from '@/shared/lib/i18n'

import { Logotype } from '@/shared/components/ui/Logos'

import { RootFooterLocalesItem } from './RootFooterLocalesItem'

const RootFooterLocales = () => (
  <nav>
    <ul className="flex gap-2">
      {dicts.map((dict) => (
        <li key={dict.name}>
          <RootFooterLocalesItem
            name={dict.name}
            locale={dict.locale}
          />
        </li>
      ))}
    </ul>
  </nav>
)
const fullYear = new Date().getFullYear()

export const RootFooter = () => (
  <footer className="mx-auto flex h-10 w-full items-center justify-between px-4 text-center text-neutral-secondary lg:max-w-5xl lg:px-8">
    <p>
      <Logotype /> <span className="inline-block align-bottom text-subtitle leading-4">©</span>{' '}
      <span className="text-caption">{fullYear}</span>
    </p>
    <RootFooterLocales />
  </footer>
)
