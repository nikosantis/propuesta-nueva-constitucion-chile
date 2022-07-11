import { BiHomeAlt } from 'react-icons/bi'
import FontSizeButton from './font-size-button'
import InfoButton from './info-button'
import SettingsButton from './settings-button'

export default function MobileMenu() {
  return (
    <nav className='fixed w-full bottom-0 h-12 bg-white dark:bg-slate-800 shadow-lg shadow-black dark:shadow-white transition-colors lg:hidden'>
      <div className='flex w-full h-full'>
        <div className='flex-1'>
          <button
            className='w-full h-full flex justify-center items-center'
            onClick={() => {
              if (window !== undefined) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <BiHomeAlt />
          </button>
        </div>
        <div className='flex-1'>
          <FontSizeButton />
        </div>
        <div className='flex-1'>
          <SettingsButton />
        </div>
        <div className='flex-1'>
          <InfoButton />
        </div>
      </div>
    </nav>
  )
}
