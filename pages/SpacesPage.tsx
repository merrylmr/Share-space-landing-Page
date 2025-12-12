import React, { useState } from 'react';
import { SPACES_DATA } from '../constants';

interface SpacesPageProps {
  onSpaceClick?: (id: string) => void;
}

const SpacesPage: React.FC<SpacesPageProps> = ({ onSpaceClick }) => {
  const [filterCity, setFilterCity] = useState('All');
  
  // Extract unique cities from data for the filter
  const cities = ['All', ...Array.from(new Set(SPACES_DATA.map(s => s.city)))];

  const filteredSpaces = filterCity === 'All' 
    ? SPACES_DATA 
    : SPACES_DATA.filter(space => space.city === filterCity);

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Urban Architecture" 
            className="w-full h-full object-cover object-center grayscale opacity-80"
          />
          <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Find Your Place.
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide">
             Work, meet, and create in our network of shared environments.
          </p>
        </div>
      </section>

      {/* FILTER & STATS SECTION */}
      <section className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mr-4 self-center hidden md:block">
                Filter by City:
              </span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setFilterCity(city)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filterCity === city 
                      ? 'bg-neutral-900 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Stats Display */}
            <div className="flex items-baseline gap-6 text-neutral-900">
               <div className="text-right">
                  <span className="block text-3xl font-bold leading-none">3</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Cities</span>
               </div>
               <div className="w-px h-10 bg-gray-200"></div>
               <div className="text-right">
                  <span className="block text-3xl font-bold leading-none">21</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Locations</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* HEADER CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Choose Your UrbanHub Location
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              From historic mills in Bradford to high-rise suites in Atlanta, our spaces are designed to reflect the local culture while providing world-class amenities for our global community.
            </p>
          </div>

          {/* SPACES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpaces.map((space) => (
              <div 
                key={space.id} 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => onSpaceClick?.(space.id)}
              >
                {/* Image Card */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img 
                    src={space.image} 
                    alt={space.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900">
                       {space.type}
                     </span>
                  </div>
                   <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="bg-[#dfff5e] text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                       View Details
                     </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                      {space.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{space.address}</p>
                  </div>
                  <div className="text-right">
                     <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                       {space.city}
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSpaces.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 text-lg">No locations found in this city.</p>
              <button 
                onClick={() => setFilterCity('All')}
                className="mt-4 text-neutral-900 border-b border-neutral-900 pb-0.5 hover:opacity-70"
              >
                View all locations
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default SpacesPage;