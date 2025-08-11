import SectionTitle from "@/components/modules/index/SectionTitle";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Testimonial from "@/components/modules/Testimonial";

type testimonialPropsType = {
  id: number;
  name: string;
  role: string;
  desc: string;
  image: string;
};

function Testimonials() {
  const [testimonials, setTestimonials] = useState<testimonialPropsType[]>([
    {
      id: 1,
      name: "Jane Peterson",
      role: "client",
      desc: "This bakery was great to work with and I will be using them for my future events. Their cupcakes tasted absolutely delightful.",
      image: '/images/comments/user-4.jpg'
    },
    {
        id: 2,
        name: "Patrick Goodman",
        role: "client",
        desc: "Thank you so much for the elegant cupcakes. They looked and tasted amazing. I’m recommending you to all my friends.",
        image: '/images/comments/user-1.jpg'
      },
      {
        id: 3,
        name: "Jane Smith",
        role: "client",
        desc: "Just a note to let you know how fabulous your wedding cake was. Many guests commented on how delicious it tasted.",
        image: '/images/comments/user-2.jpg'
      },
      {
        id: 4,
        name: "Sam Wilson",
        role: "client",
        desc: "If you are looking for the mouth deliciousness, then you should definitely try the goods from the Sweet Bakery.",
        image: '/images/comments/user-3.jpg'
      },
  ]);

  return (
    <section className="testimonials-section mt-24">
      <SectionTitle title="testimonials" />

      <div className="swiper-wrapper container max-w-[320px] md:w-full xl:max-w-[1200px]">
        <Swiper
          pagination={true}
          modules={[Pagination,Autoplay]}
          autoplay
          loop
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            993: {
              slidesPerView: 2,
            },
          }}
        >
          {
            testimonials.map(testimonial  => (
                <SwiperSlide key={testimonial.id}>
                    <Testimonial {...testimonial}/>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
