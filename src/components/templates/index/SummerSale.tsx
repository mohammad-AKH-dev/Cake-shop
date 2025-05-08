import Button from "@/components/modules/Button";
import React from "react";

function SummerSale() {
  return (
    <section className="summber-sale__section bg-summer-sale h-[600px] mt-36 pt-36 bg-cover bg-center relative
     before:absolute before:inset-0 before:z-20 xl:before:hidden before:bg-[#ffffffb3]">
      <div className="container flex items-center flex-col relative z-30 justify-center md:block">
        <h2 className="text-title uppercase tracking-wider text-[26px] md:text-[55px] font-bold">
          Summer sale
        </h2>
        <div className="summber-sales__discount mt-4">
          <span className="discount text-[48px] font-title text-primary">
            -20%
          </span>
          <span className="uppercase tracking-widest font-bold ml-8 text-title text-[18px] md:text-[24px]">
            on all Cakes
          </span>
        </div>
        <p className="summer-sales__desc text-text text-center md:text-left md:max-w-[500px] font-normal leading-7 text-[13px] md:text-[15px]">
          Purchase our tasty cakes and sweets for your next event or family
          dinner at our online shop and save more money than anywhere.
        </p>
        <div className="-mb-8 md:mb-0 relative z-50">

        <Button title="shop now" href="/shop/1"/>
        </div>
      </div>
    </section>
  );
}

export default SummerSale;
