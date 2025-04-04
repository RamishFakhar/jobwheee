import React from 'react';

const ContractCard = () => {
  return (
    <div className="bg-white rounded-[28px] p-7 shadow-md max-w-[550px] mx-auto">
      {/* Contract Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="font-black text-3xl tracking-tight">
          CONTRACT
        </div>
        <div className="text-right">
          <div className="font-semibold text-lg">Looking for Math Teacher</div>
          <div className="text-base">Payment Type: <span className="font-semibold">Fixed Price</span></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex justify-between mb-7">
        {/* Client Side */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img src="/images/c1.png" alt="Client" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#E8EDF4] rounded-full px-5 py-1 mb-1 text-sm">
            Client
          </div>
          <div className="flex items-center justify-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 font-semibold">5.0</span>
          </div>
          <div className="font-semibold text-center">Edward Smith</div>
          <div className="text-gray-600 text-sm text-center">Founder of MathTech</div>
        </div>

        {/* Talent Side */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-2">
            <img src="/images/c2.png" alt="Talent" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#D1E74A] rounded-full px-5 py-1 mb-1 text-sm">
            Talent
          </div>
          <div className="flex items-center justify-center mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 font-semibold">4.7</span>
          </div>
          <div className="font-semibold text-center">Edward Smith</div>
          <div className="text-gray-600 text-sm text-center">Math Teacher</div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="font-bold text-lg">Description</div>
        </div>
        <p className="text-gray-700 pl-11">
          We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.
        </p>
      </div>

      {/* Job Details */}
      <div className="mb-7">
        <div className="flex items-center mb-4">
          <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="font-bold text-lg">Job Details</div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 pl-11">
          <div>
            <div className="text-gray-600">Start Date:</div>
            <div className="font-medium">Jan 15, 2025.</div>
          </div>
          <div className="text-right">
            <div className="text-gray-600">Status:</div>
            <div className="font-medium">Ongoing</div>
          </div>
          <div>
            <div className="text-gray-600">End Date:</div>
            <div className="font-medium">Not Estimated</div>
          </div>
          <div className="text-right">
            <div className="text-gray-600">Budget:</div>
            <div className="font-medium">$ 2000</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white text-center py-4 px-4 rounded-2xl text-sm">
        Fixed-priced contract is under the protection of the payment system.
      </div>
    </div>
  );
};

const ContractsSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center flex-col">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-lime-400 mr-2"></div>
              <h2 className="text-2xl sm:text-3xl font-bold">SUCCESSFUL C<span className="relative">ONTRACTS<span className="absolute bottom-0 left-0 w-full border-b-4 border-lime-400"></span></span></h2>
            </div>
          </div>
        </div>

        {/* Card.png images side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First card */}
          <div className="flex justify-center">
            <img 
              src="/images/card.png" 
              alt="Contract Card" 
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Second card */}
          <div className="flex justify-center">
            <img 
              src="/images/card.png" 
              alt="Contract Card" 
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {/* Third card */}
          <div className="flex justify-center">
            <img 
              src="/images/card.png" 
              alt="Contract Card" 
              className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-4">
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContractsSection; 