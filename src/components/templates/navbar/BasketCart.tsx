import Image from 'next/image'
import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";




type productBoxType = {
    id: number;
    title: string;
    discount?: string;
    price: string;
    score: number;
    count:number
    category: "cakes" | "puddings" | "Sweets";
    sources: string[];
  };

type basketCartPropsType = {
    product: productBoxType
    remove: () => void
    plusCount: () => void
    minusCount: () => void
}

function BasketCart(props: basketCartPropsType) {
   const { sources , title , count, price} = props.product

  return (
    <div className='bakset-cart flex overflow-y-scroll sm:overflow-y-hidden items-center gap-x-5 relative'>
        <Image width={300} height={300} src={sources[0]} alt={title} className='h-[100px] w-[100px] bg-new-products'/>
        <div className='cart-infos'>
            <h4 className='cart-title text-[16px] font-bold'>{title}</h4>
            <div className='product-count__wrapper flex items-center mt-2 gap-x-5'>
               <FaMinus className='border border-[#e1e1e1] text-[35px] rounded-md transition-all hover:border-primary 
               hover:text-primary cursor-pointer p-2' onClick={props.minusCount}/>
               <span className='count'>{count}</span>
               <FaPlus className='border border-[#e1e1e1] text-[35px] rounded-md transition-all hover:border-primary 
               hover:text-primary cursor-pointer p-2' onClick={props.plusCount}/>
               <span className='product-price text-[16px] font-bold'>${price}</span>
            </div> 
        </div>
        <FaXmark className='absolute text-[16px] top-3 -rigth-[10rem] sm:right-0 cursor-pointer' onClick={props.remove}/>
    </div>
  )
}

export default BasketCart
