import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('uk');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Flag images
  const flags = {
    uk: {
      src: '/images/uk-flag.png',
      alt: 'UK Flag',
      name: 'English'
    },
    gr: {
      src: '/images/greece-flag.png',
      alt: 'Greek Flag',
      name: 'Greek'
    }
  };

  // Fallback to emoji if images not available yet
  const flagEmojis = {
    uk: '🇬🇧',
    gr: '🇬🇷'
  };

  return (
    <nav className="bg-black py-2 sm:py-3 px-3 sm:px-4 md:px-12 shadow-lg rounded-3xl mx-3 sm:mx-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="relative flex items-center">
              <img src="/images/vector 214.png" alt="vector" className="h-6 sm:h-8 mr-1 sm:mr-2" />
              <img src="/images/jobwhee.png" alt="Jobwee" className="h-5 sm:h-6" />
              <div className="absolute left-0 bottom-0">
                <img src="/images/dot.png" alt="dot" className="h-5 w-5 absolute -left-0.5 sm:-left-0.5 bottom-1 sm:bottom-1" />
              </div>
            </div>
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/post-a-job" className="text-gray-300 hover:text-white">Post a Job</Link>
          <Link href="/explore-jobs" className="text-gray-300 hover:text-white">Explore Jobs</Link>
          <Link href="/hire-a-talent" className="text-gray-300 hover:text-white">Hire a Talent</Link>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative">
            <button onClick={toggleLanguageDropdown} className="flex items-center text-white text-xs sm:text-sm">
              {/* Flag icon - using actual flag image */}
              <img 
                src={flags[selectedLanguage].src} 
                alt={flags[selectedLanguage].alt} 
                className="w-6 h-4 rounded-sm object-cover"
              />
              <span className="ml-1 font-medium hidden sm:inline">{flags[selectedLanguage].name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white rounded-lg shadow-lg overflow-hidden z-10 w-40">
                <button 
                  onClick={() => {
                    setSelectedLanguage('uk');
                    setIsLanguageDropdownOpen(false);
                  }} 
                  className={`flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-800 w-full text-left ${selectedLanguage === 'uk' ? 'bg-gray-800' : ''}`}
                >
                  <img src={flags.uk.src} alt={flags.uk.alt} className="w-6 h-4 mr-3 rounded-sm object-cover" />
                  {flags.uk.name}
                </button>
                <button 
                  onClick={() => {
                    setSelectedLanguage('gr');
                    setIsLanguageDropdownOpen(false);
                  }} 
                  className={`flex items-center px-4 py-3 text-sm font-medium hover:bg-gray-800 w-full text-left ${selectedLanguage === 'gr' ? 'bg-gray-800' : ''}`}
                >
                  <img src={flags.gr.src} alt={flags.gr.alt} className="w-6 h-4 mr-3 rounded-sm object-cover" />
                  {flags.gr.name}
                </button>
              </div>
            )}
          </div>
          
          <div className="hidden sm:block">
            <Link href="/login" className="text-white text-xs sm:text-sm">Sign In</Link>
          </div>
          
          <Link href="/signup">
            <div className="inline-flex items-center bg-white text-black text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition duration-200">
              <span>Sign Up</span>
            </div>
          </Link>
          
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 