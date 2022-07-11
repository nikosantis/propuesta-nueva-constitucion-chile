import { ReactNode } from 'react'
import cx from 'clsx'

import { useReader } from 'lib/contexts/reader-context'

type CenterProps = {
  children: ReactNode
}

export default function Center({ children }: CenterProps) {
  const { fontSize } = useReader()
  return (
    <div
      className={cx(
        {
          'text-base lg:text-lg': fontSize === 'base',
          'text-sm lg:text-base': fontSize === 'sm',
          'text-lg lg:text-xl': fontSize === 'lg',
          'text-2xl lg:text-2xl': fontSize === 'xl'
        },
        'text-slate-700 dark:text-slate-400 text-center transition-colors mt-1 mb-1'
      )}
    >
      {children}
    </div>
  )
}
