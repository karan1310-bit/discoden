import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import logo from "../../public/images/disco.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="max-h-fit bg-black text-white flex flex-col px-6 md:px-12 py-4 md:py-10 mt-2 font-neue">
    {/* Logo */}
    <div className="">
      <Image src={logo} width={132} height={132} alt="Logo" className="w-32 h-32 md:w-40 md:h-40 rounded-full" />
    </div>
    
    {/* Main Text */}
    <div className="flex flex-col justify-center items-start mt-4 md:mt-6">
      <h1 className="text-5xl md:text-8xl font-light leading-tight">
        A Inflatable Club <br />
        space at <span className="text-yellow-400">Metro Vancouver,</span>
        <br />
        <span className="text-yellow-400">Canada.</span>
      </h1>
    </div>
    
    {/* Footer */}
    <div className="text-gray-400 text-lg flex flex-col md:flex-row md:justify-between md:items-center w-full mt-8 md:mt-12">
      
      <div className="flex space-x-2 md:space-x-4">
        <a href="https://www.instagram.com/discoden_airclub?igsh=ZDk2aTgxMmxubW1l" target='blank' className="text-5xl transition-all ease-in duration-200 hover:text-yellow-400"><FaInstagram /></a>
        <a href="https://wa.me/12367775425" target='blank' className="text-5xl transition-all ease-in duration-200 hover:text-yellow-400"><FaWhatsapp /></a>
        <a href="mailto:discoden.airclub@gmail.com" target='blank' className="text-5xl transition-all ease-in duration-200 hover:text-yellow-400"><CiMail /></a>
        <a href="https://www.tiktok.com/@discoden_airclub?_t=8lriNlylT1i&_r=1" target='blank' className="text-5xl transition-all ease-in duration-200 hover:text-yellow-400"><FaTiktok /></a>
      </div>
      
      <span className='mt-8 md:mt-0'>Contact: 236-777-5425</span>
      <span>&copy 2025<br /> Powered by: <a href='https://sleekframestudio.com/'>SleekFrameStudio</a></span>
    </div>
  </div>
  )
}

export default Footer