import PageHeader from '@/components/modules/PageHeader'
import Shop from '@/components/templates/shop/Shop'
import { GetStaticPathsContext } from 'next'
import { AppContext } from 'next/app'
import React from 'react'
import { Context } from 'vm'

type productBoxType = {
  id: number
  title: string
  discount?: string
  price: string
  score: number
  category: "cakes" | "puddings" | "Sweets"
  sources: string[]
}

type categoryType = {
  value: string
  count: number
}

type shopPagePropsType = {
  products: productBoxType[]
  categories: categoryType[]
}

function ShopPage(props: shopPagePropsType) {
  const {categories , products} = props
  return (
    <div className='shop-page relative z-[999]'>
      <PageHeader title='shop' customPath='/shop/1'/>
      <div className="container mt-24">
         <Shop products={products} categories={categories}/>
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const res = await fetch('https://cake-shop-api-yhrn.onrender.com/api/products')
  const products = await res.json()
  
  const paths = products.slice(0,Math.ceil(products.length / 3)).map((product: productBoxType) => ({
    params: { id: String(product.id) },
  }))
 
  return {
      paths, fallback: false
  }
}

export async function getStaticProps () {
  const productsRes = await fetch('https://cake-shop-api-yhrn.onrender.com/api/products')
  const products = await productsRes.json()

  const categoriesRes = await fetch('https://cake-shop-api-yhrn.onrender.com/api/categories')
  const categories = await categoriesRes.json()

  return {
    props: {
      products,
      categories
    }
  }
}

export default ShopPage
