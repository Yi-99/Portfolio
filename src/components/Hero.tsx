import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight font-stalemate">
          Yirang Lim
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light italic">
          Providing scalable software solutions to real-world problems since 2023.
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-12 font-light italic">
          Currently building at TDP Bakery.
        </p>
        <button 
          className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-lg hover:cursor-pointer"
          onClick={() => {
            window.location.href = '#about';
          }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
