import Button from '@/components/modules/Button'
import React from 'react'

function UniqueCakes() {
  return (
    <section className='unique-cakes__section bg-unique-cakes bg-cover pt-24 bg-center bg-no-repeat h-[480px]'>
       <div className="container text-center">
          <h3 className='unique-cakes__top-title text-primary font-title font-light text-[24px] md:text-[40px]'>Unique Flavors and Fresh Ingredients</h3>
          <h2 className='unique-cakes__title uppercase text-title tracking-[.3rem] text-[30px] md:text-[55px] mt-4 font-bold'>All Kinds of Cakes</h2>
          <Button title='read more' href='/'/>
       </div>
    </section>
  )
}

export default UniqueCakes
