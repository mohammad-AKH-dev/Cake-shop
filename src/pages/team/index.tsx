import PageHeader from '@/components/modules/PageHeader'
import Team from '@/components/templates/team/Team'
import React from 'react'

function index() {
  return (
    <div className='team-page'>
      <PageHeader title='our team'/>
      <div className='teams'>
        <Team/>
      </div>
    </div>
  )
}

export default index
