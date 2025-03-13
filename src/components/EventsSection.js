import React, { useEffect, useRef, useState } from 'react';
import EventCard from './EventCard';

const EventsSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updateCursor = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener("mousemove", updateCursor);
      return () => document.removeEventListener("mousemove", updateCursor);
    }, []);
  
  const scrollRef = useRef(null);
  
  const events = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
      title: 'Tech Innovation Summit',
      date: 'April 15, 2024',
      description: 'Join tech leaders for a day of inspiring talks and networking opportunities. Learn about cutting-edge innovations.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070',
      title: 'Startup Pitch Contest',
      date: 'May 20, 2024',
      description: 'Watch startups compete for funding and connect with investors. Great networking opportunity for entrepreneurs.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012',
      title: 'Global Entrepreneur Week',
      date: 'June 10-15, 2024',
      description: 'A week-long celebration of entrepreneurship with workshops, panels, and networking events.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?q=80&w=2036',
      title: 'Women in Tech Conference',
      date: 'July 5, 2024',
      description: 'Celebrating and empowering women in technology fields with inspirational speakers and workshops.'
    }
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-midnight mt-16 cursor-none">
      {/* Custom Cursor */}
      <div
        className="custom-cursor fixed w-4 h-4 bg-yellow-400 rounded-full pointer-events-none transition-transform transform -translate-x-1/2 -translate-y-1/2 z-50"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neonBlue mb-2 gradient-text">Events</h2>
          <p className="text-textDim text-xl">Explore Events of Startupsphere!</p>
        </div>
        
        <div className="relative">
          {/* Left arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-secondary/70 hover:bg-neonBlue/30 text-white rounded-full p-2 transition-all duration-300 cursor-none"
            onClick={() => scroll('left')}
            aria-label="Previous events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Event cards container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-8 pt-4 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event) => (
              <div key={event.id} className="snap-start">
                <EventCard
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              </div>
            ))}
          </div>
          
          {/* Right arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-secondary/70 hover:bg-neonBlue/30 text-white rounded-full p-2 transition-all duration-300 cursor-none"
            onClick={() => scroll('right')}
            aria-label="Next events"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 