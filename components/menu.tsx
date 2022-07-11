import HomeButton from './home-button'
import FontSizeButton from './font-size-button'
import InfoButton from './info-button'
import SettingsButton from './settings-button'

export default function Menu() {
  return (
    <nav className='hidden lg:fixed lg:right-0 lg:top-[40%] lg:flex w-16 h-60 bg-slate-800 transition-colors'>
      <div className='flex flex-col w-full h-full'>
        <div className='flex-1'>
          <HomeButton />
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
