import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SwiperEvents, SwiperModule } from "swiper/types";

type commentType = {
  id: number;
  name: string;
  image: string;
  desc: string;
};

function CommentsSlider() {
  const [comments, setComments] = useState<commentType[]>([
    {
      id: 1,
      name: "patrick goodman",
      image: "/images/comments/user-5.jpg",
      desc: "Cur galatae congregabo? Eheu, luba! Victrixs credere in gandavum! Primus sectam virtualiter perderes pulchritudine est. Cum tumultumque manducare, omnes fermiumes.",
    },
    {
      id: 2,
      name: "kate smith",
      image: "/images/comments/user-6.jpg",
      desc: "Peritus voxs ducunt ad gluten. Deuss sunt demolitiones de bi-color caesium. Mensa de raptus clinias, carpseris extum! Demolitiones sunt seculas de barbatus sensorem.",
    },
    {
      id: 3,
      name: "sam wilson",
      image: "/images/comments/user-7.jpg",
      desc: "Historia pius poeta est. Cobaltums crescere! Xiphias neuter armarium est. Idoleum de azureus humani generis, resuscitabo xiphias! Varius eleates semper imitaris accola.",
    },
  ]);
  const [selectedComment, setSelectedComment] = useState<number>(1);
  const swiperRef = useRef<any>(null)

  const handleCommentClick = (id: number) => {
    setSelectedComment(id);
    const index = comments.findIndex((comment) => comment.id === id);
    swiperRef.current.slideTo(index)
  };

  return (
    <section className="comments-slider bg-new-products mt-36 pb-16">
      <div className="text-[40px] text-center pt-24">#2</div>
      <div className="container mt-12">
        <Swiper
          onSwiper={(swiper) => swiperRef.current = swiper}
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          slidesPerGroup={1}
          onSlideChange={(event) => setSelectedComment(event.activeIndex + 1)}
        >
          {comments.length &&
            comments.map((comment) => (
              <SwiperSlide
                className={`flex items-center justify-center text-center `}
              >
                <p className="comment max-w-[880px]  text-text text-[18px] leading-10">
                  {comment.desc}
                </p>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="authores-wrapper flex flex-wrap gap-y-12 md:gap-y-0 items-center justify-center gap-x-40 mt-24">
          {comments.length &&
            comments.map((comment) => (
              <div
                className={`author  transition-all flex items-center 
              ${
                selectedComment === comment.id ? "opacity-100" : "opacity-30"
              } justify-center flex-col`}
                onClick={() => handleCommentClick(comment.id)}
              >
                <Image
                  width={87}
                  height={87}
                  src={comment.image}
                  alt={comment.name}
                  className="rounded-full"
                />
                <h4 className="author-name mt-6 mb-1 uppercase tracking-widest text-[14px] font-bold">
                  {comment.name}
                </h4>
                <span className="text-primary italic capitalize text-[15px]">
                  client
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default CommentsSlider;
