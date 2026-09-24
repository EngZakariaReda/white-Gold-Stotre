import React from 'react'
import { productionSteps } from '../../Data/data'
import AdvantageCard from '../../Components/Dynamic/AdvantageCard'

export default function ProductDetails() {
  return (
    <>
      <div className='p-2'>
        <p className="text-(--secondary-text) text-sm">
          معايير المصنع
        </p>

        <h2 className="text-2xl font-bold text-(--secondary-text)"> 
          مراحل الإنتاج والتوريد المعتمدة
        </h2>
      </div>

      <div className='w-full flex gap-3 flex-col lg:flex-row justify-between p-3 my-5'>
        {
          productionSteps.map((step) => (
              <AdvantageCard card={step} key={step.title} className={"var(--body)"} />
          ))
        }
      </div>
    </>
  )
}


/* 
                <div key={step.number} className='w-full flex justify-between p-3 bg-(--backgroundcard) my-3'>
var(--body)

*/