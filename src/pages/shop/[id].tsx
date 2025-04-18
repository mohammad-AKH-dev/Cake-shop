import PageHeader from '@/components/modules/PageHeader'
import Shop from '@/components/templates/shop/Shop'
import React from 'react'

function ShopPage() {
  return (
    <div className='shop-page relative z-[999]'>
      <PageHeader title='shop'/>
      <div className="container mt-24">
         <Shop/>
      </div>
    </div>
  )
}

export default ShopPage
