import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem] mt-12">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Navigation */}
        <div className="flex justify-center space-x-6 md:space-x-12 mb-20 text-sm md:text-base text-gray-400">
          <button onClick={(e) => handleNavClick(e, 'spaces')} className="hover:text-white transition-colors">Spaces</button>
          <button onClick={(e) => handleNavClick(e, 'membership')} className="hover:text-white transition-colors">Membership</button>
          <button onClick={(e) => handleNavClick(e, 'home')} className="hover:text-white transition-colors">Events</button>
          <button onClick={(e) => handleNavClick(e, 'about')} className="hover:text-white transition-colors">About Us</button>
        </div>

        {/* Newsletter / CTA */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            STAY CONNECTED
          </h2>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/10 border border-transparent focus:border-white/50 text-white rounded-full py-4 px-8 pr-16 outline-none transition-all placeholder-gray-500"
            />
            <button className="absolute right-2 top-2 bg-white text-neutral-900 p-2 rounded-full hover:bg-[#dfff5e] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            DuozhuaMiao
          </div>
          <div className="mb-4 md:mb-0">
            Copyright 2015
          </div>
          <div className="flex items-center gap-2">
             <span className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-[10px] font-bold">小</span>
             <span>social icon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;