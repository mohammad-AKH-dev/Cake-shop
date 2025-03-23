import Image from "next/image";
import React from "react";

type newsBoxPropsType = {
    date: string 
    image: string
    desc: string
}

function NewsBox(props: newsBoxPropsType) {

   const {date, image , desc} = props

  return (
    <div className="news-box flex flex-col sm:flex-row sm:justify-evenly md:block lg:flex items-center lg:justify-center gap-x-4">
      <div className="image-wrapper overflow-hidden">
        <Image
          className="object-contain  w-full h-[119px] lg:w-[250px] lg:h-[166px] xl:min-h-[235px] xl:min-w-[270px] transition-all hover:scale-110"
          src={image}
          width={270}
          height={235}
          alt="cake"
        />
      </div>
      <div className="news-infos flex flex-col mt-8 sm:mt-0 md:mt-8 lg:mt-0 gap-y-4 lg:-mr-4 xl:-mr-8 lg:pl-4 text-center">
        <span className="news-date text-[15px] text-text">{date}</span>
        <p className="news-desc text-[20px] md:text-[16px] lg:text-[22px] xl:text-[24px] text-title mx-auto max-w-[350px] md:max-w-[250px] hover:text-primary transition-all">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default NewsBox;
