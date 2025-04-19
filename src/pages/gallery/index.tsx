import PageHeader from '@/components/modules/PageHeader'
import Gallery from '@/components/templates/gallery/Gallery'
import React from 'react'

type galleryBoxPropsType = {
  id: number,
  image: string,
  title: string,
  price: number,
  category: string
}

function index(props:any) {
  const {gallery} = props
  return (
    <div className='gallery-page pb-24 border-b border-b-[#ebebeb] relative z-[999]'>
        <PageHeader title='gallery'/>
        <Gallery data={gallery}/>
    </div>
  )
}


export async function getStaticProps () {
  const res = await fetch('https://cake-shop-api-yhrn.onrender.com/api/gallery')
  const gallery: galleryBoxPropsType[] = await res.json()
  return {
    props: {
        gallery
    }
  }
}

export default index
