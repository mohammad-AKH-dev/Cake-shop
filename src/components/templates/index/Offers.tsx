import SectionTitle from '@/components/modules/index/SectionTitle'
import React from 'react'
import OfferBox from '../../modules/index/OfferBox'

function Offers() {
  return (
    <section className='offers-section container pt-24'>
      <SectionTitle title='what we offer'/>

      <div className='offer-boxes grid grid-cols-1 gap-y-8 lg:gap-y-0 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 mt-12'>
        <OfferBox/>
        <OfferBox/>
        <OfferBox/>
      </div>
    </section>
  )
}

export default Offers
