import React from 'react';
import { TEAM_DATA } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-neutral-900">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row gap-16 mb-32">
          {/* Sticky Left Label */}
          <div className="lg:w-1/4">
            <h3 className="text-xs md:text-sm font-medium tracking-widest uppercase text-neutral-800 lg:sticky lg:top-32">
              A Team of Our Experts
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
            
            <a href="#" className="inline-block text-sm font-medium border-b border-neutral-300 pb-1 hover:border-black transition-colors">
              Discover Our Membership Plans
            </a>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-24">
          {TEAM_DATA.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative mb-6 overflow-hidden rounded-full w-32 h-32 md:w-48 md:h-48 shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out grayscale group-hover:grayscale-0"
                />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                {member.name}
              </h4>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;