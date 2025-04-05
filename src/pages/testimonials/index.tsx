import PageHeader from '@/components/modules/PageHeader'
import Testimonials from '@/components/templates/testimonials/Testimonials'
import React from 'react'

function index() {
  return (
    <div className='testimonial-page'>
       <PageHeader title='testimonials'/>
       <Testimonials/>
    </div>
  )
}

export default index
