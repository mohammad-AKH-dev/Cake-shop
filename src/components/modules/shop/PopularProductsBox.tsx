import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PopularProductsBoxPropsType = {
  id: number;
  title: string;
  discount?: string;
  price: string;
  score: number;
  category: "cakes" | "puddings" | "Sweets";
  sources: string[];
}

function PopularProductsBox(props:PopularProductsBoxPropsType) {
  const {title , sources, price , discount,id} = props
  return (
    <div className='popular-product flex items-center gap-x-9'>
       <div className='product-img__wrapper w-[106px] h-[104px] flex items-center justify-center overflow-hidden bg-[#f9faf9]'>
         <Image width={60} height={60} src={sources[0]} className='max-w-[106px] max-h-[104px]
         transition-all hover:scale-105' alt='product-img'/>
       </div>
       <div className="product-content flex flex-col gap-y-3">
           <Link href={`/product/${title}/${id}`} className='procuct-title text-[15px] text-title transition-all hover:text-primary'
           >{title}</Link>
           <div className='prices-wrapper flex items-center gap-x-3'>
            {
              discount ? (
                 <>
                 <span className='product-discount text-text line-through'>${discount}</span>
                 <span className='product-price text-primary font-bold'>${price}</span>
                 </>
              ): (
                 <>
                  <span className='product-price text-primary font-bold'>${price}</span>
                 </>
              )
            }
            
           </div>
       </div>
    </div>
  )
}

export default PopularProductsBox
