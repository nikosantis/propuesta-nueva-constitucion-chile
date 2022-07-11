import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'
import cx from 'clsx'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  end?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  end
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div
            className={cx(
              'flex min-h-full justify-center p-4 text-center pb-16',
              end ? 'items-end' : 'items-center'
            )}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative'>
                <Dialog.Title
                  as='h3'
                  className='text-md font-semibold leading-6 text-slate-900 mb-1'
                >
                  {title}
                </Dialog.Title>
                <div className='absolute right-4 top-3 text-gray-900'>
                  <button onClick={onClose}>
                    <IoClose size={26} />
                  </button>
                </div>
                <div className='w-full text-gray-900'>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
