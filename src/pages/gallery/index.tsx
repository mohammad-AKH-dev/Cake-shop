import PageHeader from '@/components/modules/PageHeader'
import Gallery from '@/components/templates/gallery/Gallery'
import React from 'react'

function index() {
  return (
    <div className='gallery-page pb-24 border-b border-b-[#ebebeb] relative z-[999]'>
        <PageHeader title='gallery'/>
        <Gallery/>
    </div>
  )
}

export default index
