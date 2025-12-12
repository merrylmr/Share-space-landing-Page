import React from 'react';
import Hero from '../components/Hero';
import { SPACES_DATA, MEMBERSHIP_TIERS } from '../constants';

interface HomePageProps {
  onEventClick?: (id: string) => void;
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // We will use images from SPACES_DATA but customize the text to represent categories
  const previewSpaces = [
    {
      id: SPACES_DATA[0].id,
      image: SPACES_DATA[0].image,
      title: 'Creative Hubs',
      description: 'Open-plan environments designed for collaboration, serendipity, and rapid prototyping.'
    },
    {
      id: SPACES_DATA[1].id,
      image: SPACES_DATA[1].image,
      title: 'Quiet Sanctuaries',
      description: 'Distraction-free zones with sound-dampening acoustics for deep work and focus.'
    },
    {
      id: SPACES_DATA[2].id,
      image: SPACES_DATA[2].image,
      title: 'Enterprise Suites',
      description: 'Fully furnished private offices tailored for growing teams and established companies.'
    }
  ];

  const features = [
    { id: '01', title: 'Flexible Workspaces', desc: 'Find the workspace that suits your unique work style, whether you prefer private offices, collaborative shared spaces, or modern meeting rooms. UrbanHub adapts to your needs, fostering a productive and tailored environment.' },
    { id: '02', title: 'Tech-Infused Productivity', desc: 'Experience seamless connectivity and smart tools integrated into every corner.' },
    { id: '03', title: 'Community Collaboration', desc: 'Connect with like-minded professionals in our curated networking events.' },
    { id: '04', title: 'Premium Comfort Spaces', desc: 'Relax and recharge in our ergonomically designed lounges and quiet zones.' }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-lg font-medium text-neutral-800 max-w-xs">
                Workplace Options for Every Need
              </h3>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
                Finding the ideal space is a thing of the past. Welcome to a new era of productivity and collaboration.
              </h2>
              <button 
                onClick={() => onNavigate('membership')}
                className="inline-block border-b border-black pb-1 text-sm font-bold uppercase tracking-wide hover:opacity-60 transition-opacity"
              >
                Discover Our Membership Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Grid (Categories) */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewSpaces.map((space) => (
              <div 
                key={space.id} 
                className="group cursor-pointer"
                onClick={() => onNavigate('spaces')}
              >
                <div className="overflow-hidden rounded-xl h-64 mb-6 relative">
                  <img 
                    src={space.image} 
                    alt={space.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#9bb33e] transition-colors">{space.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{space.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 tracking-tight uppercase">
            WHY CHOOSE US
          </h2>
          
          <div className="flex flex-col gap-4">
            {features.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-sm p-8 md:p-12 group hover:bg-neutral-900 hover:text-white transition-colors duration-300 cursor-default">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                     <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                     <p className="text-sm md:text-base opacity-70 max-w-3xl leading-relaxed">
                       {item.desc}
                     </p>
                  </div>
                  <span className="text-xl font-bold opacity-50">{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA Banner */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative rounded-[2rem] overflow-hidden h-[60vh] md:h-[80vh] flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Work Smarter" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative z-10 text-center text-white px-6">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Work Smarter, <br /> Not Harder
              </h2>
              <button 
                onClick={() => onNavigate('membership')}
                className="bg-[#dfff5e] text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors transform hover:scale-105 duration-200"
              >
                Book a Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-sm">
              <h3 className="text-2xl font-medium leading-snug">
                Choose Your <br/> UrbanHub Location
              </h3>
            </div>
            <div className="mt-4 md:mt-0">
               <h2 className="text-4xl font-bold mb-2">Locations</h2>
               <div className="text-right">
                  <button 
                    onClick={() => onNavigate('spaces')}
                    className="text-sm font-bold border-b border-black pb-0.5 hover:opacity-60"
                  >
                    2 Cities, 21 Locations
                  </button>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="h-[400px] md:h-[500px] rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => onNavigate('spaces')}
            >
               <img 
                  src={SPACES_DATA[0].image} 
                  alt="City 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">Belfast</h4>
                  <p className="opacity-80">Cathedral Quarter</p>
               </div>
            </div>
             <div 
              className="h-[400px] md:h-[500px] rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => onNavigate('spaces')}
            >
               <img 
                  src={SPACES_DATA[2].image} 
                  alt="City 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold">Atlanta</h4>
                  <p className="opacity-80">Midtown</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section (Unified Style) */}
      <section className="py-24 bg-neutral-50 border-t border-gray-100">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-900">Membership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tighter text-neutral-900">{tier.price}$</span>
                    <span className="text-gray-500 font-medium">/mon</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-12">
                    {tier.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm font-medium text-neutral-700">
                        <div className="w-5 h-5 mr-3 rounded-full bg-[#dfff5e] flex items-center justify-center flex-shrink-0 mt-0.5">
                           <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                    {tier.features.length > 3 && (
                      <li className="text-sm text-gray-400 pl-8">
                        + {tier.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <button 
                  onClick={() => onNavigate('membership')}
                  className="w-full bg-neutral-900 text-white py-4 rounded-full font-bold hover:bg-[#dfff5e] hover:text-black transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
         </div>
      </section>

    </div>
  );
};

export default HomePage;