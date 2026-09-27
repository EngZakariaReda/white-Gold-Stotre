import { useState } from 'react'
import { productColors, productionSteps, productQuantities, productSizes } from '../../Data/data'
import AdvantageCard from '../../Components/Dynamic/AdvantageCard'
import Button from '../../Components/Dynamic/Button';
import { sendMessageViaWattsApp } from '../../Utils/SendMessage';
import { MessageSquareText } from 'lucide-react';
import ProductSwiper from '../../Components/Static/ProductSwiper/ProductSwiper';

export default function ProductDetails() {
  const [selectedColor , setSelectedColor] = useState("أسود");
  const [selectedSize , setSelectedSize] = useState("XL");
  const [selectedQuantity , setSelectedQuantity] = useState(50);
  const message = `مرحبًا، أرغب في الاستفسار عن منتج بنطال جبردين كلاسيكي، اللون ${selectedColor} المقاس ${selectedSize} والكمية ${selectedQuantity} قطعة.`;
  return (
    <>
      <section className='bg-(--lighterbackground) py-10 px-2'>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className='flex-1 min-w-0'>
            <ProductSwiper />

            <div className='grid grid-cols-3 mt-8'>
              <div className='flex flex-col gap-2 p-2 items-center border border-(--secondary-text)'>
                <p className="text-(--secondary-card)">
                  معدل الانكماش
                </p>
                <h2 className="md:text-xl text-sm font-extrabold text-(--secondary-text) "> 
                  أقل من 1.2%
                </h2>
              </div>

              <div className='flex flex-col gap-2 p-2 items-center border border-(--secondary-text)'>
                <p className="text-(--secondary-card)">
                  ثبات الصبغة   
                </p>
                <h2 className="md:text-xl text-sm font-extrabold text-(--secondary-text)"> 
                  درجة 4.5+
                </h2>
              </div>

              <div className='flex flex-col gap-2 p-2 items-center border border-(--secondary-text)'>
                <p className="text-(--secondary-card)">
                  خيوط الحياكة
                </p>
                <h2 className="md:text-xl text-sm font-extrabold text-(--secondary-text)"> 
                   Coats بوليستر
                </h2>
              </div>
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-3'>

            <p className="flex gap-3 items-center text-(--secondary-text) text-sm">
             البناطيل  
            </p>

            <h2 className="text-4xl font-extrabold text-(--secondary-text)"> 
              بنطال جبردين كلاسيكي فاخر   
            </h2>

            <p className="text-(--secondary-card) text-xl">
             مصنع من أجود خيوط القطن المعالج لمقاومة التجاعيد، مصمم خصيصاً للعلامات التجارية التي تبحث عن الجودة الفائقة والتفصيل المتقن. يتميز بمتانة استثنائية مع ملمس ناعم وقوام مهيكل يلبي أعلى معايير أزياء النخبة.
            </p>

            <div className='my-10 flex flex-col gap-5'>
              <p className="flex md:flex-row flex-col justify-between items-center text-(--secondary-text)">
                <span className="text-(--secondary-card) text-sm">الخامة والتركيب:</span>
                <span className="text-white text-xl font-bold">قطن جبردين تركي 100% معالج ضد التجاعيد</span>
              </p>

              <p className="flex md:flex-row flex-col justify-between items-center text-(--secondary-text)">
                <span className="text-(--secondary-card) text-sm">الوزن النسيجي:</span>
                <span className="text-white text-center text-xl font-bold">280 غرام/م² <bdi>(Heavyweight Luxury Twill)</bdi></span>
              </p>

              <p className="flex md:flex-row flex-col justify-between items-center text-(--secondary-text)">
                <span className="text-(--secondary-card) text-sm">طاقة الإنتاج الشهري:</span>
                <span className="text-(--secondary-text) text-xl font-bold">15,000 قطعة / شهرياً</span>
              </p>
            </div>

            <div className='bg-(--body) p-8 space-y-10'>

              <div className='space-y-2'>
                <p className="flex justify-between items-center text-(--secondary-text)">
                  <span className="text-white text-sm"> خيارات الألوان المتاحة:</span>
                  <span className="text-(--secondary-text) text-xl font-bold">
                    {selectedColor}
                  </span>
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {
                    productColors.map((color) => (
                      <div key={color.name} className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color.name && "border-2 border-(--secondary)"}`}
                        style={{backgroundColor : color.value}}
                        onClick={() => setSelectedColor(color.name)}
                      ></div>
                    ))
                  }
                </div>
              </div>

              <div className='space-y-2'>
                <p className="flex items-center">
                  <span className="text-white text-sm">خيارات المقاسات:</span>
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {
                    productSizes.map((size) => (
                      <div key={size.name} className={`flex justify-center py-4 font-bold text-xl cursor-pointer text-center ${selectedSize === size.value ? "border-2 border-(--secondary-text) text-(--secondary-text) bg-transparent" : "text-white bg-(--backgroundcard) border-[0.5] border-(--secondary)"}`}
                        onClick={() => setSelectedSize(size.name)}
                      >
                        {size.value}
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className='space-y-2'>
                <p className="flex items-center justify-between">
                  <span className="text-white text-sm">كمية الطلب بالجملة (الحد الأدنى 50 قطعة):</span>
                  <span className="text-(--secondary-text)">
                    تخفيض تصاعدي للكميات <bdi>{selectedQuantity} {"<"} </bdi>  
                  </span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {
                    productQuantities.map((quantity) => (
                      <div key={quantity} className={`flex items-center justify-center gap-2 py-4 font-bold text-xl cursor-pointer text-center ${selectedQuantity === quantity ? "border-2 border-(--secondary-text) text-(--secondary-text) bg-transparent" : "text-white bg-(--backgroundcard) border-[0.5] border-(--secondary)"}`}
                        onClick={() => setSelectedQuantity(quantity)}
                      >
                        <span>{quantity}</span> <span>قطعه</span>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="flex flex-col gap-3 md:flex-row justify-between items-center py-8 px-4 border-[0.5] border-(--secondary) bg-(--backgroundcard)">
                <p className="text-(--secondary-card) text-xl">
                    الكمية المختارة بدقة:   
                </p>

                <div className='flex md:flex-row items-center gap-2'>
                  <button onClick={() => setSelectedQuantity(prev => prev + 5 )} className='w-15 h-15 text-4xl cursor-pointer font-bold flex justify-center items-center text-white hover:text-(--secondary-text) bg-(--lighterbackground) border-[0.5] border-(--secondary)'>
                    +
                  </button>

                  <input
                    type="number"
                    value={selectedQuantity}
                    min="50"
                    step={5}
                    readOnly
                    className='w-30 h-15 flex items-center justify-center text-2xl font-extrabold px-4 border-2 border-(--secondary-text) text-(--secondary-text) focus:outline-0 focus:border-0'
                  />

                  <button onClick={() => setSelectedQuantity(prev => Math.max( prev - 5 , 50))}  className='w-15 h-15 cursor-pointer text-6xl font-bold flex justify-center items-center text-white hover:text-(--secondary-text) bg-(--lighterbackground) border-[0.5] border-(--secondary)'>
                    -
                  </button>
                </div>
                
              </div>
              
              <div className='py-8 px-4 border border-(--secondary) text-center space-y-4 bg-(--backgroundcard)'>

                  <Button 
                    className='text-black bg-(--primary) w-full'
                    onClick={() => sendMessageViaWattsApp(message)}
                  >
                      استفسر عن المنتج عبر واتساب   
                      <span>
                        <MessageSquareText />
                      </span>
                  </Button>

                  <p className="text-[#A38C7C] text-xl">
                    صيغة الرسالة التلقائية المجهزة فورياً:
                  </p>

                  <p className="text-(--secondary-card) text-xl">
                    {message}
                  </p>
              </div>

            </div>

          </div>
        </div>

        <div className='p-2 my-5'>
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
      </section>
    </>
  )
}