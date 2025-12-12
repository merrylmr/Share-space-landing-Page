import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembershipPage from './pages/MembershipPage';
import SpacesPage from './pages/SpacesPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import AiAssistant from './components/AiAssistant';
import { EVENTS_DATA, SPACES_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedSpaceId, setSelectedSpaceId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Reset selections when navigating via main nav
    if (page !== 'event-detail') setSelectedEventId(null);
    if (page !== 'space-detail') setSelectedSpaceId(null);
  };

  const handleEventClick = (eventId: string) => {
    setSelectedEventId(eventId);
    setCurrentPage('event-detail');
  };

  const handleSpaceClick = (spaceId: string) => {
    setSelectedSpaceId(spaceId);
    setCurrentPage('space-detail');
  };

  const getSelectedEvent = () => {
    return EVENTS_DATA.find(e => e.id === selectedEventId);
  };

  const getSelectedSpace = () => {
    return SPACES_DATA.find(s => s.id === selectedSpaceId);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#dfff5e] selection:text-black">
      {/* Global Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && (
          <HomePage 
            onEventClick={handleEventClick} 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'events' && (
          <EventsPage onEventClick={handleEventClick} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'membership' && <MembershipPage />}
        
        {currentPage === 'spaces' && (
          <SpacesPage onSpaceClick={handleSpaceClick} />
        )}
        
        {currentPage === 'event-detail' && getSelectedEvent() && (
          <EventDetailPage 
            event={getSelectedEvent()!} 
            onBack={() => handleNavigate('events')} 
          />
        )}

        {currentPage === 'space-detail' && getSelectedSpace() && (
          <SpaceDetailPage 
            space={getSelectedSpace()!} 
            onBack={() => handleNavigate('spaces')} 
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
      
      <AiAssistant events={EVENTS_DATA} />
    </div>
  );
};

export default App;