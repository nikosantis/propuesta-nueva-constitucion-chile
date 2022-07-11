import { ReactNode } from 'react'

type LetterProps = {
  children: ReactNode
}

export default function Letter({ children }: LetterProps) {
  return (
    <span className='transition-colors text-slate-900 dark:text-slate-200'>
      {children}
    </span>
  )
}
