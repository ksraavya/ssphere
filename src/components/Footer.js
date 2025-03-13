import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [language, setLanguage] = useState('English');
  
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary border-t border-midnight cursor-none">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">StartupSphere</h3>
            <p className="text-textDim mb-4">Empowering the next generation of entrepreneurs and innovators.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-textDim hover:text-neonBlue transition-colors cursor-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://facebook.com" className="text-textDim hover:text-neonPurple transition-colors cursor-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.231 8.222h-1.773c-.609 0-.736.253-.736.889v1.333h2.509l-.334 2.511h-2.175v7.823H9.601v-7.825H7.769v-2.509h1.832V8.667c0-1.87.969-2.889 3.172-2.889h2.458v2.444z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="text-textDim hover:text-primary transition-colors cursor-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.671a6.167 6.167 0 100 12.334 6.167 6.167 0 000-12.334zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-10.845a1.441 1.441 0 100 2.881 1.441 1.441 0 000-2.881z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-textDim hover:text-neonBlue transition-colors cursor-none">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neonBlue">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-textDim hover:text-primary transition-colors cursor-none">About Us</Link></li>
              <li><Link to="/team" className="text-textDim hover:text-neonPurple transition-colors cursor-none">Our Team</Link></li>
              <li><Link to="/careers" className="text-textDim hover:text-neonBlue transition-colors cursor-none">Careers</Link></li>
              <li><Link to="/contact" className="text-textDim hover:text-primary transition-colors cursor-none">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neonPurple">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-textDim hover:text-primary transition-colors cursor-none">Events</Link></li>
              <li><Link to="/blog" className="text-textDim hover:text-neonBlue transition-colors cursor-none">Blog</Link></li>
              <li><Link to="/portfolio" className="text-textDim hover:text-neonPurple transition-colors cursor-none">Portfolio</Link></li>
              <li><Link to="/partners" className="text-textDim hover:text-primary transition-colors cursor-none">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neonBlue">Language</h3>
            <select
              className="bg-accent border border-midnight text-text px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-neonPurple cursor-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-neonPurple">Subscribe to our newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-accent border border-midnight text-text px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-neonPurple flex-grow cursor-none"
                />
                <button className="bg-primary hover:bg-primary/80 text-text px-4 py-2 rounded-r-lg transition-colors border border-transparent hover:border-neonPurple cursor-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-midnight mt-12 pt-8 text-center text-textDim">
          <p>&copy; {currentYear} StartupSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 