import CategoryInput from "@/components/modules/shop/CategoryInput";
import React, { useEffect, useState } from "react";
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
import Pagination from "@/components/modules/Pagination";
import { useRouter } from "next/router";
import SearchedProduct from "@/components/modules/shop/SearchedProduct";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

type categoryType = {
  value: string;
  count: number;
};

type shopComponentPropsType = {
  products: productBoxType[];
  categories: categoryType[];
};

function Shop(props: shopComponentPropsType) {
  const { products, categories } = props;
  const [mainCategory, setMainCategory] = useState<string>("all");
  const router = useRouter();
  const [minLength, setMinLength] = useState<number>(15);
  const [maxLength, setMaxLength] = useState<number>(60);
  const [searchedProduct, setSearchedProduct] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<
    productBoxType[] | [] | null
  >(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [columnRowsCount, setRowsCount] = useState<number>(9);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isMatchedProducts, setIsMatchedProducts] = useState<boolean>(true);
  const [isShowSearchedProducts, setIsShowSearchedProducts] =
    useState<boolean>(false);
  const [fillteredProducts, setFillteredProducts] = useState<
    productBoxType[] | []
  >([]);
  const [rowRowsCount, setRowRowsCount] = useState<number>(6);
  const [grid, setGrid] = useState("column");
  let endIndex =
    grid === "column"
      ? currentPage * columnRowsCount
      : Number(router.query.id) * rowRowsCount;
  let startIndex =
    grid === "column" ? endIndex - columnRowsCount : endIndex - rowRowsCount;
  const handleRangeInput = (event: InputEvent) => {
    setMinLength(event[0]);
    setMaxLength(event[1]);
  };

  const setNewProductsFilter = () => {
    const newProducts = [...products].filter(
      (product) => +product.price >= minLength && +product.price <= maxLength
    );
    setFillteredProducts(newProducts);
  };

  const searchProduct = () => {
    const mainItem = fillteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
    setSearchedProducts(mainItem);

    // if searched products === [] this conditional renders
  
    if (!mainItem.length) {
      setIsMatchedProducts(false);
      setIsShowSearchedProducts(false);
    } else {
      setIsEmpty(false);
      setIsMatchedProducts(true);
      setIsShowSearchedProducts(true);
    }

    // if search input === '' this conditional renders
  
    if (!searchedProduct.trim().length) {
      setIsEmpty(true);
      setIsShowSearchedProducts(false);
    }else {
      setIsEmpty(false);
      setIsShowSearchedProducts(true);
    }
  };
  
  const searchWithEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      searchProduct();
    }
  };

  

  useEffect(() => {
    setFillteredProducts(products);
    const closeSearchedProducts = () => {
      setIsShowSearchedProducts(false)
      setSearchedProducts([])
      setIsEmpty(false)
      setIsMatchedProducts(true)
    }

    window.addEventListener('click',closeSearchedProducts)

    return () => window.removeEventListener('click',closeSearchedProducts)
  }, []);

  useEffect(() => {
    switch (mainCategory) {
      case "all":
        {
          setFillteredProducts([...products]);
        }
        break;
      case "cakes":
        {
          const cakeProducts = [...products].filter(
            (product) => product.category === "cakes"
          );
          setFillteredProducts(cakeProducts);
        }
        break;
      case "puddings":
        {
          const puddings = [...products].filter(
            (product) => product.category === "puddings"
          );
          setFillteredProducts(puddings);
        }
        break;
      case "Sweets": {
        const sweets = [...products].filter(
          (product) => product.category === "Sweets"
        );
        setFillteredProducts(sweets);
      }
    }
  }, [mainCategory]);

  useEffect(() => {
    if (grid === "column" && Number(router.query.id) <= 3) {
      endIndex = currentPage * columnRowsCount;
      startIndex = endIndex - columnRowsCount;
      setCurrentPage(Number(router.query.id));
    } else {
      setCurrentPage(1);
    }

    if (grid === "row") {
      endIndex = Number(router.query.id) * rowRowsCount;
      startIndex = endIndex - rowRowsCount;
    }
  }, [router.query.id]);

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
          min={10}
          max={100}
          value={[minLength, maxLength]}
          onInput={(event) => handleRangeInput(event)}
        />
        <div
          className={`filtering-infos flex ${
            grid === "column" &&
            "flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:items-center gap-x-3"
          } 
        ${
          grid === "row" &&
          "items-center justify-between lg:justify-normal lg:gap-x-3"
        } mt-9`}
        >
          <div
            className="filter-btn py-3 px-6 flex items-center justify-center
           cursor-pointer bg-hover transition-all hover:bg-primary rounded-lg"
          >
            <span
              className="uppercase tracking-wider text-white"
              onClick={setNewProductsFilter}
            >
              filter
            </span>
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
            <div className="search-input relative p-4 mt-12 flex items-center justify-between bg-[#f9faf9]">
              <input
                type="text"
                className="placeholder:text-text outline-none border-none bg-transparent text-text w-[90%]"
                placeholder="Search in shop..."
                value={searchedProduct}
                onChange={(event) => setSearchedProduct(event.target.value)}
                onKeyDown={(event: React.KeyboardEvent) => searchWithEnter(event)}
              />
              <GoSearch
                className="text-[20px] cursor-pointer transition-all hover:text-primary"
                onClick={searchProduct}
              />
              {searchedProducts?.length && isShowSearchedProducts ? (
                <div className="searched-products left-0 right-0 absolute top-[3rem] flex flex-col gap-y-4 bg-new-products">
                  {searchedProducts.map((product) => (
                    <SearchedProduct {...product} key={product.id} />
                  ))}
                </div>
              ) : null}

              {!isMatchedProducts ? (
                <div
                  className="searched-products text-center leading-6 tracking-widest
              left-0 right-0 p-12 absolute top-[3rem] flex flex-col gap-y-4 bg-new-products"
                >
                  <span className="font-bold">
                    can't find any product with "{searchedProduct}" title
                  </span>
                </div>
              ) : null}

              {isEmpty && (
                <div
                  className="searched-products text-center leading-6 tracking-widest
                 left-0 right-0 p-12 absolute top-[3rem] flex flex-col gap-y-4 bg-new-products"
                >
                  <span className="font-bold">
                    please write something suitable and don't leave input empty!
                  </span>
                </div>
              )}
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
                {products.length &&
                  [...products]
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 3)
                    .map((product) => (
                      <PopularProductsBox key={product.id} {...product} />
                    ))}
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
                {products.length &&
                  [...products]
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 3)
                    .map((product) => (
                      <PopularProductsBox key={product.id} {...product} />
                    ))}
              </div>
            </div>
            <div className="left-content__row-wrapper mb-16 flex flex-col  justify-between gap-x-12">
              <div className="left-section-row w-full">
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
              <div className="right-section-row w-full">
                <div className="popular-products__wrapper ">
                  <h4
                    className=" uppercase tracking-widest border-b border-b-title pb-[14px]
          text-title text-[16px] mt-10 font-bold mb-10"
                  >
                    popular products
                  </h4>
                  <div className="popular-products flex flex-col gap-y-4">
                    {products.length &&
                      [...products]
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 3)
                        .map((product) => (
                          <PopularProductsBox key={product.id} {...product} />
                        ))}
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
            Showing {`${startIndex + 1}-${endIndex}`} of {products.length + 1}{" "}
            results
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
            {[...fillteredProducts]
              .slice(startIndex, endIndex)
              .map((product) => (
                <ProductBox key={product.id} {...product} />
              ))}
          </div>
        )}
        {/* row products */}
        {grid === "row" && (
          <div className="row-products-wrapper mt-11 gap-y-12 flex flex-col">
            {fillteredProducts.slice(startIndex, endIndex).map((product) => (
              <RowProductBox key={product.id} {...product} />
            ))}
          </div>
        )}
        <Pagination
          href="shop"
          length={fillteredProducts.length}
          postsPerPage={grid === "column" ? columnRowsCount : rowRowsCount}
          currentPage={
            grid === "column" ? currentPage : Number(router.query.id)
          }
        />
      </div>
    </div>
  );
}

export default Shop;
