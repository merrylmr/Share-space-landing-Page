import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  // Determine nav styling based on scroll and current page.
  // Home, SpaceDetail, and EventDetail start transparent for immersive Hero sections.
  const isTransparentPage = ['home', 'space-detail', 'event-detail'].includes(currentPage);
  
  const navClasses = isTransparentPage && !scrolled
    ? 'py-8 bg-transparent'
    : 'py-4 bg-neutral-900 shadow-lg';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-white">
        
        {/* Left Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <button 
            onClick={(e) => handleNavClick(e, 'spaces')} 
            className={`hover:text-gray-300 transition-colors ${currentPage === 'spaces' ? 'text-white' : 'text-gray-400'}`}
          >
            Spaces
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'membership')}
            className={`hover:text-gray-300 transition-colors ${currentPage === 'membership' ? 'text-white' : 'text-gray-400'}`}
          >
            Membership
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'events')} 
            className={`hover:text-gray-300 transition-colors ${currentPage === 'events' ? 'text-white' : 'text-gray-400'}`}
          >
            Events
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'about')} 
            className={`hover:text-gray-300 transition-colors ${currentPage === 'about' ? 'text-white' : 'text-gray-400'}`}
          >
            About Us
          </button>
        </div>

        {/* Logo */}
        <div 
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl font-bold tracking-widest uppercase cursor-pointer hover:text-gray-200 transition-colors"
        >
          LOGO
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <button className="text-sm font-medium border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            Login
          </button>
          <button 
            onClick={(e) => handleNavClick(e, 'membership')}
            className="text-sm font-bold bg-[#dfff5e] text-black px-6 py-2 rounded-full hover:bg-[#cbe654] transition-colors shadow-md transform hover:scale-105 duration-200"
          >
            Book a Space
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;