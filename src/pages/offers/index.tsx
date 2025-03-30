import PageHeader from '@/components/modules/PageHeader'
import Offers from '@/components/templates/offers/Offers'
import React from 'react'

function index() {
  return (
    <div className='offers-page'>
       <PageHeader title='what we offer'/>
       <div className="wrapper mt-16">
         <Offers/>
       </div>
    </div>
  )
}

export default index
