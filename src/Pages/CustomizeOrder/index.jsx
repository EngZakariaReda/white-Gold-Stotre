import { BookText, MessageSquareText, ShieldCheck, Van } from 'lucide-react'
import Steps from '../../Components/Sections/Steps'
import WhyDealWithUs from '../../Components/Sections/WhyDealWithUs'
import StatusCard from '../../Components/Dynamic/StatusCard'
import { sendMessageViaWattsApp } from '../../Utils/SendMessage'
import Button from '../../Components/Dynamic/Button'

export default function CustomizeOrder() {
  return (
    <>
      <section className="w-full px-2 py-15"
        style={{
          background:
            "linear-gradient(200deg, color-mix(in srgb, var(--primary-color) 15%, transparent) 0%, var(--lighterbackground-color) 50%, var(--body-color) 100%)",
        }}
      >
        <div className="flex flex-col gap-3">
            
            <StatusCard>
                خطوط التصنيع الهندسي 
            </StatusCard>
            <h2 className="text-4xl font-extrabold text-white"> التصنيع حسب الطلب </h2>
            <p className='bg-(--secondary) w-15 h-0.5'></p> 
            <p  className="text-(--secondary-card)">من الفكرة إلى المنتج النهائي — حلول متكاملة لتصنيع الملابس للعلامات التجارية والمتاجر.</p>
        </div>

        <div className='bg-(--lighterbackground) flex justify-center mt-5 gap-3'>
          <div className='bg-(--backgroundcard) flex-1 p-3 border border-[#FFFFFF]'>
            <p className='text-(--secondary-card)'>الحد الأدنى</p>
            <p className='text-(--secondary-text) text-2xl font-extrabold'>100 قطعة</p>
          </div>
           
          <div className='bg-(--backgroundcard) flex-1 p-3 border border-[#FFFFFF]'>
            <p className='text-(--secondary-card)'> مدة العينة</p>
            <p className='text-white text-2xl font-extrabold'>5 - 7 أيام</p>
          </div>
           
          <div className='bg-(--backgroundcard) flex-1 p-3 border border-[#FFFFFF]'>
            <p className='text-(--secondary-card)'> دقة القياس</p>
            <p className='text-(--secondary-text) text-2xl font-extrabold'>99.8%</p>
          </div>
        </div>

      </section>

      <Steps />
      <WhyDealWithUs />

      <section className="my-15 p-2">
        <div className="flex flex-col gap-1">
            <p className="text-(--secondary-text)"> دقة الملمس والتنفيذ </p>
            <h2 className="text-2xl font-bold text-white"> معايير النسيج والتشطيب الفاخر </h2>
            <img src="/customize.png" alt="customize photo" className='w-full h-70 object-cover mt-5'/>
        </div>

        <div className='bg-(--backgroundcard) p-2 mt-0'>
          <div className='flex items-center justify-between py-5 border-b border-(--primary) text-(--secondary-card)'>
            <p>خيوط إيطالية مزدوجة 120s</p>
            <p>درجة المقاومة: AAA</p>
          </div>

          <div className='flex items-center py-5'>
            <div className='flex-1'>
              <p className='text-(--secondary-card)'> أنواع الأقمشة المعتمدة </p>
              <p className='text-white text-xl font-bold'>صوف، قطن جيزة، كتان خام</p>
            </div>

            <div className='flex-1'>
              <p className='text-(--secondary-card)'>  فترة الإنتاج للدفعة</p>
              <p className='text-(--secondary-text) text-xl font-bold'>14 - 21 يوم عمل</p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-15 p-2">
        <div className='flex flex-col gap-3 border border-(--primary) bg-(--lighterbackground) p-4'>

          <StatusCard>
            استقبال طلبات موسم 2026/2027
          </StatusCard>

          <h2 className="text-2xl font-extrabold text-white">   
            ابدأ تصنيع مجموعتك القادمة الآن 
          </h2>

          <p className="text-(--secondary-card) text-xl">  
            فريقنا الفني مستعد لدراسة المواصفات، تقديم استشارة الخامات، وإرسال عروض الأسعار التفصيلية في غضون 24 ساعة.
          </p>

          <Button
            className='text-black bg-(--primary) mt-5'
            onClick={() => sendMessageViaWattsApp("اريد طلب تصنيع خاص بى")}
          >
                <span>
                  <MessageSquareText />
                </span>
                تحدث معنا عبر واتساب
          </Button>

          <div className="text-(--secondary-card) flex items-center justify-center gap-5"> 
            <p className='flex items-center gap-3'>
              <ShieldCheck />
              عقود موثقة
            </p> 

            <p className='flex items-center gap-3'>
              <Van />
              شحن محلي وإقليمي
            </p> 
          </div>

        </div>
      </section>
    </>
  )
}
