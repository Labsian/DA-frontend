import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSlideshow = ({ slides, onSlideChange }) => {
  return (
    <main className="flex flex-col items-center w-screen">
      <div className="w-full flex justify-center items-center bg-white">
        <Swiper
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          onSlideChange={onSlideChange}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            // slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="w-[60%] max-w-3xl relative "
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="w-64 h-40 bg-white flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={slide.path}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};
