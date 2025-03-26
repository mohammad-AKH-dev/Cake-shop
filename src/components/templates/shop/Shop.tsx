import CategoryInput from "@/components/modules/shop/CategoryInput";
import React, { useState } from "react";
import ReactRangeSliderInput, { InputEvent } from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { GoSearch } from "react-icons/go";
import PopularProductsBox from "@/components/modules/shop/PopularProductsBox";

function Shop() {
  const [categories, setCategories] = useState([
    {
      value: "all",
      count: 18,
    },
    {
      value: "cakes",
      count: 9,
    },
    {
      value: "puddings",
      count: 5,
    },
    {
      value: "sweets",
      count: 8,
    },
  ]);
  const [mainCategory, setMainCategory] = useState("all");
  const [minLength, setMinLength] = useState<number>(66);
  const [maxLength, setMaxLength] = useState<number>(635);
  const handleRangeInput = (event: InputEvent) => {
    console.log(event);
    setMinLength(event[0]);
    setMaxLength(event[1]);
  };

  return (
    <div className="shop">
      {/* filter section */}
      <div className="shop-left__section sticky left-0 top-0 w-[30%]">
        <h4
          className="left-section__title uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] font-bold mb-10"
        >
          filter by price
        </h4>
        <ReactRangeSliderInput
          min={0}
          max={999}
          value={[minLength, maxLength]}
          onInput={(event) => handleRangeInput(event)}
        />
        <div className="filtering-infos flex items-center gap-x-3 mt-9">
          <div className="filter-btn py-3 px-6 cursor-pointer bg-hover transition-all hover:bg-primary rounded-lg">
            <span className="uppercase tracking-wider text-white">filter</span>
          </div>
          <div className="prices-wrapper flex items-ceter gap-x-1">
            <span>Price :</span>
            <div className="prices flex items-center gap-x-2">
              <span className="min-price">${minLength}</span>
              <span className="-translate-y-[4px]">_</span>
              <span className="max-price">${maxLength}</span>
            </div>
          </div>
        </div>
        <div className="categories-infos">
          <h4
            className="uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-10"
          >
            categories
          </h4>
          <div className="categories flex flex-col gap-y-4">
            {categories.map((category) => (
              <CategoryInput
                value={category.value}
                count={category.count}
                checked={category.value === mainCategory ? true : false}
                onChange={setMainCategory}
              />
            ))}
          </div>
        </div>
        {/* search input */}
        <div className="search-input p-4 mt-12 flex items-center justify-between bg-[#f9faf9]">
          <input
            type="text"
            className="placeholder:text-text outline-none border-none bg-transparent text-text w-[90%]"
            placeholder="Search in shop..."
          />
          <GoSearch className="text-[20px] cursor-pointer transition-all hover:text-primary" />
        </div>
        {/* popular products */}
        <div className="popular-products__wrapper mt-24">
          <h4
            className=" uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-10"
          >
            popular products
          </h4>
          <div className="popular-products flex flex-col gap-y-4">
            <PopularProductsBox />
            <PopularProductsBox />
            <PopularProductsBox />
          </div>
        </div>
      </div>
      {/* sorting and items section */}
      <div className="shop-right__section w-[70%]"></div>
    </div>
  );
}

export default Shop;
