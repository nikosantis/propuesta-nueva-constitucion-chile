import { useState } from 'react'
import { BiInfoCircle } from 'react-icons/bi'

import InfoModal from './info-modal'

export default function InfoButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='w-full h-full flex justify-center items-center lg:bg-slate-800 lg:hover:bg-slate-600 transition-colors'
        onClick={() => setIsOpen(true)}
      >
        <BiInfoCircle className='dark:text-white text-slate-900 lg:text-slate-200 transition-colors' />
      </button>
      <InfoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
