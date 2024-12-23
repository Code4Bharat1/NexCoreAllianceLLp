import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import PrivacyPolicy from '@/components/policies/Privacy'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <PrivacyPolicy/>
        <Footer/>
    </div>
  )
}

export default page