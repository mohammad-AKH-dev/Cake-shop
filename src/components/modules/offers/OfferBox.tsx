import Image from "next/image";
import React from "react";


function OfferBox() {
  return (
    <>
      <div className="offfer-box w-[75%] sm:w-full mx-auto relative shadow-service-box rounded-md">
        <Image
          src={"/images/offers/offers-1.jpg"}
          className="w-full absolute top-0 right-0 left-0 -z-50 rounded-t-md"
          width={346}
          height={229}
          alt="offer-img"
        />
        <div className="offer-box__title flex items-center justify-center flex-col pt-16 text-white">
          <h3 className="text-[36px] capitalize">Cupcakes</h3>
          <div className="prices flex items-center gap-x-3">
            <span className="price text-[15px] line-through">$300.00</span>
            <span className="discount text-[24px]">$120.00</span>
          </div>
        </div>
        <div className="offer-box__content mt-[.7rem] lg:mt-[2.4rem] xl:mt-[4.7rem] bg-[#f9f1f9] p-8">
          <div className="categories flex flex-col text-[15px] text-text items-center gap-y-4">
            <span>Classic</span>
            <span>Gourmet</span>
            <span>Fondant</span>
            <span>Gourmet w/ Fondant</span>
          </div>
          <div
            className="add-to-cart__btn uppercase text-[14px] font-bold lg:w-fit mx-auto p-3 lg:p-5 hover:border-primary 
            cursor-pointer px-10 lg:px-14 transition-all 
             relative mt-9 flex items-center justify-center
             hover:bg-primary hover:text-white border-2 border-[#151515] rounded-lg tracking-wider"
          >
            <span className="z-[999] block w-full text-center">add to cart</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferBox;
