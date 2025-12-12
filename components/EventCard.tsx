import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  index: number;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, index, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group border-b border-gray-200 py-16 md:py-24 cursor-pointer"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12">
          
          {/* Left Column: Title and Images */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
              {event.title}
            </h2>
            
            <div className="flex gap-4 h-64 md:h-80 overflow-hidden">
              <div className="w-1/2 overflow-hidden rounded-sm relative">
                <img 
                  src={event.images[0]} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="w-1/2 overflow-hidden rounded-sm relative mt-8">
                 <img 
                  src={event.images[1]} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out delay-75"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Description and Date */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-0 pl-0 lg:pl-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light line-clamp-4">
              {event.description}
            </p>
            
            <div className="mt-8 lg:mt-0 flex justify-between items-end">
              <button className="text-sm font-bold uppercase tracking-wider text-neutral-900 border border-neutral-200 px-6 py-2 rounded-full group-hover:bg-neutral-900 group-hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                View Details
              </button>

              <div className="relative">
                <span className="text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-1 inline-block">
                  {event.dateRange}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventCard;