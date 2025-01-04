import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CarouselContent from "./CarouselContent";
import CarouselSkeleton from "./CarouselSkeleton";
import useGetSwiperData from "../../../hooks/useSwiper/useGetSwiperData";

function HomeCarousel() {
  const { data, isLoading, isError } = useGetSwiperData();
  
  if (isError)
    return (
      <div className="text-center text-red-500 py-2">
        Something went wrong!!!
      </div>
    );

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
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CarouselSkeleton />
              </SwiperSlide>
            ))
          : data.map((item) => (
              <SwiperSlide key={item.id}>
                <CarouselContent
                  img={item.picture}
                  reading={item.time}
                  title={item.title}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}

export default HomeCarousel;
