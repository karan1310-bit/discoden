import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <main className='min-h-screen bg-black text-white'>
      <Navbar />
      <Form />
      <Testimonial />
      <Footer />
    </main>
  )
}

export default page