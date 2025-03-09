'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa';

const Insta = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchInstagramPosts = async () => {
        try {
          const response = await axios.get(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=YOUR_ACCESS_TOKEN`
          );
          setPosts(response.data.data);
        } catch (error) {
          console.error("Error fetching Instagram posts", error);
        }
      };
  
      fetchInstagramPosts();
    }, []);
  
    return (
      <div className="bg-black text-white py-2 font-neue px-6 md:px-16">
        {/* FOLLOW US Title */}
        <div className='flex items-center justify-between mb-12'>
        <h2 className="text-5xl font-bold">FOLLOW US</h2>
        <div className="">
          <a
            href="https://www.instagram.com/YOUR_USERNAME/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full shadow-lg hover:opacity-80"
          >
            GO TO FEED
          </a>
        </div></div>
  
        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
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