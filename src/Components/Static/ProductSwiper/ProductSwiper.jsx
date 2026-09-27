import{ useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    "https://swiperjs.com/demos/images/abstract-1.jpg",
    "https://swiperjs.com/demos/images/abstract-2.jpg",
    "https://swiperjs.com/demos/images/abstract-3.jpg",
    "https://swiperjs.com/demos/images/abstract-4.jpg",
    "https://swiperjs.com/demos/images/abstract-5.jpg",
    "https://swiperjs.com/demos/images/abstract-6.jpg",
  ];

return (
  <>
    {/* Main Swiper */}
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2 h-85 md:h-120 overflow-hidden"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Product ${index + 1}`}
            className="w-full h-full object-cover hover:scale-110 duration-300 ease-in-out transition-transform"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Thumbnails Swiper */}
    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={20}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper mt-5"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-30 object-cover cursor-pointer md:h-40"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);
}
