import { MessageSquareText } from 'lucide-react'

export default function Button({children , className , ...rest}) {
  return (
    <button {...rest} className={`flex gap-2 items-center justify-center p-4 font-bold outline-none cursor-pointer ${className}`}>
        {children}
    </button>
  )
}
