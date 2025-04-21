import React from 'react'
import { AiFillMail, AiFillPhone } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className=" bg-black text-white">
      
      {/* Contact Section */}
      <div className="px-6 md:px-16 lg:px-16 font-neue py-8 md:py-16">
        <h2 className="max-w-5xl text-3xl lg:text-5xl font-medium">Contact Disco Den - Let's Bring the Party to You!</h2>
        <p className="text-xl max-w-5xl text-gray-500 mt-4">
        Ready to ignite your event with inflatable nightlife magic? Whether it's a corporate soirée, birthday blowout, or a celebration that demands dazzle, our team is here to craft your VIP experience.
        Your party deserves the Disco Den difference - let's make it legendary!
        </p>

        {/* Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Us */}
          <div className="bg-black text-white p-6 rounded-3xl relative h-64 md:h-72 border-[1px] border-white flex flex-col justify-between transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black">
            <p className="text-xl bg-transparent">02380 014786</p>
            <h3 className="text-2xl font-bold bg-transparent">Call Us</h3>
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-white p-3 rounded-full">
              <AiFillPhone size={24} className='bg-transparent' />
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-black text-white p-6 rounded-3xl relative h-64 md:h-72 border-[1px] border-white flex flex-col justify-between transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black">
            <p className="text-xl bg-transparent">We’ll respond within 1 business day</p>
            <h3 className="text-2xl bg-transparent font-bold">Email Us</h3>
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-white p-3 rounded-full">
              <AiFillMail size={24} className='bg-transparent'/>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-black text-white p-6 rounded-3xl relative h-64 md:h-72 flex border-[1px] border-white flex-col justify-between transition-all ease-in duration-300 hover:bg-yellow-400 hover:text-black">
            <p className="text-xl bg-transparent">Chat with us</p>
            <h3 className="text-2xl bg-transparent font-bold">Whatsapp</h3>
            <div className="absolute bottom-4 right-4 bg-yellow-400 text-white p-3 rounded-full">
              <FaWhatsapp
              size={24} className='bg-transparent'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact