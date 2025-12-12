import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Modern Office Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-tight mb-4 tracking-tight">
          <span className="block text-white">CRAFT YOUR</span>
          <span className="block text-white/90">SUCCESS HERE</span>
        </h1>
        
        {/* Floating Link */}
        <div className="absolute bottom-32 md:bottom-auto md:right-12 md:top-1/2 transform md:-translate-y-1/2">
          <button className="group flex items-center gap-4 text-white hover:text-[#dfff5e] transition-colors">
            <span className="text-sm font-bold uppercase tracking-widest">Membership Plans</span>
            <div className="w-12 h-12 rounded-full border border-white group-hover:border-[#dfff5e] flex items-center justify-center transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;