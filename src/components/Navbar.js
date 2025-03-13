import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Events');
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-secondary py-4 px-6 shadow-md backdrop-blur-sm bg-opacity-90 border-b border-midnight z-50 cursor-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-neonBlue text-2xl font-bold neon-glow cursor-none">StartupSphere</div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-lg font-medium transition-colors duration-300 cursor-none ${
                active === item.name 
                  ? 'text-primary neon-glow' 
                  : 'text-textDim hover:text-neonBlue'
              }`}
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-neonBlue hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 