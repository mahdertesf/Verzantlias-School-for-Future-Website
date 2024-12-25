import React from 'react';

const Hero = ({ image, heading, subheading, buttonText, buttonLink }) => (
  <div className="relative bg-gray-800">
    <div className="relative h-96 md:h-[600px] overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 transform scale-100 hover:scale-105"
          src={image}
          alt="Hero Image"
        />
      <div className="absolute inset-0 bg-gray-900 mix-blend-multiply"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-down">{heading}</h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-down">{subheading}</p>
        <a href={buttonLink} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded animate-fade-in-up">
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

export default Hero;