import { ReactNode } from '@mdx-js/react/lib'
import { createContext, useContext, useState } from 'react'

interface ReaderContext {
  changeFontSize: (to: FontSizeType) => void
  fontSize: FontSizeType
}

const ReaderContext = createContext<ReaderContext>({} as ReaderContext)

export type FontSizeType = 'base' | 'lg' | 'xl' | 'sm'

type ReaderProviderProps = {
  children: ReactNode
}

function ReaderProvider({ children }: ReaderProviderProps) {
  const [fontSize, setFontSize] = useState<FontSizeType>('base')

  const changeFontSize = (to: FontSizeType) => setFontSize(to)
  return (
    <ReaderContext.Provider value={{ changeFontSize, fontSize }}>
      {children}
    </ReaderContext.Provider>
  )
}

function useReader() {
  const context = useContext(ReaderContext)
  if (context === undefined) {
    throw new Error('useReader must be used within a ReaderProvider')
  }
  return context
}

export { ReaderProvider, useReader }
