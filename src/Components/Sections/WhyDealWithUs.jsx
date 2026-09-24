import React from 'react'
import { ourAdvantages } from '../../Data/data'

export default function WhyDealWithUs() {
  return (
    <section className="px-2">
      <div className="flex flex-col gap-1 my-8">
            <p className="text-(--secondary-text)"> معايير الدار الفاخرة </p>
            <h2 className="text-2xl font-bold text-white">  لماذا التصنيع معنا؟</h2>
            <p className="text-(--secondary-card) text-sm">  شريكك الصناعي الموثوق لتأسيس وتوسيع علامتك التجارية في قطاع الأزياء. </p>
        </div>

        {
            ourAdvantages.map((step) => (
                <div key={step.number} className='w-full flex justify-between p-3 bg-(--backgroundcard) my-3'>

                    <div className='flex flex-1 flex-col justify-start gap-1'>

                        <div className='w-10 h-10 bg-[#353534] text-(--secondary-text) border-none flex justify-center items-center'>
                            {step.icon}
                        </div>
                        <h2 className='text-white text-xl font-bold'>{step.title}</h2>
                        <p className='text-(--secondary-card)'>{step.description}</p>
                    </div>

                    <div className='w-20 flex justify-end'>
                        <p className='text-(--secondary-text) text-sm flex'>{step.number} / {step.category}</p>
                    </div>

                </div>
            ))
        }
    </section>
  )
}
