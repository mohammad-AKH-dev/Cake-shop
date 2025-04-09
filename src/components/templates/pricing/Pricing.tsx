import PricingBox from "@/components/modules/pricing/PricingBox";
import React from "react";

function Pricing() {
  return (
    <div className="pricing-wrapper text-center mt-36">
      <h2 className="pricing-title uppercase text-[36px] tracking-wider">
        our Pricing Plans
      </h2>
      <p className="pricing-desc text-text max-w-[600px] mx-auto text-[15px] mt-4 leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        Lorem ipsum dolor Tur adipiscing elit, sed do. semantic;users, seamless
        beta-test
      </p>
      <div className="pricing-boxes__wrapper mt-20 pb-12 gap-x-12 grid grid-cols-1
       sm:grid-cols-2 gap-y-12 lg:gap-y-0 lg:grid-cols-3">
        <PricingBox/>
        <PricingBox/>
        <PricingBox/>
      </div>
    </div>
  );
}

export default Pricing;
