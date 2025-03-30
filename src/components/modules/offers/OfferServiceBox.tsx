import React, { PropsWithChildren } from 'react'

type OfferServiceBoxPropsType = {
    title: string
    productID: string
    desc: string
}

function OfferServiceBox(props: PropsWithChildren<OfferServiceBoxPropsType>) {

  const {title , productID , desc , children} = props

  return (
    <div className='service-box'>
       <div className='icon-wrapper flex items-center justify-center sm:justify-start gap-x-6'>
         <span className='service-id text-primary opacity-10 font-extrabold text-[60px] uppercase tracking-widest'>{productID}</span>
         {children}
       </div>
       <h4 className='service-box__title text-[22px] uppercase tracking-wider font-bold'>{title}</h4>
       <p className='servoce-box__desc text-[15px] text-text xl:max-w-[95%] pt-6 leading-7 font-normal'>{desc}</p>
    </div>
  )
}

export default OfferServiceBox
