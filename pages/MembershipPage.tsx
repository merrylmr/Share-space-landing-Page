import React from 'react';
import { MEMBERSHIP_TIERS } from '../constants';

const MembershipPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-neutral-900">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Collaborative Workspace" 
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
             <span className="text-[#dfff5e] text-xs font-bold tracking-widest uppercase">Open for Applications</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Design. Collaborate. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Belong.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Join a living network that turns streets into stages. Access workspaces, tools, and a global community of urban innovators.
          </p>
        </div>
      </section>

      {/* Intro / Manifesto Section (Refined) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column: Manifesto Tagline */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight sticky top-32 text-neutral-900">
                Walk in, speak up, belong — share the space, own the city.
              </h2>
            </div>

            {/* Right Column: Detailed Description */}
            <div className="lg:w-2/3 lg:pl-12 border-l border-gray-100">
              <p className="text-xl md:text-2xl leading-relaxed font-light text-neutral-600 mb-8">
                Join the <strong className="text-neutral-900 font-medium">Shared Spaces Collective</strong> and become part of a living network that turns streets into stages for everyday connection. As a member you receive early-access to our open-source design kits, invites to co-creation labs in Belfast, Bradford and Atlanta, and a quarterly zine curated by our youth photo-teams.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-neutral-600">
                Whether you are a planner, parent, artist or apprentice, your voice is added to the global dashboard we share with city halls—so every crosswalk, bench or bus stop we prototype is shaped by the people who actually use it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-neutral-50 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="text-center mb-20">
             <span className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block">Pricing Plans</span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">Choose Your Access</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold tracking-tighter text-neutral-900">{tier.price}$</span>
                    <span className="text-gray-500 font-medium">/mo</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-12">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-neutral-700">
                        <div className="w-5 h-5 mr-3 rounded-full bg-[#dfff5e] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-neutral-900 text-white py-4 rounded-full font-bold hover:bg-[#dfff5e] hover:text-black transition-colors duration-300">
                  Select Plan
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default MembershipPage;