import Image from "next/image";
import React from "react";

type testimonialPropsType = {
  id: number;
  name: string;
  role: string;
  desc: string;
  image: string;
};

function MainTestimonial(props: testimonialPropsType) {
  const { name, role, desc, image } = props;
  return (
    <div className="testimonial flex items-center justify-center flex-col shadow-testimonial-box sm:max-h-[380px]">
      <div className="comment flex md:-translate-y-12 lg:-translate-y-0 items-center flex-col p-6 px-9 text-center">
        <span className="comment-icon text-[120px] w-fit h-fit translate-y-[6.5rem] text-primary font-title opacity-50 block pr-6">
          “
        </span>
        <p className="comment-desc text-text leading-7 lg:leading-6 text-[18px] md:text-[15px] lg:text-[18px] mx-auto  mr-4 sm:mr-auto">
          {desc}
        </p>
      </div>
      <div className="author md:-translate-y-9 lg:-translate-y-0 pb-24 justify-center flex gap-x-6 items-center mt-2">
        <Image
          src={image}
          className="object-cover rounded-full"
          width={62}
          height={62}
          alt={name}
        />
        <div className="author-infos flex flex-col gap-y-2">
          <div className="author-name tracking-[.1rem] text-title font-bold text-[13px] uppercase">
            {name}
          </div>
          <span className="author-role text-primary italic tracking-wider text-[13px] xl:text-[15px] capitalize">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainTestimonial;
