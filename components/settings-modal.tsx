import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import cx from 'clsx'

import Modal, { ModalProps } from './modal'

export default function SettingsModal({
  isOpen,
  onClose
}: Omit<ModalProps, 'children' | 'title'>) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Configuración'>
      <div className='w-full'>
        <div className='w-full mb-2'>
          <DarkMode />
        </div>
      </div>
    </Modal>
  )
}

function DarkMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const handleChange = (to: boolean) => {
    if (!to) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <Switch.Group>
      <div className='flex items-center'>
        <Switch.Label className='mr-4 text-sm text-slate-700 font-medium'>
          Modo oscuro
        </Switch.Label>
        <Switch
          checked={resolvedTheme === 'dark'}
          onChange={handleChange}
          className={cx(
            resolvedTheme === 'dark' ? 'bg-slate-900' : 'bg-slate-500',
            'relative inline-flex h-[28px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
            'transition-all'
          )}
        >
          <span className='sr-only'>Modo oscuro</span>
          <span
            aria-hidden='true'
            className={cx(
              resolvedTheme === 'dark' ? 'translate-x-[36px]' : 'translate-x-0',
              'pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}
