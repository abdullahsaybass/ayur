import React from 'react'
import Header from '../Header/Header'
import Hero from './Hero'
import SupplementsSection from './Natural'
import ShopCategories from '../products/category'
import HomeProduct from '../products/Product'
import Services from './Aboutus'
import HerbalProductForm from './Singlep'
import ReviewSection from './Review'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Hero /> 
        <SupplementsSection />
        <ShopCategories />
        <HomeProduct />
        <Services />
        <HerbalProductForm />
        <ReviewSection />
        <Footer />
    </div>
  )
}

export default Home