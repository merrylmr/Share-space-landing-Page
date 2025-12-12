import React, { useEffect } from 'react';
import { Space } from '../constants';

interface SpaceDetailPageProps {
  space: Space;
  onBack: () => void;
}

const SpaceDetailPage: React.FC<SpaceDetailPageProps> = ({ space, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24 text-neutral-900">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
         <div className="absolute inset-0 bg-neutral-900/20 z-10"></div>
        <img 
          src={space.image} 
          alt={space.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Back Button (Floating in Hero) */}
        <div className="absolute top-24 left-6 md:left-12 z-30">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            <span className="font-medium text-sm tracking-wide">Back to Spaces</span>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent pt-32 pb-12 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{space.name}</h1>
            <div className="flex items-center gap-4 text-lg md:text-xl font-light opacity-90">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {space.address}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfff5e]"></span>
              <span>{space.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Info */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The Space</h2>
              <p className="text-xl leading-relaxed text-gray-600 font-light">
                {space.description}
              </p>
            </div>

            <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">Amenities & Features</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {space.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#dfff5e] flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
               <h3 className="text-lg font-bold mb-4">Location Details</h3>
               <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  {/* Placeholder for map */}
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
                    Map View Unavailable
                  </span>
               </div>
            </div>
          </div>

          {/* Sidebar Info Card (No Form) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-8">
                <div>
                   <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Rate</span>
                   <span className="text-4xl font-bold text-neutral-900">{space.price}</span>
                </div>
                <div className="text-right">
                  <span className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Type</span>
                  <span className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm font-medium">{space.type}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                 <div className="flex justify-between items-center text-gray-600">
                   <span className="font-medium">Capacity</span>
                   <span>Up to {space.capacity} people</span>
                 </div>
                 <div className="flex justify-between items-center text-gray-600">
                   <span className="font-medium">Availability</span>
                   <span className="text-green-600 font-bold flex items-center gap-1">
                     <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                     Available Now
                   </span>
                 </div>
                 <div className="flex justify-between items-center text-gray-600">
                   <span className="font-medium">Minimum Booking</span>
                   <span>1 Day</span>
                 </div>
              </div>

              <button className="w-full bg-neutral-900 text-white py-4 rounded-full font-bold hover:bg-[#dfff5e] hover:text-black transition-colors duration-300 shadow-lg mb-4">
                Inquire About Space
              </button>
              
               <button 
                onClick={onBack}
                className="w-full bg-white text-neutral-900 border border-neutral-200 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300"
              >
                Return to List
              </button>
              
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SpaceDetailPage;