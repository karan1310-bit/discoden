'use client'
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-black mt-12 md:mt-20 text-white flex flex-col px-6 md:px-16 font-neue">
      {/* Heading */}
      <div className="flex flex-col items-start mb-8">
        <h1 className="text-4xl md:text-7xl font-bold uppercase">Your NightLife Fun is Our <br /> Priority</h1>
        <p className="mt-12 text-xl flex items-center justify-center space-x-0">
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
            type="text" 
            placeholder="Organisation/Company Name" 
            {...register("company")} 
            className="bg-transparent border border-gray-400 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <textarea 
          placeholder="Tell us more about your project*" 
          {...register("projectDetails", { required: "Project details are required" })} 
          className="bg-transparent border border-gray-400 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full h-32"
        ></textarea>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg transition duration-300 hover:bg-yellow-400"
          >
            <span>SUBMIT</span>
            <span className="animate-pulse">→</span>
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
