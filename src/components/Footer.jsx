import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="max-h-fit bg-black text-white flex flex-col px-6 md:px-12 py-8 md:py-12 mt-12 font-neue">
    {/* Logo */}
    <div className="text-6xl font-bold">
      <span className="block">Disco Den</span>
    </div>
    
    {/* Main Text */}
    <div className="flex flex-col justify-center items-start mt-6 md:mt-12">
      <h1 className="text-3xl md:text-8xl font-light leading-tight">
        A Inflatable Club <br />
        space at <span className="text-gray-500">Metro Vancouver,</span>
        <br />
        <span className="text-gray-500">Canada</span>
      </h1>
    </div>
    
    {/* Footer */}
    <div className="text-gray-400 text-lg flex flex-col md:flex-row md:justify-between md:items-center w-full mt-8 md:mt-12">
      <span>&copy; 2025</span>
      <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-white text-4xl"><FaInstagram /></a>
        <a href="#" className="hover:text-white text-4xl"><FaWhatsapp /></a>
        <a href="#" className="hover:text-white text-4xl"><CiMail /></a>
      </div>
    </div>
  </div>
  )
}

export default Footer