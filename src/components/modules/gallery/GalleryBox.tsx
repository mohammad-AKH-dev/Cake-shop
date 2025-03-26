import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";



type galleryBoxPropsType = {
  id: number,
  image: string,
  title: string,
  price: number,
  category: string
}

function GalleryBox(props: galleryBoxPropsType) {

  const {image , title , price , id} = props

  return (
    <div className='gallery-box rounded-md p-12 sm:p-0 lg:relative group lg:cursor-pointer'>
      <Image src={image} width={375} height={320} alt='title' className='object-cover w-full lg:h-full'/>
      <div className='product-content hidden lg:flex flex-col  absolute 
      scale-75 group-hover:scale-100 transition-all delay-150 duration-300
      opacity-0 invisible group-hover:visible bg-white w-full h-full group-hover:z-50 inset-0 group-hover:opacity-90 items-center justify-center'>
        <Link href={`/gallery/${id}`} className='product-title -translate-y-20 group-hover:translate-y-0 delay-150 duration-300
         text-[18px] uppercase font-bold transition-all text-title mb-2 hover:text-primary cursor-pointer'>{title}</Link>
        <span className='product-price -translate-y-16 group-hover:translate-y-0 transition-all delay-150 duration-300
         text-primary text-[15px] font-bold'>${price.toLocaleString()}</span>
        <div className='icons-wrapper flex items-center justify-center gap-x-6 mt-4'>
          <div className="search-icon w-[50px] -translate-x-20 translate-y-16 group-hover:translate-x-0 
          group-hover:translate-y-0 cursor-pointer flex items-center justify-center
           h-[50px] rounded-full text-white bg-primary delay-150 duration-300 hover:bg-hover transition-all">
             <IoSearchOutline className='text-[23px] font-bold'/>
          </div>
          <div className="search-icon w-[50px] cursor-pointer flex items-center justify-center
           h-[50px] rounded-full text-white translate-x-20 translate-y-16
           group-hover:translate-y-0 group-hover:translate-x-0 delay-150 duration-300 bg-primary hover:bg-hover transition-all">
             <FaCartShopping className='text-[23px] font-bold'/>
          </div>
        </div>
      </div>
      <div className='product-content-tablet w-full relative bg-[#f9faf9] p-4 flex lg:hidden flex-col items-center justify-center '>
      <Link href={`/gallery/${id}`} className='product-title  cursoir-pointer
         text-[18px] uppercase font-bold transition-all text-title mb-2 hover:text-primary cursor-pointer'>{title}</Link>
        <span className='product-price cursoir-pointer text-primary text-[15px] font-bold'>${price.toLocaleString()}</span>
        <div className='icons-wrapper flex items-center justify-center gap-x-6 mt-4'>
          <div className="search-icon w-[50px] cursor-pointer flex items-center justify-center
           h-[50px] rounded-full text-white bg-primary delay-150 duration-300 hover:bg-hover transition-all">
             <IoSearchOutline className='text-[23px] font-bold'/>
          </div>
          <div className="search-icon w-[50px] cursor-pointer flex items-center justify-center
           h-[50px] rounded-full text-white bg-primary hover:bg-hover transition-all">
             <FaCartShopping className='text-[23px] font-bold'/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default GalleryBox
