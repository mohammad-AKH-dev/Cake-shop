import PageHeader from "@/components/modules/PageHeader";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";



function SingleProduct() {
  return (
    <div className="single-product__page">
      <PageHeader title="single shop" paths={["shop", "chocklate"]} />
      <div className="container single-product__content">
        <div className="single-product__left-section">
          <Image
            width={900}
            height={600}
            src={"/images/cakes/chocklate truff.png"}
            alt="cake"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="single-product__right-section">
          <h3 className="single-product__title">Chocolate Truffles</h3>
          <div className="single-product__status">
            <span className="single-product__price">$23</span>
            <div className="single-product__scores">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p className="single-product__desc">
            Lorem ipsum dolor sit amet, ei impetus epicurei his, ne falli erant
            consequuntur est. Mei simul aperiam eu, an rebum regione ponderum
            mel. Facer placerat ut duo, id duis solum maiorum vis, vim
            autemsemper docendi cu. Pro
          </p>
          <div className="single-product__infos">
            <div className="single-product__category">
              <span>Categories:</span>
              <span className="category">Sweets</span>
            </div>
            <div className="single-product__weight">
              <span>Weight:</span>
              <span className="category">7,25 oz</span>
            </div>
            <div className="single-product__box">
              <span>Weight:</span>
              <span className="category">60 x 60 x 90 cm</span>
            </div>
          </div>
          <div className="single-product__count-wrapper">
             <div className="single-product__count">
               <div className="count">
                <span>1</span>
               </div>
               <div className="plus-or-decrease__wrapper">
                <div className="plus">
                    <FaPlus/>
                </div>
                <div className="decrease">
                    <AiOutlineMinus/>
                </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
