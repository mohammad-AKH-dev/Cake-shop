import Image from "next/image";
import Link from "next/link";
import React from "react";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

function SearchedProduct(props: productBoxType) {
  const { sources, title, id, discount, price } = props;
  return (
    <Link
      href={`/product/${title}/${id}`}
      className="searched-product text-[12px] flex gap-x-4 w-full bg-new-products py-3 max-h-[70px] items-center justify-start md:justify-between px-4 border-b border-b-[#e1e1e1]"
    >
      <div className="image-wrapper w-[70px] h-[70px] md:w-[45px] md:h-[45px] lg:w-[60px] lg:h-[60px] flex items-center justify-center my-auto -mt-4">
        <Image src={sources[0]} width={400} height={400} alt={title} className="w-full h-full flex items-center justify-center"/>
      </div>
      <div className="searched-product__infos md:mx-auto md:max-w-[80px] lg:text-left overflow-hidden flex flex-col text-ellipsis lg:min-w-[150px]">
        <h4 className="searched-product__title font-bold overflow-hidden whitespace-nowrap text-ellipsis">{title}</h4>
        <div className="searched-product__prices flex flex-wrap lg:flex-nowrap items-center gap-x-3">
          {discount ? (
            <>
              <span className="price line-through text-text opacity-50 font-bold">
                ${price}
              </span>
              <span className="discount text-primary font-bold">${discount}</span>
            </>
          ) : (
            <span
              className="price line-through text-primary
         font-bold"
            >
              ${price}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default SearchedProduct;
