import PageHeader from '@/components/modules/PageHeader'
import Team from '@/components/templates/team/Team'
import React from 'react'

function index() {
  return (
    <div className='team-page relative z-[999]'>
      <PageHeader title='our team' customPath='/team'/>
      <div className='teams'>
        <Team/>
      </div>
    </div>
  )
}

export default index
