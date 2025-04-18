import PageHeader from "@/components/modules/PageHeader";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import ContactInput from "@/components/modules/contact/ContactInput";
import { useForm } from "react-hook-form";
import ProductBox from "@/components/modules/ProductBox";
import FeaturedBox from "@/components/modules/product/FeaturedBox";
type IFormInput = {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  phone: string;
};

function SingleProduct() {
  const router = useRouter();
  const [images, setImages] = useState([
    "/images/products/single-product-1.png",
    "/images/products/single-product-2.png",
    "/images/products/single-product-3.png",
  ]);
  const [activeImage, setActiveImage] = useState(0);
  const swiperRef = useRef<SwiperClass>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const submitHandler = (data: IFormInput) => {};

  const changeImageHandler = () => {
    if (swiperRef.current) {
      setActiveImage(swiperRef?.current?.activeIndex);
    }
  };

  return (
    <div className="single-product__page">
      <PageHeader
        title="single shop"
        paths={["shop", `${router.query.name}`]}
      />
      <div className="container single-product__content grid gap-x-12 grid-cols-1 gap-y-12  md:grid-cols-2 mt-24">
        <div className="single-product__left-section">
          <Swiper
            className="mySwiper"
            autoplay
            modules={[Autoplay, EffectFade]}
            effect="fade"
            onSlideChange={changeImageHandler}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {images.map((image) => (
              <SwiperSlide>
                <div
                  className="w-full lg:max-w-[540px]
           bg-new-products flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt="cake"
                    className="object-cover scale-90 lg:scale-100 min-w-full h-full"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="product-images mt-6 grid grid-cols-3 gap-x-4 max-w-[540px]">
            {images.map((image, index) => (
              <div
                className={`image-wrapper cursor-pointer overflow-hidden 
                 ${activeImage === index && "shadow-single-product"}`}
                onClick={() => {
                  setActiveImage(index);
                  swiperRef.current?.slideTo(index);
                }}
              >
                <Image
                  src={image}
                  className={`p-4 bg-new-products 
                    transition-all hover:scale-110 ${
                      activeImage === index && "scale-105"
                    }`}
                  width={189}
                  height={172}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single-product__right-section text-center md:text-left flex items-center justify-center flex-col md:block">
          <h3 className="single-product__title font-bold text-[36px] md:text-[28px] lg:text-[36px] tracking-wider">
            Chocolate Truffles
          </h3>
          <div className="single-product__status flex items-center gap-x-6 mt-3 mb-8">
            <span className="single-product__price text-[24px] md:text-[20px] lg:text-[24px] text-primary font-bold">
              $23
            </span>
            <div className="single-product__scores flex items-center text-[20px] text-yellow-400 gap-x-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p
            className="single-product__desc text-[16px] md:text-[12px] 
          lg:text-[14px] leading-7 md:leading-6 mb-8 pb-3 border-b border-b-[#e1e1e1]"
          >
            Lorem ipsum dolor sit amet, ei impetus epicurei his, ne falli erant
            consequuntur est. Mei simul aperiam eu, an rebum regione ponderum
            mel. Facer placerat ut duo, id duis solum maiorum vis, vim
            autemsemper docendi cu. Pro
          </p>
          <div className="single-product__infos text-[14px] md:text-[12px] lg:text-[14px] flex flex-col gap-y-2">
            <div className="single-product__category flex items-center gap-x-1">
              <span>Categories:</span>
              <span className="category text-text text-[13px] font-normal">
                Sweets
              </span>
            </div>
            <div className="single-product__weight flex items-center gap-x-1">
              <span>Weight:</span>
              <span className="weight text-text text-[13px] font-normal">
                7,25 oz
              </span>
            </div>
            <div className="single-product__size flex items-center gap-x-1">
              <span>Box:</span>
              <span className="size text-text text-[13px] font-normal">
                60 x 60 x 90 cm
              </span>
            </div>
          </div>
          <div className="single-product__count-wrapper mt-8 pb-6 border-b border-b-[#e1e1e1]">
            <div className="single-product__count flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-y-6 sm:gap-y-0 items-center gap-x-2">
              <div className="count text-[24px] w-[70px] h-[70px] flex items-center justify-center rounded-lg bg-new-products">
                <span>1</span>
              </div>
              <div className="plus-or-decrease__wrapper flex flex-col gap-y-1 text-[16px] font-normal">
                <div
                  className="plus w-[32px] h-[32px] rounded-lg transition-all
                hover:text-primary cursor-pointer  flex items-center justify-center bg-new-products"
                >
                  <FaPlus />
                </div>
                <div
                  className="decrease w-[32px] h-[32px] rounded-lg transition-all
                hover:text-primary cursor-pointer  flex items-center justify-center bg-new-products"
                >
                  <AiOutlineMinus />
                </div>
              </div>
              <div
                className="add-to-basket__btn uppercase bg-hover hover:bg-primary transition-all
               rounded-lg flex items-center justify-center py-5 ml-2 cursor-pointer font-bold px-12 tracking-wider
               text-white "
              >
                add to cart
              </div>
            </div>
          </div>
          <div className="socials flex items-center gap-x-4 mt-6">
            <FaFacebookF className="hover:text-primary transition-all cursor-pointer  text-[16px]" />
            <FaTwitter className="hover:text-primary transition-all  cursor-pointer text-[18px]" />
            <AiFillInstagram className="hover:text-primary transition-all  cursor-pointer text-[18px]" />
            <FaGooglePlusG className="hover:text-primary transition-all cursor-pointer  text-[24px]" />
          </div>
        </div>
      </div>
      <form
        className="contact-form grid container  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-8"
        onSubmit={handleSubmit(submitHandler)}
      >
        <ContactInput
          error={errors.firstname?.message}
          placeholder="first name"
          register={{
            ...register("firstname", {
              required: "The text field is required.",
            }),
          }}
          type="text"
        />
        <ContactInput
          error={errors.lastname?.message}
          placeholder="last name"
          register={{
            ...register("lastname", {
              required: "The text field is required.",
            }),
          }}
          type="text"
        />
        <div className="p-2 pl-0  relative mt-4 border-b border-b-[#e1e1e1]">
          <textarea
            placeholder="Message"
            {...register("message", {
              required: "The text field is required.",
            })}
            className="capitalize 
         outline-none tracking-widest w-full h-[30px] text-[16px] placeholder:text-[#151515]"
          ></textarea>
          {errors.message?.message && (
            <span
              className="error absolute  bottom-0 right-0 text-red-600 border-b
         border-b-red-600 block w-full text-right text-[9px]"
            >
              {errors.message?.message}
            </span>
          )}
        </div>
        <ContactInput
          error={errors.email?.message}
          placeholder="e-mail"
          register={{
            ...register("email", { required: "The email field is required." }),
          }}
          type="email"
        />
        <ContactInput
          error={errors.phone?.message}
          placeholder="phone"
          register={{
            ...register("phone", { required: "Only numbers are required" }),
          }}
          type="text"
        />
        <button
          type="submit"
          className="sm:w-[70%] w-fit p-8 sm:p-0 h-[60px] translate-y-4   sm:mx-auto text-white rounded-lg submit-btn bg-hover hover:bg-primary transition-all text-[14px] xl:text-[16px]
        flex items-center justify-center uppercase font-bold tracking-wider"
        >
          submit
        </button>
      </form>
      <div className="featured-products__wrapper mt-24">
        <h4 className="featured-products__title mb-12 text-[24px] uppercase tracking-widest font-bold text-center">
          Featured Products
        </h4>
        <div className="featured-products gap-x-8 container grid grid-cols-1 sm:grid-cols-2 gap-y-6 lg:gap-y-0 md:grid-cols-3 lg:grid-cols-4">
          <FeaturedBox />
          <FeaturedBox />
          <FeaturedBox />
          <FeaturedBox />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
