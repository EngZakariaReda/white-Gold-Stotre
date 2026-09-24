import React from 'react'

export default function AdvantageCard({card , className}) {
  return (
    <div className={`flex flex-1 flex-col justify-start gap-2 p-3`} style={{backgroundColor:className}}>
        <div className='w-10 h-10 bg-[#353534] text-(--secondary-text) border-none flex justify-center items-center'>
            {card.icon}
        </div>
        <h2 className='text-white text-xl font-bold'>
            {card.title}
        </h2>
        <p className='text-(--secondary-card)'>
            {card.description}
        </p>
    </div>
  )
}
