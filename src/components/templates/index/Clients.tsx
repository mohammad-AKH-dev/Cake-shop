import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import ClientBox from "@/components/modules/index/ClientBox";

function Clients() {
  return (
    <section className="clients-section bg-clients bg-no-repeat bg-cover bg-center lg:bg-left mt-24 p-[100px] min-h-[340px]">
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination,Autoplay]}
          loop
          spaceBetween={50}
          autoplay
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 2
            },
            576: {
              slidesPerView: 3
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            993: {
                slidesPerView: 5
            }
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ClientBox image="/images/logo/clients-1.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <ClientBox image="/images/logo/clients-2.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <ClientBox image="/images/logo/clients-3.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <ClientBox image="/images/logo/clients-4.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <ClientBox image="/images/logo/clients-5.png"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Clients;
