import React from 'react'

export default function StatusCard({children}) {
  return (
   <div className="bg-(--backgroundcard) px-4 py-2 w-fit flex gap-3 items-center border border-(--secondary-text)">
      <span className="bg-(--primary) w-2 h-2 rounded-full"></span>

      <p className="text-(--secondary-text) text-xl">
        {children}
      </p>
    </div>
  )
}
