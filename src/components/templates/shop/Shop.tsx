import CategoryInput from "@/components/modules/shop/CategoryInput";
import React, { useState } from "react";
import ReactRangeSliderInput, { InputEvent } from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { GoSearch } from "react-icons/go";
import PopularProductsBox from "@/components/modules/shop/PopularProductsBox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaListUl } from "react-icons/fa";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import ProductBox from "@/components/modules/ProductBox";
import Link from "next/link";
import RowProductBox from "@/components/modules/shop/RowProductBox";

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
  const [mainCategory, setMainCategory] = useState<string>("all");
  const [minLength, setMinLength] = useState<number>(66);
  const [maxLength, setMaxLength] = useState<number>(635);
  const [grid, setGrid] = useState("column");
  const handleRangeInput = (event: InputEvent) => {
    setMinLength(event[0]);
    setMaxLength(event[1]);
  };

  return (
    <div
      className={`shop flex flex-col gap-y-8 md:gap-y-0 ${
        grid === "column" && "md:flex-row"
      } ${grid === "row" && "lg:flex-row"} justify-between`}
    >
      {/* filter section */}
      <div
        className={`shop-left__section left-0 top-0 w-full ${
          grid === "column" && "md:w-[25%] md:sticky"
        } 
      ${grid === "row" && "lg:w-[25%] lg:sticky"}`}
      >
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
        <div
          className={`filtering-infos flex ${
            grid === "column" &&
            "flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-center gap-x-3"
          } 
        ${grid === "row" && "items-center justify-between lg:justify-normal lg:gap-x-3"} mt-9`}
        >
          <div
            className="filter-btn py-3 px-6 flex items-center justify-center
           cursor-pointer bg-hover transition-all hover:bg-primary rounded-lg"
          >
            <span className="uppercase tracking-wider text-white">filter</span>
          </div>
          <div className="prices-wrapper flex items-ceter gap-x-1 ml-1 lg:ml-0">
            <span>Price :</span>
            <div className="prices flex items-center gap-x-2">
              <span className="min-price">${minLength}</span>
              <span className="-translate-y-[4px]">_</span>
              <span className="max-price">${maxLength}</span>
            </div>
          </div>
        </div>
        {/* left section when grid column */}
        {grid === "column" && (
          <>
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
          </>
        )}
        {/* left section when grid row */}
        {grid === "row" && (
          <>
          <div className="categories-infos hidden lg:block">
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
            <div className="search-input p-4 mt-12 hidden lg:flex items-center justify-between bg-[#f9faf9]">
              <input
                type="text"
                className="placeholder:text-text outline-none border-none bg-transparent text-text w-[90%]"
                placeholder="Search in shop..."
              />
              <GoSearch className="text-[20px] cursor-pointer transition-all hover:text-primary" />
            </div>
            {/* popular products */}
            <div className="popular-products__wrapper hidden lg:block mt-24">
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
          <div className="left-content__row-wrapper mb-16 flex flex-col sm:flex-row justify-between gap-x-12">
            <div className="left-section-row w-full sm:w-[50%]">
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
              <div className="search-input p-4 mt-12 flex items-center justify-between bg-[#f9faf9]">
                <input
                  type="text"
                  className="placeholder:text-text outline-none border-none bg-transparent text-text w-[90%]"
                  placeholder="Search in shop..."
                />
                <GoSearch className="text-[20px] cursor-pointer transition-all hover:text-primary" />
              </div>
            </div>
            <div className="right-section-row w-full sm:w-[50%]">
              <div className="popular-products__wrapper ">
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
          </div>
          </>
        )}
      </div>
      {/* sorting and items section */}
      <div
        className={`shop-right__section w-full ${
          grid === "column" && "md:w-[70%]"
        } ${grid === "row" && "lg:w-[70%]"}`}
      >
        <div className="right-section__title-wrapper flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 items-center justify-between px-6">
          <div className="show-result text-[15px] ">
            Showing 1-9 of 28 results
          </div>
          <div className="sorting-wrapper flex items-center gap-x-6 justify-between w-full sm:w-fit">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by newness" />
              </SelectTrigger>
              <SelectContent className="z-[9999] relative">
                <SelectGroup className="relative">
                  <SelectItem
                    value="newness"
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                  >
                    Sort by newness
                  </SelectItem>
                  <SelectItem
                    value="popularity"
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                  >
                    Sort by popularity
                  </SelectItem>
                  <SelectItem
                    value="alphabet"
                    className="data-[state=checked]:bg-primary data-[state=checked]:text-white"
                  >
                    Sort by alphabet
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="items-structre-icons flex items-center gap-x-3 text-[20px]">
              <RiLayoutGrid2Fill
                className={`cursor-pointer ${
                  grid === "column" && "text-primary"
                } 
               hover:text-primary transition-all`}
                onClick={() => setGrid("column")}
              />
              <FaListUl
                className={`cursor-pointer ${
                  grid === "row" && "text-primary"
                } hover:text-primary transition-all`}
                onClick={() => setGrid("row")}
              />
            </div>
          </div>
        </div>
        {/* column products */}
        {grid === "column" && (
          <div className="columns-products-wrapper grid grid-cols-1 gap-y-12 sm:gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 mt-4">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        )}
        {/* row products */}
        {grid === "row" && (
          <div className="row-products-wrapper mt-11 gap-y-12 flex flex-col">
            <RowProductBox />
            <RowProductBox />
            <RowProductBox />
          </div>
        )}
        <div className="pagination flex items-center justify-center mt-12 gap-x-3 flex-wrap">
          {new Array(3).fill(0).map((item, index) => (
            <Link
              className={`py-[5px] px-4 rounded-md ${
                index + 1 === 1 && "bg-primary text-white"
              } hover:bg-primary
               text-title text-[18px] transition-all hover:text-white`}
              href={`/shop/${index}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
