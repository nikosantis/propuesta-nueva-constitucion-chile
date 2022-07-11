import { ReactNode } from '@mdx-js/react/lib'
import { NextSeo } from 'next-seo'

import Content from 'components/content'
import Header from 'components/header'
import MobileMenu from 'components/mobile-menu'
import Menu from './menu'

type LayoutMdxProps = {
  children: ReactNode
}

export default function LayoutMdx({ children }: LayoutMdxProps) {
  return (
    <>
      <NextSeo
        title='Propuesta Constitución Política de la República de Chile'
        description='Sitio para leer la Propuesta Constitución Política de la República de Chile.'
      />
      <div className='w-full h-full scroll-smooth'>
        <div className='min-h-[calc(100vh-48px)] lg:min-h-screen h-full'>
          <Header />
          <main
            className='mx-auto bg-white dark:bg-slate-900 transition-colors'
            role='main'
          >
            <Content>{children}</Content>
          </main>
        </div>
        <MobileMenu />
        <Menu />
      </div>
    </>
  )
}
