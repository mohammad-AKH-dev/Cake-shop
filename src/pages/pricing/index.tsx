import PageHeader from '@/components/modules/PageHeader'
import Pricing from '@/components/templates/pricing/Pricing'
import React from 'react'

function index() {
  return (
    <div className='pricing-page'>
        <PageHeader title='pricing list'/>
       <div className="container">
          <Pricing/>
       </div>
    </div>
  )
}

export default index
