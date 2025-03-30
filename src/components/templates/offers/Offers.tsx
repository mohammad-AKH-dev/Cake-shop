import OfferServiceBox from "@/components/modules/offers/OfferServiceBox";
import React, { useState } from "react";
import { GiCakeSlice } from "react-icons/gi";
import { IoFlower } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import Ticket from "./Ticket";

function Offers() {
  const [services, setServices] = useState();

  return (
    <div className="offers-wrapper">
      <div className="services-wrapper container">
        <div
          className="offers-services__wrapper grid place-items-center gap-x-6 
      grid-cols-1 text-center sm:text-left sm:grid-cols-2 gap-y-12 sm:gap-y-6 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-4"
        >
          <OfferServiceBox
            title="Quality Products"
            productID={"01"}
            desc="Pellentesque elit ullamcorper dignissim cras tincidunt lobortis etiam dignissim diam quis enim."
          >
            <GiCakeSlice className="text-[60px] text-primary" />
          </OfferServiceBox>
          <OfferServiceBox
            title="catering service"
            productID={"02"}
            desc="Nullam non nisi est sit. Proin sed libero enim sed faucibus turpis aenean sed adipiscing diam."
          >
            <IoFlower className="text-[60px] text-primary" />
          </OfferServiceBox>
          <OfferServiceBox
            title="free delivery"
            productID={"03"}
            desc="Arcu cursus euismod quis viverra. Velit egestas dui id ornare arcu odio purus ut faucibus."
          >
            <FaTruck className="text-[60px] text-primary" />
          </OfferServiceBox>
          <OfferServiceBox
            title="Online payment"
            productID={"04"}
            desc="Consequat mauris nunc congue nisi vitae. Bibendum est ultricies integer quis auctor."
          >
            <MdOutlinePayment className="text-[60px] text-primary" />
          </OfferServiceBox>
        </div>
      </div>
      <Ticket />
    </div>
  );
}

export default Offers;
