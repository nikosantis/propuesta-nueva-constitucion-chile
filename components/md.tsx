import { ReactNode } from '@mdx-js/react/lib'
import { MDXProvider } from '@mdx-js/react'
import cx from 'clsx'

import { useReader } from 'lib/contexts/reader-context'

type BaseProps = {
  children?: ReactNode
  id?: string
}

function H1({ children }: BaseProps) {
  const { fontSize } = useReader()
  const idText = (children as string)
    .replace(/ /g, '_')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return (
    <h1
      id={idText}
      className={cx(
        {
          'text-2xl': fontSize === 'base',
          'text-xl': fontSize === 'sm',
          'text-3xl': fontSize === 'lg',
          'text-4xl': fontSize === 'xl'
        },
        'mt-0 font-bold'
      )}
    >
      {children}
    </h1>
  )
}

function H2({ children }: BaseProps) {
  const { fontSize } = useReader()
  const idText = (children as string)
    .replace(/ /g, '_')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return (
    <h2
      id={idText}
      className={cx(
        {
          'text-xl': fontSize === 'base',
          'text-lg': fontSize === 'sm',
          'text-2xl': fontSize === 'lg',
          'text-2xl lg:bg-none': fontSize === 'xl'
        },
        'mt-8 mb-5 break-words font-bold'
      )}
    >
      {children}
    </h2>
  )
}

function H3({ children }: BaseProps) {
  const { fontSize } = useReader()
  const idText = (children as string)
    .replace(/ /g, '_')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return (
    <h3
      id={idText}
      className={cx(
        {
          'text-lg': fontSize === 'base',
          'text-base': fontSize === 'sm',
          'text-xl': fontSize === 'lg',
          'text-2xl': fontSize === 'xl'
        },
        'mt-8 mb-5 font-bold'
      )}
    >
      {children}
    </h3>
  )
}

function H4({ children }: BaseProps) {
  const { fontSize } = useReader()
  const idText = (children as string)
    .replace(/ /g, '_')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  return (
    <h4
      id={idText}
      className={cx(
        {
          'text-base lg:text-lg': fontSize === 'base',
          'text-sm lg:text-base': fontSize === 'sm',
          'text-lg lg:text-xl': fontSize === 'lg',
          'text-2xl': fontSize === 'xl'
        },
        'mt-7 mb-5 font-bold text-slate-900 dark:text-slate-200 transition-colors'
      )}
    >
      {children}
    </h4>
  )
}

function P({ children, id }: BaseProps) {
  const { fontSize } = useReader()
  return (
    <p
      id={id}
      className={cx(
        {
          'text-base lg:text-lg': fontSize === 'base',
          'text-sm lg:text-base': fontSize === 'sm',
          'text-lg lg:text-xl': fontSize === 'lg',
          'text-2xl lg:text-2xl': fontSize === 'xl'
        },
        'mb-2 text-slate-700 dark:text-slate-400 transition-colors'
      )}
    >
      {children}
    </p>
  )
}

function Em({ children, id }: BaseProps) {
  return (
    <em id={id} className='italic'>
      {children}
    </em>
  )
}

function Ol({ children, id }: BaseProps) {
  const { fontSize } = useReader()
  return (
    <ol
      id={id}
      className={cx(
        {
          'text-base lg:text-lg': fontSize === 'base',
          'text-sm lg:text-base': fontSize === 'sm',
          'text-lg lg:text-xl': fontSize === 'lg',
          'text-2xl lg:text-2xl': fontSize === 'xl'
        },
        'list-decimal list-inside text-slate-700 dark:text-slate-400 transition-colors'
      )}
    >
      {children}
    </ol>
  )
}

function Li({ children, id }: BaseProps) {
  return (
    <li
      id={id}
      className='mb-2 marker:text-slate-900 marker:dark:text-slate-200 marker:transition-colors'
    >
      {children}
    </li>
  )
}

function Ul({ children, id }: BaseProps) {
  const { fontSize } = useReader()
  return (
    <ul
      id={id}
      className={cx(
        {
          'text-base lg:text-lg': fontSize === 'base',
          'text-sm lg:text-base': fontSize === 'sm',
          'text-lg lg:text-xl': fontSize === 'lg',
          'text-2xl lg:text-2xl': fontSize === 'xl'
        },
        'list-inside text-slate-700 dark:text-slate-400 transition-colors mb-4'
      )}
    >
      {children}
    </ul>
  )
}

function Hr({ id }: BaseProps) {
  return <hr id={id} className='mt-3 mb-4' />
}

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  em: Em,
  ol: Ol,
  ul: Ul,
  li: Li,
  hr: Hr
}

type MdComponentsProviderProps = {
  children: ReactNode
}

export default function MdComponentsProvider({
  children
}: MdComponentsProviderProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
