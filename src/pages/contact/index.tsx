import PageHeader from '@/components/modules/PageHeader'
import Contact from '@/components/templates/contact/Contact'
import React from 'react'

function index() {
  return (
    <div className='contact-page'>
       <PageHeader title='contact'/>
       <div className="container mt-12">
         <Contact/>
       </div>
    </div>
  )
}

export default index
