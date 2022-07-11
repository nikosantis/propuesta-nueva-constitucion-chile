import { BiHomeAlt } from 'react-icons/bi'

export default function HomeButton() {
  return (
    <button
      className='w-full h-full flex justify-center items-center lg:bg-slate-800 lg:hover:bg-slate-600 transition-colors'
      onClick={() => {
        if (window !== undefined) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
    >
      <BiHomeAlt className='dark:text-white text-slate-900 lg:text-slate-200 transition-colors' />
    </button>
  )
}
