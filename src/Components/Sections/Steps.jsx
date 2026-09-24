import { steps } from "../../Data/data";

export default function Steps() {
  return (
    <section className="px-2">
        <div className="flex flex-col gap-1 my-4">
            <p className="text-(--secondary-text)">مخطط الإنتاج المتسلسل</p>
            <h2 className="text-2xl font-bold text-white">مراحل التنفيذ والهندسة</h2>
        </div>

        {
            steps.map((step) => (
                <div key={step.number} className='w-full flex justify-between p-3 bg-(--backgroundcard) my-3'>

                    <div className='flex gap-3'>
                        <div className='w-10 h-10 bg-[#353534] text-(--secondary-text) border-(--secondary-text) border-2 flex justify-center items-center'>
                            {step.number}
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <h2 className='text-white text-xl font-bold'>{step.title}</h2>
                            <p className='text-(--secondary-card)'>{step.description}</p>
                            <p className='text-[#A38C7C] text-sm'>{step.note}</p>
                        </div>
                    </div>

                    <div>
                        {step.icon}
                    </div>

                </div>
            ))
        }
    </section>
  )
}
