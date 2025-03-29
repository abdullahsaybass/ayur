import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'
import SupplementsSection from './Natural'
import ShopCategories from '../products/category'
import Services from './Aboutus'
import HerbalProductForm from './Singlep'
import ReviewSection from './Review'
import ProductCard from '../products/Product'
const home = () => {
  return (
    <div className='home'>
        <Hero />
        <SupplementsSection />
        <ShopCategories />
        <ProductCard />
        <Services />
       <HerbalProductForm />
       <ReviewSection/>
        
    </div>
  )
}

export default home