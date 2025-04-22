import PageHeader from '@/components/modules/PageHeader'
import Offers from '@/components/templates/offers/Offers'
import React from 'react'

function index() {
  return (
    <div className='offers-page z-[999] relative'>
       <PageHeader title='what we offer' customPath='/offers'/>
       <div className="wrapper mt-16">
         <Offers/>
       </div>
    </div>
  )
}

export default index
