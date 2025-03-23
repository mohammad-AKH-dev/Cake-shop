import NewsBox from "@/components/modules/index/NewsBox";
import SectionTitle from "@/components/modules/index/SectionTitle";
import Image from "next/image";
import React from "react";

function LatestNews() {
  return (
    <section className="latest-news__section bg-new-products pt-24 pb-8 mt-24">
      <SectionTitle title="latest news" />

      <div className="container latest-news__content grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-2 gap-x-6 xl:gap-x-1 mt-16 overflow-hidden">
        <div className="latest-news__left-section relative bg-cover bg-no-repeat bg-center bg-news
         hover:brightness-75 transition-all 
         lg:w-[457px] lg:h-[375px] xl:w-full xl:h-[480px] xl:mt-[.7rem]
          md:w-[400px] h-[457px] w-full
         ">
          <div className="ml-9 lg:ml-12 mt-[20rem] lg:mt-[14rem] xl:mt-[20rem]">
            <span className="date text-[#ffffffbf] text-[15px] ">
              August 9, 2023
            </span>
            <p className="desc text-[16px] lg:text-[24px] text-white tracking-wider max-w-[300px] lg:max-w-[480px] cursor-pointer hover:text-primary transition-all mt-4">
              How to Pipe a Fluffy Frosting Border on a Cake
            </p>
          </div>
        </div>
        <div className="latest-news__right-section w-full flex flex-col gap-y-8 justify-between">
          <NewsBox date="August 9, 2023" image="/images/cakes/pumpkin spice.jpg" desc="Recipe of the Day: Pumpkin Spice Latte Cake"/>
          <NewsBox date="August 9, 2023" image="/images/cakes/baking.jpg" desc="Top 5 Tips for Successful Cake Baking"/>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
