import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ContactUs from '@/components/policies/contact'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page