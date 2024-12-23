import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import TermsAndConditions from '@/components/policies/TermsAndConditions'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar/>
        <TermsAndConditions/>
        <Footer/>
    </div>
  )
}

export default page