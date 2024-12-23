'use client';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ShippingPolicy from '@/components/policies/deliverypolicy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ShippingPolicy/>
        <Footer/>
    </div>
  )
}

export default page