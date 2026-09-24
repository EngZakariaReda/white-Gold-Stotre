import { services, whoAreYouFeatures } from '../../Data/data'
import AdvantageCard from '../../Components/Dynamic/AdvantageCard'
import { Eye, Handshake, MessageSquareText } from 'lucide-react'
import StatusCard from '../../Components/Dynamic/StatusCard'
import Button from '../../Components/Dynamic/Button'
import { sendMessageViaWattsApp } from '../../Utils/SendMessage'

export default function WhoAreYou() {
  return (
    <>

      <section className='flex justify-center py-10 px-2'>
          <div className='flex flex-col gap-5 md:w-2/3 lg:w-1/3 w-full'>

            <div className='mx-auto'>
                <StatusCard>
                   الملف التعريفي والخبرة الصناعية
                </StatusCard>
            </div>

            <h2 className='text-2xl text-white font-bold text-center'>
              من نحن
            </h2>

            <p className='text-(--secondary-card) text-center text-xl'>
              هندسة نسيجية متقنة تدمج فخامة الحياكة الكلاسيكية مع أحدث خطوط الإنتاج الصناعي المؤتمت لخدمة كبرى دور الأزياء والمتاجر العالمية.
            </p>

            <div className='bg-(--backgroundcard) p-3 md:w-120 w-full overflow-hidden border border-(--primary) mx-auto relative'>
              <img src="/factory.png" alt="factory img" className='w-full h-100 object-cover hover:scale-110 transition-transform duration-300 ease-in-out' />
              
              <div className='bg-(--lighterbackground) p-3 absolute w-[90%] translate-y-[-25%] bottom-0 left-[50%] translate-x-[-50%]'>
                <div className='flex justify-between items-center'>
                  <p className='text-(--secondary-text) font-bold text-2xl capitalize'>
                    white gold
                  </p>
                  <p className='text-(--secondary-card)'>
                    <bdi>EST. 2021</bdi>
                  </p>
                </div>

                <p className='text-(--secondary-card)'>
                  حيث تلتقي المهارة اليدوية بدقة الآلات المتطورة
                </p>
              </div>

            </div>

          </div>
      </section>

      <section className='bg-(--lighterbackground) flex justify-center py-10'>
          <div className='flex flex-col gap-3 md:w-2/3 lg:w-1/3 w-full p-2'>

            <div className='flex gap-1 items-center'>
              <p className='bg-(--secondary) w-15 h-0.5'></p> 
              <span className='text-(--secondary-text) text-sm'>
                الجذور والتطور
              </span>
            </div>

            <h2 className='text-2xl text-white font-bold'>
              قصتنا في صياغة الأناقة الصناعية 
            </h2>

            <p className='text-(--secondary-card)'>
            انطلقت <bdi>white gold</bdi> بهدف إرساء معيار غير مسبوق في قطاع تصنيع الملابس الفاخرة للعلامات التجارية وتجار الجملة. رأينا فجوة واضحة بين متطلبات دور الأزياء لقطع استثنائية ذات تشطيب رفيع وبين السرعة والمرونة التي يتطلبها الإنتاج الضخم.
            </p>

            <p className='text-(--secondary-card)'>
            منذ تأسيس مرافقنا، ركّزنا استثماراتنا على استقطاب كبار الحرفيين وتزويد المشاغل بأنظمة القص الآلي بالليزر وأجهزة الخياطة فائقة الدقة. هذا التوازن الدقيق مكّن شركاءنا من إطلاق مجموعات نالت استحسان النخبة، دون التنازل عن معايير الاستدامة والمتانة.
            </p>

            <p className='border-2 border-(--secondary) p-6 text-(--secondary-card) flex items-center gap-4'>
              <span className='font-bold text-2xl text-(--secondary-text)'> وو </span>
              <span className='text-white text-xl'>"لا نصنع مجرد أزياء، بل نبني السمعة التجارية لشركائنا من خلال كل درزة وخيط."</span>
            </p>

          </div>
      </section>

      <section className='py-15 p-2 flex justify-center'>

        <div className={`bg-(--backgroundcard) relative w-full md:w-2/3 lg:w-1/3 border-[0.5px] border-(--primary) flex flex-col justify-start gap-4 p-10`}>
            <div className='w-10 h-10 bg-[#353534] text-(--secondary-text) border-none flex justify-center items-center'>
                <Eye />
            </div>
            <h2 className='text-white text-2xl font-bold'>
                رؤيتنا الصناعية
            </h2>

            <p className='text-(--secondary-text) text-xl'>
                تقديم منتجات ملابس بجودة عالية وتصنيع احترافي يلبي احتياجات العملاء والتجار والعلامات التجارية.
            </p>

            <p className='text-(--secondary-card) text-sm'>
              أن نكون الحليف التصنيعي الأول في الشرق الأوسط لكل علامة أزياء تطمح إلى التميّز المعياري والارتقاء بهوية منتجاتها نحو آفاق عالمية.               
            </p>

            <span className='bg-(--primary) absolute top-0 translate-y-[-50%] w-30 text-center p-1 text-sm border-0 outline-0'>
              الرؤية المستقبلية
            </span>
        </div>

      </section>

      <section className='bg-(--lighterbackground) flex flex-col py-10 gap-3'>

        <div className='flex flex-col gap-1 items-center my-4 p-2'>
          <p className='text-sm text-(--secondary-text)'>ركائز العمل</p>
          <h2 className='text-2xl text-white font-bold'>قيمنا المؤسسية</h2>
          <p className='bg-(--secondary) w-10 h-0.5'></p>
        </div>

        <div className='w-full md:w-2/3 lg:w-1/2 grid lg:grid-cols-2 grid-cols-1 gap-5 p-2 mx-auto'>
          {
            whoAreYouFeatures.map((step) => (
              <AdvantageCard card={step} key={step.title} className={"var(--backgroundcard)"} />
            ))
          }
      </div>
      </section>

      <section className='flex flex-col py-10 gap-2'>

        <div className='w-full md:w-2/3 lg:w-1/2 flex flex-col gap-1 my-4 p-2 mx-auto'>
          <p className='text-sm text-(--secondary-text)'>الكفاءة التشغيلية</p>
          <h2 className='text-2xl text-white font-bold'> إمكانيات المصنع المتطورة</h2>
          <p className='text-(--secondary-card) text-sm'>طاقة تصنيعية متكاملة مصممة لتلبية تطلعات رواد الأعمال وتجار الملابس بالجملة.</p>
        </div>

        <div className='w-full md:w-2/3 lg:w-1/2 grid grid-cols-1 gap-5 p-2 mx-auto'>
          {
              services.map((step) => (
                  <div key={step.title} className='w-full flex p-4 bg-(--backgroundcard)'>
  
                      <div className='flex gap-3'>
                          <div className='w-10 h-10 bg-[#353534] text-(--secondary-text) flex justify-center items-center'>
                              {step.icon}
                          </div>
                          <div className='flex flex-col justify-start gap-1'>
                              <h2 className='text-white text-xl font-bold'>{step.title}</h2>
                              <p className='text-(--secondary-card) text-sm'>{step.description}</p>
                          </div>
                      </div>

                  </div>
              ))
          }
      </div>
      </section>

      <section className='bg-(--lighterbackground) py-10 gap-3 p-2'>

        <div className='flex flex-col gap-3 items-center my-4 p-2'>

          <div className='w-15 h-15 bg-[#353534] text-(--secondary-text) flex justify-center items-center border border-(--primary)'>
            <Handshake className='text-(--secondary) w-8 h-8'/>
          </div>
          <h2 className='text-2xl text-white font-bold'>شريكك الصناعي الموثوق </h2>
          <p className='text-(--secondary-card) text-center'> 
            سواء كنت تؤسس علامتك الخاصة أو تسعى لتوسيع خطوط توريدك الحالية، فريقنا الهندسي والتنفيذي جاهز لبدء الإنتاج وفق أعلى المقاييس.
          </p>

          <Button 
            className='text-black bg-(--primary) mx-auto w-full md:w-1/3'
            onClick={() => sendMessageViaWattsApp("")}
          >
                 تواصل معنا عبر واتساب    
                <span>
                  <MessageSquareText  />
                </span>
          </Button>
        </div>
        
      </section>

    </>
  )
}
