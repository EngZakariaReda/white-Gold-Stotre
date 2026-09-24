import React from 'react'
import StatusCard from '../../Components/Dynamic/StatusCard'
import { CircleCheck, ClockAlert, Factory, MessageSquareText, MessagesSquare, RadioReceiverIcon } from 'lucide-react'
import { contactData } from '../../Data/data'
import Button from '../../Components/Dynamic/Button'
import { sendMessageViaWattsApp } from '../../Utils/SendMessage'

export default function Contact() {
  return (
    <>
      <section className='px-2 py-5'>
        <div className='flex flex-col gap-3'>
          <StatusCard>
            خطوط الإنتاج والتوريد مفتوحة  
          </StatusCard>

          <h2 className='text-3xl text-white font-bold'>
            تواصل معنا        
          </h2>

          <p className='text-(--secondary-card) lg:w-1/3 text-xl'>
            يسعدنا الرد على استفساراتك ومساعدتك في معرفة تفاصيل المنتجات والتصنيع حسب الطلب.            
          </p>

          <p className='bg-(--secondary) w-15 h-0.5'></p> 

        </div>
      </section>

      <section className="my-5 p-2">
        <div className='flex flex-col gap-3 border border-(--primary) p-8 relative'
          style={{
            background: `
              linear-gradient(
                90deg,
                color-mix(in srgb, var(--primary-color) 8%, var(--body-color)) 0%,
                var(--backgroundcard-color) 30%,
                var(--lighterbackground-color) 55%,
                color-mix(in srgb, var(--backgroundcard-color) 85%, white) 100%
              )
            `,
          }}
        >

          <div className='flex items-center gap-3'>
            <CircleCheck className='text-(--secondary-text)' size={18}/>
            <p className='text-(--secondary-text)'>قناة التوريد والتعاقد السريع</p>
          </div>

          <div className='w-15 h-15 absolute top-0 left-0 translate-x-8 translate-y-8 bg-(--body) text-(--secondary) border-none flex justify-center items-center'>
            <MessagesSquare size={26} />
          </div>

          <h2 className="text-2xl font-extrabold text-white">   
           تواصل معنا عبر واتساب     
          </h2>

          <p className="text-(--secondary-card) text-xl">  
            للاستفسار عن المنتجات والكميات والتصنيع حسب الطلب.
          </p>

          <Button 
            className='text-black bg-(--primary) mx-auto w-full'
            onClick={() => sendMessageViaWattsApp("")}
          >
                <span>
                  <MessageSquareText  />
                </span>
                 تواصل معنا عبر واتساب    
          </Button>

          <div className="text-(--secondary-card) flex items-center justify-between"> 
            <p className='flex items-center gap-2'>
              <span className='bg-green-500 w-2 h-2 border-full rounded-full'></span>
              متوسط سرعة الرد: أقل من 15 دقيقة
            </p> 

            <p className='flex items-center gap-3'>
              دعم فني وتنسيق  
            </p> 
          </div>

        </div>
      </section>

      <section className="my-5 p-2 bg-(--lighterbackground)">
        <h2 className="text-xl font-bold text-white">   
          معلومات وقنوات الاتصال    
        </h2>

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            {
              contactData.map(item => (

                <div key={item.id} className='bg-(--body) p-6 flex flex-col gap-2 hover:border border-(--secondary-text)'>

                  <div className='flex items-center justify-between'>
                    <p className='text-(--secondary-text)'> 
                      {item.title}
                    </p>
                    <div className='w-15 h-15 bg-(--backgroundcard) text-(--secondary-text) flex justify-center items-center'>
                      {item.icon}
                    </div>
                  </div>

                  <h2 className='text-white text-xl font-bold'>
                   <bdi>
                    {item.value}
                   </bdi>
                  </h2>
                  
                  <p className='text-(--secondary-card)'>
                      {item.description}
                  </p>

                  <button className='bg-(--backgroundcard) flex items-center gap-2 p-4 justify-center w-full hover:border border-(--secondary-text)'>
                    {item.actionIcon}
                    <span className='text-white text-xl'>
                     {item.actionText}
                    </span>
                  </button>
                </div>
              ))
            }

            <div className='bg-(--body) p-6 flex flex-col gap-2 hover:border border-(--secondary-text)'>
                <div className='flex items-center justify-between'>
                  <p className='text-(--secondary-text)'> 
                    عنوان المصنع
                  </p>
                  <div className='w-15 h-15 bg-(--backgroundcard) text-(--secondary-text) flex justify-center items-center'>
                    <Factory />
                  </div>
                </div>

                <h2 className='text-white text-xl font-bold'>
                  قليوب محافظه القليوبيه
                </h2>
                
                <div className='flex items-center gap-2 text-(--secondary-text)'>
                  <RadioReceiverIcon size={18} />
                  <span >
                    استلام وتوريد عينات الخامات بالأسبوعية
                  </span>
                </div>
            </div>

            <div className='bg-(--body) p-6 flex flex-col gap-2 hover:border border-(--secondary-text)'>
                <div className='flex items-center justify-between'>
                  <p className='text-(--secondary-text)'> 
                    مواعيد العمل 
                  </p>
                  <div className='w-15 h-15 bg-(--backgroundcard) text-(--secondary-text) flex justify-center items-center'>
                    <Factory />
                  </div>
                </div>

                <h2 className='text-white text-xl font-bold'>
                    السبت – الخميس: 8:00 ص – 5:30 م
                </h2>
                
                <div className='flex justify-between items-center text-(--secondary-text)'>
                  <p>
                    الجمعة : مغلق (عطلة أسبوعية)
                  </p>

                  <span>
                    الواتساب متاح دائماً
                  </span>
                </div>
            </div>
        </div>

      </section>

      <section className='my-10 px-2'>
        <h2 className="text-xl font-bold text-white">موقع المصنع التقديري</h2>
        <p className="text-(--secondary-card)">المركز اللوجستي وإدارة الجودة والفحص</p>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.850645751967!2d31.216751801911414!3d30.173918598095852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14586ba55e2fd19f%3A0xdd78e5f19fed108e!2z2YLZhNmK2YjYqNiMINmF2K_ZitmG2Kkg2YLZhNmK2YjYqNiMINmC2LPZhSDZgtmE2YrZiNio2Iwg2YXYrdin2YHYuNipINin2YTZgtmE2YrZiNio2YrYqQ!5e0!3m2!1sar!2seg!4v1790036124495!5m2!1sar!2seg"
        className="w-full h-100 border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      </section>
    </>
  )
}
