'use client'

import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();  // Make sure reset is here!

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message Sent Successfully!');
        reset();  // Now reset will work!
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black mt-8 md:mt-16 text-white flex flex-col px-6 md:px-16 font-neue">
      {/* Heading */}
      <div className="flex flex-col items-start mb-2 md:mb-8">
        <h1 className="text-4xl md:text-7xl font-bold uppercase">Your NightLife Fun is Our <br /> Priority</h1>
        <p className="mt-4 md:mt-8 text-xl flex items-center justify-center space-x-0">
          <span>Give Us A Scratch</span>
          <span className="animate-bounce pl-2">↘</span>
        </p>
      </div>

      {/* Form */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-8xl bg-transparent py-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name*" 
            {...register("name", { required: "Name is required" })} 
            className="bg-transparent border border-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            {...register("phone")} 
            className="bg-transparent border border-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="email" 
            placeholder="Email Address*" 
            {...register("email", { required: "Email is required" })} 
            className="bg-transparent border border-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input 
          type="date" 
          {...register("eventDate", { required: "Event date is required" })} 
            
            className="bg-transparent border border-gray-400 text-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Date Picker */}
    <input 
      type="text" 
      placeholder="Event Type" 
      {...register("company")} 
      className="bg-transparent border border-gray-400 rounded-3xl px-5 py-3 text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />

    {/* Radio Button Group */}
    <fieldset className="bg-transparent border border-gray-400 rounded-3xl px-5 py-3">
      <legend className="text-gray-400 text-sm">Select an Option*</legend>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
        {["Inflatable Nightclub", "Hookah Catering", "Professional DJ", "Fire Breather", "Balloon Decor", "Boards & Snacks", "Food Catering", "Lounge Furniture Rentals"].map((option, index) => (
          <label key={index} className="flex items-center space-x-2 text-gray-400">
            <input 
              type="checkbox" 
              value={option} 
              {...register("radioOption", { required: "Please select an option" })} 
              className="accent-yellow-500"
            />
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  </div>

        <textarea 
          placeholder="What are you looking for?*" 
          {...register("projectDetails", { required: "Project details are required" })} 
          className="bg-transparent border border-gray-400 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full h-32"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-bold text-lg border border-white transition duration-300 hover:bg-yellow-400 hover:text-black"
          >
            <span className="bg-transparent">SUBMIT</span>
            <span className="animate-pulse bg-transparent">→</span>
          </button>
        </div>

        {/* Terms and Conditions */}
        <p className="text-sm text-gray-400 text-center mt-4">
          By submitting the above information, you agree to our 
          <a href="#" className="text-yellow-500 underline mx-1">Privacy Policy</a> & 
          <a href="#" className="text-yellow-500 underline mx-1">Terms & Conditions</a>.
        </p>
      </form>
    </div>
  );
};

export default Form;
