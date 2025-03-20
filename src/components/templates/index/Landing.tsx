import Link from 'next/link'
import React from 'react'

function Landing() {
  return (
    <section className='landing-section bg-landing w-full bg-cover bg-no-repeat bg-center 
    mt-8 min-h-[500px]'>
      <div className='landing-left__section pb-[15rem]  w-full text-center sm:text-left sm:max-w-[50%] px-8 pt-8 '>
        <h1 className='left-section__title font-title text-[90px] sm:text-[75px] lg:text-[100px] text-primary'>Delicious</h1>
        <h4 className='text-title before:h-[2px] before:w-0 xl:before:w-[60px] before:bg-title before:absolute pl-0 xl:pl-[85px]
        before:left-0 before:bottom-6 relative text-[23px] md:text-[30px] lg:text-[36px] uppercase font-bold tracking-[.35rem]'>cakes for you</h4>
        <p className='text-text tracking-widest text-[18px] lg:text-[24px] mt-8 max-w-[30rem]'>
        Sweet Bakery offers the best
        cakes and sweets for you.
        </p>
        <Link href={'/shop'} className='uppercase py-6 rounded-md before:rounded-md mt-8 before:w-full before:h-full
        before:absolute before:inset-0 relative px-12 md:px-16 top-16 text-[14px] font-bold tracking-wider before:scale-100 hover:before:scale-0 before:bg-primary bg-hover transition-all 
        before:transition-all text-white shadow-box'>
        <span className='relative z-50'>shop now</span>
        </Link>
      </div>
    </section>
  )
}

export default Landing
