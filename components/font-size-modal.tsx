import { FontSizeType, useReader } from 'lib/contexts/reader-context'
import Modal, { ModalProps } from './modal'

const numberToFont: Record<string, FontSizeType> = {
  1: 'sm',
  2: 'base',
  3: 'xl',
  4: '2xl'
}

const fontToNumber: Record<FontSizeType, string> = {
  sm: '1',
  base: '2',
  xl: '3',
  '2xl': '4'
}

export default function FontSizeModal({
  isOpen,
  onClose
}: Omit<ModalProps, 'children' | 'title'>) {
  const { changeFontSize, fontSize } = useReader()
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Cambiar tamaño de fuente'
      end
    >
      <div className='w-full'>
        <label
          htmlFor='font-size'
          className='inline-block text-gray-700 text-sm font-semibold mb-3'
        >
          Selecciona el tamaño de fuente
        </label>
        <input
          type='range'
          className='appearance-none w-full bg-blue-500 rounded-md h-[3px]'
          id='customRange1'
          value={fontToNumber[fontSize]}
          min={1}
          max={4}
          step={1}
          onChange={e => changeFontSize(numberToFont[e.target.value])}
        />
      </div>
    </Modal>
  )
}