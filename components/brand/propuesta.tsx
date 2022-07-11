import { memo } from 'react'

type PropuestaProps = {
  width?: number
  height?: number
}

function Propuesta({ width, height }: PropuestaProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={height ? undefined : width ?? '100'}
      height={width ? undefined : height ?? '12'}
      fill='none'
      viewBox='0 0 100 12'
    >
      <path
        fill='#7A6C45'
        d='M0 .174h5.08c2.444 0 4.062 1.462 4.062 3.665 0 2.205-1.618 3.686-4.063 3.703H3.72V5.717h1.19c1.22 0 2.03-.656 2.03-1.652v-.432c0-.982-.81-1.636-2.03-1.636H2.117v9.8H0V.173zM16.053 5.595c1.137 0 1.895-.654 1.895-1.635v-.363c0-.962-.758-1.6-1.895-1.6h-2.927v3.598h2.927zM11.008.173h5.01c2.411 0 3.995 1.445 3.995 3.599 0 1.498-.776 2.669-2.082 3.218l3.099 4.806-2.48.015-2.72-4.44h-2.704v4.425h-2.118V.173zM27.457 10.125c2.134 0 3.545-1.586 3.545-3.977v-.329c0-2.374-1.41-3.977-3.545-3.977s-3.548 1.603-3.548 3.977v.329c0 2.391 1.413 3.977 3.548 3.977zm-5.75-4.148c0-3.584 2.29-5.977 5.75-5.977s5.75 2.393 5.75 5.977c0 3.598-2.29 5.99-5.75 5.99s-5.75-2.392-5.75-5.99M35.212.174h5.08c2.446 0 4.064 1.462 4.064 3.665 0 2.205-1.618 3.686-4.064 3.703H38.93V5.717h1.188c1.224 0 2.032-.656 2.032-1.652v-.432c0-.982-.808-1.636-2.032-1.636H37.33v9.8h-2.118V.173zM46.082 7.438V.174h2.117v7.178c0 1.654 1.154 2.772 2.86 2.772 1.722 0 2.857-1.118 2.857-2.772V.174h2.117v7.264c0 2.72-1.979 4.53-4.974 4.53-2.98 0-4.977-1.81-4.977-4.53zM58.452.174h8.368V1.98h-6.25v3.049l5.547.017v1.772l-5.547-.016v3.185h6.355v1.81h-8.473V.173zM68.409 8.85l1.877-.552c.43 1.102 1.635 1.895 3.204 1.895 1.496 0 2.496-.637 2.496-1.585v-.24c0-.964-.947-1.188-2.654-1.498-2.874-.515-4.27-1.17-4.27-3.256 0-2.236 1.793-3.614 4.34-3.614 2.755 0 4.528 1.6 4.528 4.064h-2.032v-.068c0-1.327-.98-2.222-2.478-2.222-1.308 0-2.204.62-2.204 1.532v.207c0 .808 1.05 1.118 2.566 1.378 2.824.5 4.373 1.255 4.373 3.477 0 2.204-1.93 3.599-4.665 3.599-2.603 0-4.547-1.259-5.081-3.116zM82.465 2.033h-3.823V.173h9.746v1.86h-3.805v9.763h-2.118V2.033zM96.126 7.145l-1.981-5.422h-.154l-1.947 5.422h4.082zM92.579.174h2.961l4.46 11.62h-2.186l-1.068-2.927h-5.304l-1.05 2.928h-2.186L92.58.174z'
      />
    </svg>
  )
}

export default memo(Propuesta)
