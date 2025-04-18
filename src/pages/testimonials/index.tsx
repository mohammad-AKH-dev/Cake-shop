import PageHeader from '@/components/modules/PageHeader'
import Testimonials from '@/components/templates/testimonials/Testimonials'
import React from 'react'

function index() {
  return (
    <div className='testimonial-page relative z-[999]'>
       <PageHeader title='testimonials'/>
       <Testimonials/>
    </div>
  )
}

export default index
