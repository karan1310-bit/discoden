"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaInstagram } from "react-icons/fa";

const Insta = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
           `https://graph.facebook.com/v19.0/17841465781611782/media?fields=id,media_type,media_url,permalink&access_token=EAATrfin7778BO1gYAn9dIZCZBrhZABJywWEPo20fLwbhggm6fq6mFa85h76lawMLIgg4fdhOcDPXdDAApmU5klByUFUL5qZBfxnHFaG1566tLhvRWZAtTwP8YPTvpTllTGFUJ6Cog8Bs1pTyyKmASgDFM7S0oiN5NVJF5POHhBG5xszF9LmcAEUOleL5CeZAbm`
        );
        console.log(response.data.data);
        setPosts(response.data.data);
      } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
      }
    };

    fetchInstagramPosts();
  }, []);

    return (
      <div className="bg-black text-white py-2 font-neue px-6 md:px-16">
        {/* FOLLOW US Title */}
        <div className='flex items-center justify-between mb-12'>
        <h2 className="text-3xl md:text-5xl font-bold">FOLLOW US</h2>
        <div className="flex items-center justify-center"> 
          <a
            href="https://www.instagram.com/discoden_airclub?igsh=ZDk2aTgxMmxubW1l"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 md:px-6 md:py-3 text-md md:text-lg font-neue font-light text-white bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full shadow-lg hover:opacity-80"
          >
            GO TO FEED
          </a>
        </div></div>
  
        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 px-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full">
                <FaInstagram className="text-white text-xl" />
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-400">Loading feed...</p>
        )}
      </div>
      </div>
  )
}

export default Insta