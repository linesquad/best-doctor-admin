import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselContent from "./CarouselContent";

function HomeCarousel() {
  return (
    <div className="my-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.1,
          },
          475: {
            slidesPerView: 1.4,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <CarouselContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
