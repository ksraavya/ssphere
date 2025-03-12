import React, { useState } from 'react';

const TeamMembersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  
  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'CEO', department: 'Executive', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Mark Davis', role: 'CTO', department: 'Technology', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Emma Wilson', role: 'Marketing Director', department: 'Marketing', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, name: 'James Brown', role: 'Lead Developer', department: 'Technology', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, name: 'Alex Turner', role: 'UX Designer', department: 'Design', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: 6, name: 'Ryan Smith', role: 'Product Manager', department: 'Product', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 7, name: 'Jessica Lee', role: 'HR Manager', department: 'HR', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: 8, name: 'Michael Carter', role: 'Backend Developer', department: 'Technology', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
  ];
  
  const departments = ['All', 'Executive', 'Technology', 'Marketing', 'Design', 'Product', 'HR'];
  
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <section className="py-16 cyberpunk-pulse">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neonPurple mb-2 neon-purple-glow">Our Team</h2>
          <p className="text-textDim text-xl">Meet the people behind StartupSphere</p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Search bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full bg-accent border border-midnight text-text px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonPurple"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute right-3 top-2.5 h-5 w-5 text-textDim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Department filter */}
          <div className="w-full md:w-auto">
            <select
              className="bg-accent border border-midnight text-text px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonPurple"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMembers.map(member => (
            <div key={member.id} className="bg-accent rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 border border-midnight hover:border-neonPurple">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-text">{member.name}</h3>
                <p className="text-neonBlue font-medium">{member.role}</p>
                <p className="text-textDim text-sm">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredMembers.length === 0 && (
          <div className="text-center py-10">
            <p className="text-textDim text-xl">No team members found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamMembersSection; 