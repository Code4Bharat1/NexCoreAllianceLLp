import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import RefundPolicy from '@/components/policies/refundpolicy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <RefundPolicy/>
        <Footer/>
    </div>
  )
}

export default page