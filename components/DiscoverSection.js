import React from 'react';
import Link from 'next/link';

const DiscoverSection = () => {
  // Using numbered images 10-15 instead of the original categories
  const numberedImages = [
    {
      image: "/images/10.png",
      alt: "Service 10",
      number: 10
    },
    {
      image: "/images/11.png",
      alt: "Service 11",
      number: 11
    },
    {
      image: "/images/12.png",
      alt: "Service 12",
      number: 12
    },
    {
      image: "/images/13.png",
      alt: "Service 13",
      number: 13
    },
    {
      image: "/images/14.png",
      alt: "Service 14",
      number: 14
    },
    {
      image: "/images/15.png",
      alt: "Service 15",
      number: 15
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="flex items-center justify-center mb-12 sm:mt-0 mt-12">
          <div className="inline-flex items-center">
            <div className="w-3 h-3 bg-lime-400 mr-2"></div>
            <h2 className="text-3xl font-bold">DISC<span className="relative">OVER<span className="absolute bottom-0 left-0 w-full border-b-4 border-lime-400"></span></span></h2>
          </div>
        </div>

        {/* Numbered Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
          {numberedImages.map((item, index) => (
            <div key={index} className="flex flex-col max-w-[95%] mx-auto">
              <div className="rounded-3xl overflow-hidden mb-3 relative group">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-12 space-x-4">
          <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection; 