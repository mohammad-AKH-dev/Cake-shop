import SectionTitle from "@/components/modules/index/SectionTitle";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ProductBox from "@/components/modules/ProductBox";

function NewProducts() {
  return (
    <section className="new-products__section mt-36 bg-new-products min-h-[400px] bg-auto bg-repeat bg-center bg-[#f7f7f7] pt-24">
      <SectionTitle title="new products" />

      <div className="products-slider container mt-8 pb-16">

      <Swiper pagination={true} modules={[Pagination,Autoplay]} spaceBetween={30} 
      loop className="mySwiper pb-24" autoplay slidesPerView={1} grabCursor
      breakpoints={
        {
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          993: {
            slidesPerView: 4
          }
        }
      } >
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
        <SwiperSlide>
          <ProductBox />
        </SwiperSlide>
      </Swiper>
      </div>

    </section>
  );
}

export default NewProducts;
