import BrandingBox from "@/components/modules/index/BrandingBox";
import SectionTitle from "@/components/modules/index/SectionTitle";
import { GiCakeSlice } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";


import React from "react";
import Image from "next/image";

function Branding() {
  return (
    <section className="branding-section container mt-20">
      <SectionTitle title="why choose us" />
      <div className="branding-boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-x-5 mt-12">
        <div className="left-box flex flex-col gap-y-16">
          <BrandingBox
            title="Quality Products"
            desc="We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.
         "
            direction="right"
          >
            <GiCakeSlice className="text-[100px] text-primary pb-8" />
          </BrandingBox>
          <span className="hidden md:block w-full mx-auto h-[1px] bg-text"></span>
          <BrandingBox
            title="free delivery"
            desc="All orders submitted by our US clients are delivered for free throughout the United States.
         "
            direction="right"
          >
            <FaTruckMoving className="text-[90px] text-primary pb-8" />
          </BrandingBox>
        </div>
        <Image
          src={"/images/tootfarangi.jpg"}
          width={377}
          height={212}
          alt="tootfarangi"
          className="hidden md:block"
        />
        <div className="right-box flex flex-col gap-y-16">
          <BrandingBox
            title="catering service"
            desc="We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.
"
            direction="left"
          >
            <BsFlower1 className="text-[100px] text-primary pb-8" />
          </BrandingBox>
          <span className=" hidden md:block w-full mx-auto h-[1px] bg-text"></span>
          <BrandingBox
            title="Online payment"
            desc="All orders submitted by our US clients are delivered for free throughout the United States.
"
            direction="left"
          >
            <MdOutlinePayment className="text-[100px] text-primary pb-8" />
          </BrandingBox>
        </div>
      </div>
    </section>
  );
}

export default Branding;
