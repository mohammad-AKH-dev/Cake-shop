import Image from 'next/image'
import React from 'react'


type testimonialPropsType = {
    id: number
    name: string
    role: string
    desc: string
    image: string 
}


function Testimonial(props: testimonialPropsType) {

  const {name , role , desc , image} = props

  return (
    <div className='testimonial'>
      <div className='comment flex items-center justify-between border-b border-b-[#f3f3f3]'>
          <span className="comment-icon text-[100px] text-primary font-title opacity-50 block translate-y-4 pr-6">“</span>
          <p className='comment-desc text-text text-[18px] mx-auto max-w-[500px] mr-4 sm:mr-auto'>
          {desc}
          </p>
      </div>
        <div className="author pb-24 flex gap-x-6 items-center translate-x-16 mt-8">
            <Image src={image} className='object-cover rounded-full' width={62} height={62} alt={name}/>
            <div className='author-infos flex flex-col gap-y-2'>
                <div className="author-name tracking-[.1rem] text-title font-bold text-[13px] uppercase">{name}</div>
                <span className='author-role text-primary italic tracking-wider text-[13px] xl:text-[15px] capitalize'>{role}</span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
