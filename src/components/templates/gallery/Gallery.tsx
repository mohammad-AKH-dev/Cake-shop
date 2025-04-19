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

type data = {
  data: galleryBoxPropsType[]
}


function Gallery({data}: data) {

  const [categories,setCategories] = useState<string[]>(['all categories','cakes','cupcakes'])
  const [mainCategory,setMainCategory] = useState<string>('all categories')


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
            mainCategory === 'all categories' && data.map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }

          {
            mainCategory === 'cakes' && data.filter(product => product.category === 'cakes').map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }

          {
            mainCategory === 'cupcakes' && data.filter(product => product.category === 'cupcakes').map(product => (
              <GalleryBox key={product.id} {...product}/>
            ))
          }
       </div>
    </div>
  )
}

export default Gallery
