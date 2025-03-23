import Image from 'next/image'
import React from 'react'

type clientBoxPropsTyps = {
    image: string
}

function ClientBox({image}:clientBoxPropsTyps) {
  return (
    <div className='client-box'>
       <Image width={105} height={118} alt='client' src={image} className='mx-auto mb-16 flex items-center justify-center cursor-pointer transition-all
       hover:opacity-50'/>
    </div>
  )
}

export default ClientBox
