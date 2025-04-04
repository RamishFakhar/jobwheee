import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative mx-3 sm:mx-5 mt-2">
      {/* Desktop Hero with clipPath - hidden on mobile */}
      <div className="relative h-screen max-h-[700px] overflow-hidden rounded-3xl hidden sm:block" style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 75% 100%, 50% 90%, 25% 100%, 0 100%)"
      }}>
        {/* Background image */}
        <img 
          src="/images/women.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Left section - FIND THE TALENT - replaced with s.png - VISIBLE ONLY ON LARGER SCREENS */}
        <div className="absolute top-16 left-16 z-10">
          <div className="max-w-md">
            <img 
              src="/images/s.png" 
              alt="Find the talent sign up" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        
        {/* Right section - WE'LL HANDLE THAT with overlay text - VISIBLE ONLY ON LARGER SCREENS */}
        <div className="absolute top-32 right-16 z-10">
          <div className="max-w-md relative">
            <img 
              src="/images/rec.png" 
              alt="We'll handle that" 
              className="w-full h-auto rounded-lg"
            />
            {/* Overlay text - now with more top padding */}
            <div className="absolute inset-0 p-4 flex flex-col">
              {/* Text at the top with extra padding-top */}
              <h2 className="text-4xl font-bold text-white text-center mt-8">
                WE'LL <span className="text-[#D1E74A]">HANDLE</span> THAT
              </h2>
            </div>
            
            {/* Buttons centered at the bottom border - moved slightly right */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/3 translate-y-1/2 z-20 flex items-center justify-center space-x-3">
              <Link href="/register">
                <div className="bg-[#D1E74A] text-gray-900 font-semibold px-4 py-3 rounded-full text-sm">
                  Sign Up for Contract
                </div>
              </Link>
              <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Bar and Dropdown - positioned above the white curve */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md px-4">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            {/* Search Icon */}
            <div className="bg-black rounded-full h-10 w-10 flex items-center justify-center ml-1 my-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Search Input */}
            <input 
              type="text" 
              placeholder="Find a job, talent or service" 
              className="flex-1 py-2 px-3 text-sm text-gray-700 focus:outline-none" 
            />
            
            {/* Talent Dropdown */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 mr-1 my-1">
              <span className="font-medium text-sm text-gray-700">Talent</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute right-[-120px] top-11 bg-white rounded-lg shadow-lg p-2 w-56 z-30">
            {/* Talent Option */}
            <div className="flex items-center mb-2 pb-1 border-b border-gray-100">
              <div className="p-0.5 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-xs">Talent</div>
                <div className="text-xs text-gray-600">Hire professionals effortlessly.</div>
              </div>
            </div>
            
            {/* Client Option */}
            <div className="flex items-center">
              <div className="p-0.5 mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-xs">Client</div>
                <div className="text-xs text-gray-600">Apply to jobs posted by clients</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Colored dots directly below the search bar center */}
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#D1E74A]"></div>
          <div className="w-2 h-2 rounded-full bg-[#D1E74A] opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      
      {/* Mobile Hero without clipPath */}
      <div className="relative h-[400px] max-h-[400px] overflow-hidden rounded-3xl sm:hidden">
        {/* Background image */}
        <img 
          src="/images/women.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Colored dots for mobile - moved upward from the education button */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#D1E74A]"></div>
          <div className="w-2 h-2 rounded-full bg-[#D1E74A] opacity-70"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        
        {/* Education and Tutoring Button for mobile - at bottom of image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white text-black font-extrabold py-2 px-6 rounded-full shadow-xl whitespace-nowrap text-sm">
            EDUCATION AND TUTORING
          </div>
        </div>
      </div>
      
      {/* Education and Tutoring Button - Desktop only */}
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="bg-white text-black text-sm font-bold py-3 px-8 rounded-full shadow-md whitespace-nowrap">
          EDUCATION AND TUTORING
        </div>
      </div>
      
      {/* Mobile-only containers for FIND THE TALENT and WE'LL HANDLE THAT sections */}
      <div className="sm:hidden mt-8 px-4 space-y-6">
        {/* FIND THE TALENT section for mobile */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="/images/de.png" 
            alt="Find the talent" 
            className="w-full h-auto"
          />
        </div>
        
        {/* WE'LL HANDLE THAT section for mobile */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="/images/de2.png" 
            alt="We'll handle that" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Search Bar for mobile - placed below WE'LL HANDLE THAT section */}
        <div className="w-full max-w-md mx-auto">
          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            {/* Search Icon */}
            <div className="bg-black rounded-full h-10 w-10 flex items-center justify-center ml-1 my-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Search Input */}
            <input 
              type="text" 
              placeholder="Find a job, talent or service" 
              className="flex-1 py-2 px-3 text-sm text-gray-700 focus:outline-none" 
            />
            
            {/* Talent Dropdown */}
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 mr-1 my-1">
              <span className="font-medium text-sm text-gray-700">Talent</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {/* Dropdown Menu for mobile */}
          <div className="relative">
            <div className="absolute right-0 top-2 bg-white rounded-lg shadow-lg p-2 w-56 z-30">
              {/* Talent Option */}
              <div className="flex items-center mb-2 pb-1 border-b border-gray-100">
                <div className="p-0.5 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-xs">Talent</div>
                  <div className="text-xs text-gray-600">Hire professionals effortlessly.</div>
                </div>
              </div>
              
              {/* Client Option */}
              <div className="flex items-center">
                <div className="p-0.5 mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-xs">Client</div>
                  <div className="text-xs text-gray-600">Apply to jobs posted by clients</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Colored dots below the search bar for mobile */}
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#D1E74A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#D1E74A] opacity-70"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 