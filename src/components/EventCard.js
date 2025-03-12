import React from 'react';

const EventCard = ({ image, title, date, description }) => {
  return (
    <div className="bg-accent rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 min-w-[300px] max-w-[350px] border border-midnight hover:neon-border">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-primary text-sm font-semibold neon-glow">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-neonBlue">{title}</h3>
        <p className="text-textDim text-sm mb-4">{description}</p>
        <button className="bg-primary hover:bg-primary/80 text-text font-bold py-2 px-4 rounded transition-colors duration-300 border border-transparent hover:border-neonPurple">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard; 