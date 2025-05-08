import Image from "next/image";
import Link from "next/link";
import React from "react";

function OfferBox() {
  return (
    <div className="offer-box group pb-4 transition-all duration-150 delay-50 rounded-md cursor-pointer hover:shadow-offer-box hover:scale-110">
      <Image
        src={"/images/cakes/cupcacks.jpg"}
        className="mx-auto group-hover:scale-105 border-[2px] border-box py-4 group-hover:border-none group-hover:m-4 px-4 delay-50 group-hover:mx-auto transition-all rounded-sm"
        alt="cupcake"
        width={400}
        height={245}
      />
      <div className="offer-box__infos mt-6 text-center group-hover:scale-95 transition-all">
        <h4 className="offer-box__title text-[20px] md:text-[24px] font-extrabold hover:text-primary transition-all uppercase">
          Party Cupcakes
        </h4>
        <p className="offer-box__desc text-text max-w-[330px] leading-6 mx-auto mt-4 text-[13px] xl:text-[15px]">
        We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.
        </p>
        <Link href={'/blog/1'} className="uppercase border-b-2 hover:border group-hover:hover:border group-hover:hover:border-title group-hover:hover:text-title
          transition-all group-hover:border group-hover:border-primary p-4 group-hover:px-8 group-hover:text-primary
        border-b-text text-text text-[14px] mt-6 pb-1 group-hover:pb-4 font-bold inline-block">
          read more 
        </Link>
      </div>
    </div>
  );
}

export default OfferBox;
