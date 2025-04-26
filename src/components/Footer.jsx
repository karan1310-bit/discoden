import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import logo from "../../public/images/disco.png";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="max-h-fit bg-black text-white flex flex-col px-6 md:px-12 py-8 md:py-12 mt-2 font-neue">
    {/* Logo */}
    <div className="">
      <Image src={logo} width={132} height={132} alt="Logo" className="w-24 h-24 md:w-40 md:h-40 rounded-full" />
    </div>
    
    {/* Main Text */}
    <div className="flex flex-col justify-center items-start mt-4 md:mt-6">
      <h1 className="text-3xl md:text-8xl font-light leading-tight">
        A Inflatable Club <br />
        space at <span className="text-yellow-400">Metro Vancouver,</span>
        <br />
        <span className="text-yellow-400">Canada</span>
      </h1>
    </div>
    
    {/* Footer */}
    <div className="text-gray-400 text-lg flex flex-col md:flex-row md:justify-between md:items-center w-full mt-8 md:mt-12">
      <span>&copy; 2025, developement: SleekFrameStudio</span>
      <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
        <a href="#" className="text-4xl transition-all ease-in duration-200 hover:text-yellow-400"><FaInstagram /></a>
        <a href="#" className="text-4xl transition-all ease-in duration-200 hover:text-yellow-400"><FaWhatsapp /></a>
        <a href="#" className="text-4xl transition-all ease-in duration-200 hover:text-yellow-400"><CiMail /></a>
        <a href="#" className="text-4xl transition-all ease-in duration-200 hover:text-yellow-400"><FaTiktok /></a>
      </div>
    </div>
  </div>
  )
}

export default Footer