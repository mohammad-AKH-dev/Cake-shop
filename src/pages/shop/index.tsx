import PageHeader from '@/components/modules/PageHeader'
import Shop from '@/components/templates/shop/Shop'
import React from 'react'

function index() {
  return (
    <div className='shop-page'>
      <PageHeader title='shop'/>
      <div className="container mt-24">
         <Shop/>
      </div>
    </div>
  )
}

export default index
