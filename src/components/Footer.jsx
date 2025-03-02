import React from 'react'

const Footer = () => {
  return (
    <div className="max-h-fit bg-black text-white flex flex-col px-8 py-8 mt-24 font-neue">
    {/* Logo */}
    <div className="text-6xl font-bold">
      <span className="block">Disco</span>
      <span className="block">Den</span>
    </div>
    
    {/* Main Text */}
    <div className="flex flex-col justify-center items-start mt-6 md:mt-12">
      <h1 className="text-3xl md:text-8xl font-light leading-tight">
        A club, radio station & event <br />
        space at <span className="text-gray-500">Vancouver,</span>
        <br />
        <span className="text-gray-500">Canada</span>
      </h1>
    </div>
    
    {/* Footer */}
    <div className="text-gray-400 text-lg flex flex-col md:flex-row md:justify-between md:items-center w-full mt-6 md:mt-12">
      <span>&copy; 2025</span>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">SoundCloud</a>
        <a href="#" className="hover:text-white">YouTube</a>
        <a href="#" className="hover:text-white">Whatsapp</a>
        <a href="#" className="hover:text-white">Partnerships</a>
      </div>
    </div>
  </div>
  )
}

export default Footer