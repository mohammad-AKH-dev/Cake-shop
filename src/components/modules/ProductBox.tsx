import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";



function ProductBox() {
  return (
    <div className='product-box shadow-product-box flex items-center justify-center flex-col gap-y-4 py-8 transition-all
     delay-100 hover:translate-y-7 group  '>
       <Image width={157} height={127} src={'/images/cakes/chocklate truff.png'} alt='product-img'/>
       <Link href={'/product/1'} className='product-title text-[18px] font-bold hover:text-primary transition-all'>Chocolate Truffles</Link>
       <div className='product-price&discount-wrapper flex items-center gap-x-4'>
         <span className='product-discount text-[rgba(21,21,21,0.5)] line-through text-[15px]'>
           $30.00
         </span>
         <span className='product-price text-primary font-bold text-[15px]'>
            $23.00
         </span>
       </div>
       <div className='product-more-infos__wrapper pt-4 transition-all
        cursor-pointer delay-75 items-center justify-center gap-x-4 flex'>
          <div className='more-details w-11 h-11 rounded-full scale-0 delay-75 group-hover:scale-100  
           cursor-pointer
           flex items-center justify-center  bg-[#c14679] hover:bg-title group transition-all
           '>
             <IoSearchOutline className='text-white transition-all text-[20px] group-hover:text-white'/>
          </div>
          <div className='shopping-icon w-11 h-11 rounded-full scale-0 delay-150 group-hover:scale-100  
           cursor-pointer
           flex items-center justify-center  bg-[#c14679] hover:bg-title group transition-all
           '>
             <FaCartShopping className='text-white transition-all text-[20px] group-hover:text-white'/>
          </div>
       </div>
    </div>
  )
}

export default ProductBox
