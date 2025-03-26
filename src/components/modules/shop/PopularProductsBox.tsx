import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type PopularProductsBoxPropsType = {
    title: string
    price: number
    image: string
    path: string
}

function PopularProductsBox() {
  return (
    <div className='popular-product flex items-center gap-x-9'>
       <div className='product-img__wrapper w-[106px] h-[104px] flex items-center justify-center overflow-hidden bg-[#f9faf9]'>
         <Image width={60} height={60} src={'/images/cakes/pudding.png'} className='max-w-[106px] max-h-[104px]
         transition-all hover:scale-105' alt='product-img'/>
       </div>
       <div className="product-content flex flex-col gap-y-3">
           <Link href={'/singleproduct/2'} className='procuct-title text-[15px] text-title transition-all hover:text-primary'
           >Chocolate Pudding</Link>
           <span className='product-price text-primary'>$25.00</span>
       </div>
    </div>
  )
}

export default PopularProductsBox
