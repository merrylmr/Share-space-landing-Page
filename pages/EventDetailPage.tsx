import React, { useEffect } from 'react';
import { Event } from '../types';

interface EventDetailPageProps {
  event: Event;
  onBack: () => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ event, onBack }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900 pb-24">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/30 z-10"></div>
        <img 
          src={event.images[0]} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent pt-32 pb-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
                {event.title}
              </h1>
              <div className="hidden md:block">
                 <button className="bg-[#dfff5e] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg transform hover:scale-105 duration-200">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sidebar / Metadata */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Mobile CTA */}
            <div className="block md:hidden">
               <button className="w-full bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#dfff5e] hover:text-black transition-colors shadow-lg">
                  Register Now
                </button>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Date</h3>
              <p className="text-2xl font-medium">{event.dateRange}</p>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Location</h3>
              <p className="text-2xl font-medium">{event.location}</p>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Category</h3>
              <div className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm font-medium">
                {event.category}
              </div>
            </div>

             <div className="border-t border-neutral-200 pt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Share</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Main Description & Gallery */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold mb-8">About the Event</h2>
            <div className="prose prose-lg prose-neutral max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-600 font-light">
                {event.description}
              </p>
              <p className="text-xl leading-relaxed text-gray-600 font-light mt-6">
                This event is part of our ongoing commitment to "Shared Spaces", exploring how design influences social interaction. Join urban planners, local artists, and youth coordinators as we dive deep into the narratives that shape our cities.
              </p>
            </div>

            {/* Gallery Grid */}
            <h3 className="text-2xl font-bold mb-8">Event Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.images.map((img, idx) => (
                <div key={idx} className={`relative overflow-hidden rounded-lg group ${idx === 0 ? 'md:col-span-2 md:h-96' : 'h-64'}`}>
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </div>
              ))}
              {/* Add some mock placeholder images if only 2 exist to fill grid */}
              <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg text-gray-400">
                 More moments captured...
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;