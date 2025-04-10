import CategoryFilter from '@/components/modules/gallery/CategoryFilter'
import GalleryBox from '@/components/modules/gallery/GalleryBox'
import React, { useState } from 'react'

type galleryBoxPropsType = {
  id: number,
  image: string,
  title: string,
  price: number,
  category: string
  
}

function Gallery() {

  const [categories,setCategories] = useState<string[]>(['all categories','cakes','cupcakes'])
  const [mainCategory,setMainCategory] = useState<string>('all categories')
  const [gallery,setGallery] = useState<galleryBoxPropsType[]>([
    {id: 1 , title: 'sponge cake', price: 13.99 , image: '/images/gallery/gallery-1.jpg', category: 'cakes'},
    {id: 2 , title: 'angle food cake', price: 12.99 , image: '/images/gallery/gallery-2.jpg', category: 'cakes'},
    {id: 3 , title: 'genoise cake', price: 14.99 , image: '/images/gallery/gallery-7.jpg', category: 'cakes'},
    {id: 4 , title: 'Strawberry Cupcake', price: 13.99 , image: '/images/gallery/gallery-3.jpg', category: 'cupcakes'},
    {id: 5 , title: 'Lemon Cupcake', price: 13.99 , image: '/images/gallery/gallery-4.jpg', category: 'cupcakes'},
    {id: 6 , title: 'Champagne Cupcake', price: 13.99 , image: '/images/gallery/gallery-8.jpg', category: 'cupcakes'}
  ])

  const changleCategoryHandler: (newCategory: string) => void = (newCategory) => {
    setMainCategory(newCategory)
  }

  return (
    <div className='gallery-wrapper container mt-16 flex flex-col items-center'>
       <div className="categories-wrapper inline-flex relative  items-center justify-center gap-x-16">
        {
          categories.map((category,index) => (
            <CategoryFilter key={index} title={category} isActive={category === mainCategory ? true : false} onChange={changleCategoryHandler}/>
          ))
        }
       <span className='absolute w-full h-[4px] -bottom-3 rounded-lg bg-[#9b9b9b] '></span>
       </div>

       <div className='gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-12'>
          {
            mainCategory === 'all categories' && gallery.map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }

          {
            mainCategory === 'cakes' && gallery.filter(product => product.category === 'cakes').map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }

          {
            mainCategory === 'cupcakes' && gallery.filter(product => product.category === 'cupcakes').map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }
       </div>
    </div>
  )
}

export default Gallery
