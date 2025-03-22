import React, { PropsWithChildren } from 'react'

type BrandingBoxPropsType = {
    title: string
    desc: string
    direction: string
    children: React.ReactNode
}

function BrandingBox(props : PropsWithChildren<BrandingBoxPropsType>) {
   
  const { title , desc , direction } = props

  return (
    <div className={`branding-box flex flex-col  gap-x-3 items-center ${direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {props.children}
        <div className={`branding-box__infos text-center ${direction === 'left' ? 'lg:text-left' : 'lg:text-right'} `}>
            <h3 className='branding-box__title cursor-pointer text-[20px] lg:text-[24px] uppercase font-bold
            tracking-widest  hover:text-primary transition-all'>{title}</h3>
            <p className='branding-box__desc text-text text-[13px] lg:text-[14px] mt-4 leading-6 max-w-[270px]'>{desc}</p>
        </div>
    </div>
  )
}

export default BrandingBox
