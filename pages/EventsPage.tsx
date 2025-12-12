import React, { useEffect } from 'react';
import EventCard from '../components/EventCard';
import { EVENTS_DATA } from '../constants';

interface EventsPageProps {
  onEventClick: (id: string) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ onEventClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION (Matches Membership Style) */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Event Crowd" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-neutral-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white pt-20">
          <div className="inline-flex items-center gap-2 border border-[#dfff5e]/50 bg-[#dfff5e]/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-[#dfff5e] animate-pulse"></span>
             <span className="text-[#dfff5e] text-xs font-bold tracking-widest uppercase">Season 2024-2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Connect. Experience. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Inspire.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Curated exhibitions, workshops, and urban interventions exploring the future of shared spaces.
          </p>
        </div>
      </section>

      {/* Events List */}
      <div className="flex flex-col bg-white">
        {EVENTS_DATA.map((event, index) => (
          <EventCard 
            key={event.id} 
            event={event} 
            index={index} 
            onClick={() => onEventClick(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;