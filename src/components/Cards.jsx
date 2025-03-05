import React from 'react'

const Cards = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 lg:px-20" style={{ backgroundImage: 'url(/background.jpg)' }}>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Podcast Section */}
        <div className="bg-orange-500 p-8 md:p-12 text-white relative mb-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">The Podcast</h1>
          <div className="mt-6">
            <span className="inline-block text-sm px-4 py-1 border-2 border-white rounded-full italic">Coming soon</span>
          </div>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Dive into the minds of visionaries leading groundbreaking initiatives. Hear their stories
            and learn how they’re creating real change across the world.
          </p>
        </div>
        {/* Crowdfunding Section */}
        <div className="bg-gradient-to-b from-gray-600 to-gray-800 p-8 md:p-12 text-white relative mt-12">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">The Crowdfunding</h1>
          <div className="mt-6">
            <button className="text-white text-sm underline underline-offset-4">View more</button>
          </div>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Help us give a voice to the solutions transforming the world: support our podcast
            and be part of the change.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cards