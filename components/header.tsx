import EscudoCl from './brand/escudo-cl'
import LogoNc from './brand/logo-nc'
import Nc from './brand/nc'
import Propuesta from './brand/propuesta'
import Year from './brand/year'

export default function Header() {
  return (
    <header className='w-full min-h-[calc(100vh-48px)] lg:min-h-screen h-full bg-nc flex flex-col pb-16 pt-16 justify-between'>
      <div className='flex flex-col w-full h-full items-center'>
        <div className='w-full flex flex-col'>
          <div className='flex justify-center items-center mb-5'>
            <LogoNc size={100} />
          </div>
          <div className='flex justify-center items-center mb-2'>
            <Propuesta width={100} />
          </div>
          <div className='flex justify-center items-center mb-2'>
            <Nc width={200} />
          </div>
          <div className='flex justify-center items-center'>
            <Year width={60} />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <EscudoCl width={90} />
      </div>
    </header>
  )
}
