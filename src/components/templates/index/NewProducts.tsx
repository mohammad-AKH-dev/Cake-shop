import SectionTitle from "@/components/modules/index/SectionTitle";
import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import ProductBox from "@/components/modules/ProductBox";
import { basketContext } from "@/contexts/BasketContext";
import toast from "react-hot-toast";

type productBoxType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
};

type newProductsPropsType = {
  products: productBoxType[];
};


function NewProducts(props: newProductsPropsType) {
  const { products } = props;
  const BasketContext = useContext(basketContext)
  
  const addProductToBasket = async (product: productBoxType) => {
    const isInBasket = BasketContext?.basket.some(item => item.id === product.id)
    if(!isInBasket) {
      const newProduct = {...product,count: 1}
      BasketContext?.setBasket(prevState => [...prevState,newProduct])
      toast.success('product added to basket successfully.',{
        duration: 3000
      })
    }else {
      toast.error('You have already added this product to your cart.',{
        duration: 3000
      })
    }
  } 


  return (
    <section className="new-products__section mt-36 bg-new-products min-h-[400px] bg-auto bg-repeat bg-center bg-[#f7f7f7] pt-24">
      <SectionTitle title="new products" />

      <div className="products-slider mt-8 pb-16 container">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          className="mySwiper pb-24"
          autoplay
          slidesPerView={4}
          loop
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            993: {
              slidesPerView: 4,
            },
          }}
        >
          {products?.map((product: productBoxType) => (
            <SwiperSlide key={product.id}>
              <ProductBox {...product} add={() => addProductToBasket(product)}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default NewProducts;
