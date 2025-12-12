import React from 'react';
import { TEAM_DATA } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* NEW HERO SECTION (Matches Membership Style) */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-neutral-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white pt-20">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-[#dfff5e]"></span>
             <span className="text-gray-200 text-xs font-bold tracking-widest uppercase">Est. 2015</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Multidisciplinary <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfff5e] via-white to-gray-400">
              Collective.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Architects, planners, and community leaders working together to reshape how we live in cities.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 md:py-32 bg-white text-neutral-900">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 mb-32">
            {/* Sticky Left Label */}
            <div className="lg:w-1/4">
              <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-900 border-t border-neutral-900 pt-4 lg:sticky lg:top-32">
                Our Mission & Story
              </h3>
            </div>

            {/* Right Text Content */}
            <div className="lg:w-3/4 max-w-4xl">
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
                The Shared Spaces Project team is a multidisciplinary collective of urban planners, community engagement specialists, and youth-programme coordinators based in Belfast, Bradford and Atlanta. Together we bring expertise in participatory design, social-psychology research and inclusive urbanism, ensuring that every intervention is co-created with the people who actually use the streets, parks and buses we study.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-12">
                We are supported by an advisory circle of 16- to 25-year-old “city scouts,” local artists, and accessibility champions who test concepts through photography walks, pop-up exhibitions and temporary street retrofits. This blend of professional insight and lived experience allows us to translate everyday stories into evidence-based design guidance that cities can apply to make shared spaces safer, livelier and welcoming for all ages, cultures and mobility levels.
              </p>
              
              <div className="flex gap-4">
                 <button className="text-sm font-medium border border-neutral-900 px-6 py-3 rounded-full hover:bg-neutral-900 hover:text-white transition-colors">
                  View Annual Report
                 </button>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-24"></div>

          {/* Team Section */}
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/4">
                <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-900 border-t border-neutral-900 pt-4 lg:sticky lg:top-32">
                Meet the Experts
                </h3>
            </div>

            <div className="lg:w-3/4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
                {TEAM_DATA.map((member) => (
                    <div key={member.id} className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer">
                    <div className="relative mb-6 overflow-hidden rounded-full w-32 h-32 md:w-40 md:h-40 shadow-sm mx-auto lg:mx-0">
                        <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">
                        {member.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">
                        {member.role}
                    </p>
                    </div>
                ))}
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;