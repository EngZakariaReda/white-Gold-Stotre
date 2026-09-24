import { Diamond, MessageSquare, MessageSquareText, MoveDown, MoveLeft, MoveUpRight, Palette, ShieldCheck, Van } from "lucide-react";
import AdvantageCard from "../../Components/Dynamic/AdvantageCard";
import Button from "../../Components/Dynamic/Button";
import StatusCard from "../../Components/Dynamic/StatusCard";
import { homeDesignFeatures, homeFeatures, homeTshirtPantalon } from "../../Data/data";
import { Link } from "react-router";
import ProductCard from "../../Components/Dynamic/ProductCard";
import { sendMessageViaWattsApp } from "../../Utils/SendMessage";

export default function Home() {
  return (
    <>
      <main className="py-10 px-2 bg-(--lighterbackground) flex flex-col gap-3">
        <StatusCard>
          منظومة إنتاج راقية 
        </StatusCard>

        <h2 className="text-3xl font-extrabold text-white flex gap-2">
           تصنيع ملابس بجودة 
          <span className="text-(--secondary-text) ">
            تليق بعلامتك
          </span>
        </h2>

        <p className="text-(--secondary-card) text-md">
           نقدم حلول تصنيع احترافية للبناطيل والتيشرتات، مع اهتمام بالجودة والتفاصيل وإمكانية التصنيع حسب الطلب.
        </p>

        <div className="flex gap-5 items-center">
           <Link to={"/allproducts"} >
            <Button className='text-black bg-(--primary)'>
              استكشف منتجاتنا
                <span>
                  <MoveDown />
                </span>
            </Button>
           </Link>

           <a 
              href="https://wa.me/201027909599"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Button className='text-white bg-(--backgroundcard)  border border-(--primary)'>
              تواصل معنا عبر واتساب 
              <span>
                <MessageSquare className="text-(--secondary-text)" />
              </span>         
            </Button>
          </a>

        </div>

        <div className="mt-10 pt-10 flex justify-between items-center border border-t-(--primary)">
          <p className='text-white flex items-center gap-2'>
            <Diamond size={14} className='text-(--primary)' />
            جودة عالية
          </p>

          <p className='text-white flex items-center gap-2'>
            <Diamond size={14} className='text-(--secondary)' />
            إنتاج كميات 
          </p>

          <p className='text-white flex items-center gap-2'>
            <Diamond size={14} className='text-(--secondary)' />
             تصنيع حسب الطلب
          </p>
        </div>

      </main>

      <section>

        <div className="flex flex-col gap-1 my-4 px-2">
            <p className="text-(--secondary-text)"> خطوط الإنتاج المتخصصة </p>
            <h2 className="text-2xl font-bold text-white">  التصنيفات الرائدة للمصنع</h2>
        </div>

        {
          homeTshirtPantalon.map(item => (
            <div key={item.id} className="relative">
              <div className="h-70">
                <img src={item.image} alt="customize photo" className='w-full h-full object-cover mt-5'/>
              </div>

              <div className='bg-(--backgroundcard) px-2 py-6 mt-0 flex flex-col gap-3'>
                  <div className="flex items-center justify-between">
                    <p className='text-white text-xl font-bold'> {item.title}</p>
                    <p className='text-(--secondary-card) text-sm'> {item.types} </p>
                  </div>

                  <p className='text-(--secondary-card)'> 
                    {item.description}
                  </p>

                  <Link to={"/product"} className="flex gap-2 items-center text-(--secondary-text)" >
                    {item.link}
                    <MoveLeft />
                  </Link>
              </div>

              <span className="py-2 px-4 border border-(--primary) text-(--secondary-card) bg-(--lighterbackground) absolute top-5 right-5">
                {item.positionText}
              </span>
           </div>
          ))
        }


      </section>   
      
      <section>
        <div className='px-2 py-4 flex flex-col gap-2 bg-(--lighterbackground)'>
            <div className="flex justify-between items-center">
              <p className="text-(--secondary-text) text-sm">
                عينات الموديلات
              </p>

              <p className="text-(--secondary-card) text-sm">
                  مواصفات قياسية
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white"> 
             منتجات مختارة            
            </h2>

            <p className="text-(--secondary-card) text-md">
               نماذج جاهزة للاطلاع على جودة الحياكة والتشطيب والخامات الفاخرة.
            </p>
          </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 my-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div> */}
      </section>

      <section>
        <div className="my-10">
          <div className='p-2'>
            <p className="text-(--secondary-text) text-sm">
            معايير التميز
            </p>

            <h2 className="text-2xl font-bold text-white"> 
                لماذا تختار مصنعنا؟   
            </h2>

            <p className="text-(--secondary-card) text-md">
            الجمع بين حرفية التفصيل اليدوي وسرعة خطوط الإنتاج الصناعي الكبرى.
            </p>
          </div>

          <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-3 p-2 my-3'>
              {
                homeFeatures.map((step) => (
                    <AdvantageCard card={step} key={step.title} className={"var(--backgroundcard)"} />
                ))
              }
          </div>
        </div>
      </section>

      <section>
        <div className="my-10">

          <div className='flex flex-col gap-3 px-2 relative'>

            <img src="src/assets/homefactory.png" alt="homefactory photo" className='w-full h-70 object-cover mt-5'/>

            <p className="text-(--secondary-text) text-sm">
              فلسفتنا في الصناعة
            </p>

            <h2 className="text-2xl font-bold text-white"> 
              شريكك الصناعي لبناء علامة أزياء تدوم    
            </h2>

            <p className="text-(--secondary-card)">
              تأسست دار الحرف لتسد الفجوة بين الأناقة المترفة والإنتاجية الصناعية المكثفة. نحن لا نصنع الملابس فحسب، بل نهندس ملمس القطعة وطريقة سقوطها على الجسد لتمنح عملاء علامتك شعوراً بالفخامة الفورية منذ اللمسة الأولى.
            </p>

            <span className="py-2 px-4 border border-(--primary) text-(--secondary-card) bg-(--lighterbackground) absolute top-60 right-5">
                <bdi>White Gold</bdi>   للمصنوعات الفاخرة
            </span>
          </div>

          <span className="text-(--secondary-text) mt-3 inline-flex items-center gap-2 border-b border-b-(--secondary-text) p-2">
              تعرف علينا أكثر وعقد شراكة
              <MoveUpRight />
          </span>

        </div>
      </section>

       <section>
        <div className='flex flex-col gap-3 bg-(--backgroundcard) px-2 py-10 my-15'>

          <p className="text-(--secondary-text) text-sm">
                خدمات الـ <bdi>Private Label</bdi>
          </p>

          <h2 className="text-2xl font-extrabold text-white">   
            لديك تصميم خاص؟
          </h2>

          <p className="text-(--secondary-card)">  
            نحول رؤيتك الإبداعية إلى خطوط إنتاج جاهزة للبيع بالتجزئة، مع تخصيص كامل لكل تفصيلة دقيقة في القطعة.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-5"> 
            {
              homeDesignFeatures.map((item , index) => (
                <div key={index} className="flex gap-2 items-center bg-(--body) py-3 px-2">
                  {item.icon}
                  <span className="text-white">
                   {item.arabic}
                  </span>
                </div>
              ))
            }
          </div>

          <Button 
            className='text-black bg-(--primary) mt-5'
            onClick={() => sendMessageViaWattsApp("اريد ان انفذ تصميم خاص لدي")}
          >
              تحدث معنا عبر واتساب لمناقشة تصميمك
                <span>
                  <MessageSquareText />
                </span>
          </Button>

        </div>
      </section>

      <section className="bg-(--lighterbackground)">
        <div className="lg:w-1/2 w-full flex flex-col mx-auto text-center gap-5 py-10 px-2">

          <div className='bg-(--secondary) w-15 h-0.5 mx-auto'></div>

          <h2 className="text-2xl font-extrabold text-white">
            جاهز لبدء طلبك؟   
          </h2>

          <p className="text-(--secondary-card)"> 
            فريقنا الهندسي جاهز لاستلام المواصفات وتزويدك بعينة أولية وعرض سعر مخصص لعلامتك. 
          </p>

          <p className="text-(--secondary-text) text-sm">
               رد سريع خلال ساعات العمل الرسمية
          </p>

          <Button 
            className='text-black bg-(--primary) mx-auto'
            onClick={() => sendMessageViaWattsApp("")}
          >
              تحدث معنا عبر واتساب لمناقشة تصميمك
                <span>
                  <MessageSquareText />
                </span>
          </Button>
        </div>
      </section>
    </>
  )
}
