import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";


function FreshCakes() {
  return (
    <div className="fresh-cakes container -mt-[3.5rem] bg-fresh-cakes border-[10px] border-box bg-cover bg-no-repeat p-12 text-center min-h-[500px]">
      <h3 className="text-primary font-title text-[32px] mb-4">Only Fresh Cakes</h3>
      <p className="text-text  text-[18px] max-w-[647px] mx-auto leading-8">
        All of our products are made from scratch using family recipes with only
        the highest quality ingredients. We bake and sell fresh daily to ensure
        only the best products are sold to our customers.
      </p>
      <Link className="w-12 h-12 flex items-center justify-center 
      mt-8 mx-auto rounded-full bg-primary hover:bg-hover transition-all " href={'/shop'}>
         <FaArrowRight className="text-[16px] text-white"/>
      </Link>
    </div>
  );
}

export default FreshCakes;
