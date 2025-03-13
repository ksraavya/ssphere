import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsSection from './components/EventsSection';
import TeamMembersSection from './components/TeamMembersSection';
import Footer from './components/Footer';
import './App.css';
import ContactPage from './components/Contact.js';
import AboutUs from './components/About.js';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gradient-cyberpunk">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <EventsSection />
                <TeamMembersSection />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<EventsSection />} />
            <Route path="/team" element={<TeamMembersSection />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
