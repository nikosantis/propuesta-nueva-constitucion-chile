import { useState } from 'react'
import { BiFontSize } from 'react-icons/bi'

import FontSizeModal from './font-size-modal'

export default function FontSizeButton() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='w-full h-full flex justify-center items-center lg:bg-slate-800 lg:hover:bg-slate-600 transition-colors'
        onClick={() => setIsOpen(true)}
      >
        <BiFontSize className='dark:text-white text-slate-900 transition-colors' />
      </button>
      <FontSizeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
