import Modal, { ModalProps } from './modal'

export default function InfoModal({
  isOpen,
  onClose
}: Omit<ModalProps, 'children' | 'title'>) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Información'>
      <div className='w-full'>
        <p className='text-sm'>
          Desarrollado por: <strong>Nikolas Santis</strong>
        </p>
        <p className='text-sm'>
          Repositorio público:{' '}
          <strong>
            <a href='https://github.com/nikosantis/propuesta-nueva-constitucion-chile'>
              Github
            </a>
          </strong>
        </p>
      </div>
    </Modal>
  )
}
