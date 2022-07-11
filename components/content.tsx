import { ReactNode } from '@mdx-js/react/lib'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className='w-full pb-4 pt-16 px-4 lg:max-w-4xl lg:mx-auto'>
      {children}
    </div>
  )
}
