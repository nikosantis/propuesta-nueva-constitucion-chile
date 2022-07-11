import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'

import SettingsModal from './settings-modal'

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='w-full h-full flex justify-center items-center lg:bg-slate-800 lg:hover:bg-slate-600 transition-colors'
        onClick={() => setIsOpen(true)}
      >
        <FiSettings className='dark:text-white text-slate-900 lg:text-slate-200 transition-colors' />
      </button>
      <SettingsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
