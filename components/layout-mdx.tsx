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
        canonical='https://propuesta-nueva-constitucion-chile.vercel.app/'
        openGraph={{
          type: 'website',
          locale: 'es_ES',
          site_name:
            'Leer la Propuesta Constitución Política de la República de Chile',
          url: 'https://propuesta-nueva-constitucion-chile.vercel.app/',
          title:
            'Sitio Web para leer la Propuesta Constitución Política de la República de Chile',
          description:
            'Sitio para leer la Propuesta Constitución Política de la República de Chile.',
          images: [
            {
              url: 'https://propuesta-nueva-constitucion-chile.vercel.app/nv-og.png',
              width: 1200,
              height: 627,
              alt: 'Sitio para leer la Propuesta Constitución Política de la República de Chile.',
              type: 'image/png'
            }
          ]
        }}
        twitter={{
          handle: '@nikosantise',
          cardType: 'summary_large_image'
        }}
      />
      <div className='w-full h-full scroll-smooth'>
        <div className='min-h-[calc(100vh-48px)] lg:min-h-screen h-full'>
          <Header />
          <main className='mx-auto' role='main'>
            <Content>{children}</Content>
          </main>
        </div>
        <MobileMenu />
        <Menu />
      </div>
    </>
  )
}
