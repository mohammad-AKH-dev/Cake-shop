import Image from "next/image";
import React from "react";
import { Badge } from "@/components/ui/badge";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

function RowProductBox(props: productBoxType) {
  const { title, price, discount, sources } = props;
  return (
    <div className="row-products__box max-w-[300px] mx-auto sm:max-w-fit flex flex-col sm:flex-row items-center gap-x-12 shadow-row-box">
      <div className="img-wrapper min-w-[250px] md:min-w-fit h-[300px] md:h-full md:w-[70%] xl:h-[330px] relative flex items-center justify-center bg-new-products">
        <Badge className="bg-primary font-bold text-white top-5 left-5 text-[13px] absolute uppercase tracking-wider">
          Sale
        </Badge>
        <Image
          src={sources[0]}
          className="w-full h-full scale-75 md:w-[230px] md:h-[232px] xl:w-[328px] xl:h-[330px]"
          width={328}
          height={330}
          alt="product-img"
        />
      </div>
      <div className="product-content text-center sm:text-start">
        <h4 className="product-content__title text-[18px] md:text-[24px] tracking-widest font-bold mb-2">
          {title}
        </h4>
        <div className="prices-wrapper flex items-center justify-center sm:justify-start gap-x-4">
          {discount ? (
            <>
              <span className="price text-text line-through text-[15px] font-normal">
                ${price}
              </span>
              <span className="discount text-primary text-[15px] font-bold">
                ${discount}
              </span>
            </>
          ) : (
            <>
              <span className="price text-primary text-[15px] font-bold">
                ${price}
              </span>
            </>
          )}
        </div>
        <p className="product-content__desc mt-4 text text-[13px] md:text-[15px]">
          Tellus at urna condimentum mattis pellentesque id nibh tortor rutrum
          tellus pellentesque eu tincidunt.
        </p>
        <button
          className="add-to-basket__btn outline-none border-none transition-all bg-primary
        text-[14px] text-white font-bold mx-auto sm:ml-0 sm:mr-0 uppercase py-2 md:py-4 px-9 rounded-lg tracking-widest mt-8 hover:bg-hover flex items-center justify-center"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default RowProductBox;
