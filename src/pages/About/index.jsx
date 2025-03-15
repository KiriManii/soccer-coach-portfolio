import React from 'react';

const About = () => {
  // Coach certifications data
  const certifications = [
    {
      id: 1,
      name: "UEFA Pro License",
      issuer: "UEFA",
      year: "2018",
      description: "The highest coaching certification available in European soccer."
    },
    {
      id: 2,
      name: "Spanish Football Federation (RFEF) Level 3",
      issuer: "Royal Spanish Football Federation",
      year: "2015",
      description: "Advanced tactical and technical training certification."
    },
    {
      id: 3,
      name: "Sports Science Degree",
      issuer: "University of Barcelona",
      year: "2012",
      description: "Specialization in athletic performance and sports psychology."
    },
    {
      id: 4,
      name: "Youth Development Specialist",
      issuer: "La Masia Training Center",
      year: "2014",
      description: "Specialized certification in youth player development methodologies."
    }
  ];

  // Career timeline data
  const careerTimeline = [
    {
      id: 1,
      year: "2010-2013",
      role: "Youth Coach",
      organization: "FC Barcelona Academy",
      description: "Trained U-12 and U-14 youth teams, focusing on technical skill development and tactical awareness."
    },
    {
      id: 2,
      year: "2013-2016",
      role: "Assistant Coach",
      organization: "RCD Espanyol",
      description: "Served as technical assistant coach for the reserve team, specializing in midfielder training and match analysis."
    },
    {
      id: 3,
      year: "2016-2019",
      role: "Head Coach",
      organization: "UE Sant Andreu",
      description: "Led the first team to two consecutive playoff appearances, implementing a possession-based playing style."
    },
    {
      id: 4,
      year: "2019-2022",
      role: "Technical Director",
      organization: "Catalonia Regional Federation",
      description: "Oversaw coach education programs and regional youth development initiatives."
    },
    {
      id: 5,
      year: "2022-Present",
      role: "Professional Coach & Consultant",
      organization: "Independent",
      description: "Providing personalized coaching to players of all levels and consulting services to clubs."
    }
  ];

  // Coaching philosophy pillars
  const philosophyPillars = [
    {
      id: 1,
      title: "Technical Excellence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Developing precise technical skills is the foundation of all elite players. My training emphasizes mastery of ball control, passing, and movement."
    },
    {
      id: 2,
      title: "Tactical Intelligence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      description: "Understanding the game is as important as physical ability. I teach players to read the game, make smart decisions, and adapt to changing match situations."
    },
    {
      id: 3,
      title: "Physical Conditioning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Modern soccer demands peak physical performance. My programs incorporate cutting-edge sports science to optimize speed, endurance, and injury prevention."
    },
    {
      id: 4,
      title: "Mental Fortitude",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "The psychological aspect of performance is often overlooked. I help players develop confidence, focus, resilience, and a growth mindset."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-primary transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            
            <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
              <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-12">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">About Coach</span>
                  <span className="block text-secondary">Javier Martínez</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Professional soccer coach with over 15 years of experience developing players from youth levels to professionals. Based in Barcelona, Spain.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1518093515050-c6e391e7f86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Coach Javier explaining tactics"
          />
        </div>
      </div>

      {/* Coach Bio Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                My Coaching Journey
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Born and raised in Barcelona, I grew up immersed in the rich soccer culture of Catalonia. 
                My journey in coaching began after a brief playing career in the lower Spanish divisions was cut short by injury.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                What seemed like a setback became the catalyst for my true calling. I discovered that my ability to 
                analyze the game, communicate effectively, and inspire players made coaching my perfect path.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                After earning my coaching licenses, I worked my way through youth academies, assistant coaching roles, 
                and eventually head coaching positions. Each experience has shaped my philosophy and approach.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Today, I focus on providing personalized coaching services to players of all levels, from ambitious 
                youth players to professionals looking to refine their skills. My greatest satisfaction comes from 
                seeing my students surpass their own expectations and fulfill their potential.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-5 aspect-h-6">
                <img 
                  className="rounded-lg shadow-lg object-cover object-center" 
                  src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80" 
                  alt="Coach Javier analyzing a match"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              My Coaching Philosophy
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Combining traditional Spanish methodology with modern approaches to develop complete players.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {philosophyPillars.map((pillar) => (
                <div key={pillar.id} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 flex-1">
                    <div className="w-12 h-12 rounded-md bg-primary-100 text-primary p-2 mb-5 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-primary">{pillar.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-4">The Barcelona Influence</h3>
            <p className="text-lg text-gray-600 mb-6">
              My coaching methodology is deeply influenced by Barcelona's renowned approach to the game, but I've adapted it to work with players of all levels, not just elite academy prospects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">Key Principles:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Technical mastery as the foundation</li>
                  <li>Positional play and spatial awareness</li>
                  <li>Decision-making under pressure</li>
                  <li>Creativity within structure</li>
                  <li>Proactive rather than reactive play</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-800">My Adaptations:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Individualized approach based on player attributes</li>
                  <li>Integration of modern sports science</li>
                  <li>Tactical flexibility based on player profiles</li>
                  <li>Progressive skill building for non-elite players</li>
                  <li>Mental performance techniques from multiple sports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-16">
            Professional Timeline
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

            <div className="space-y-12">
              {careerTimeline.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full border-4 border-white bg-primary shadow"></div>
                  
                  {/* Content */}
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    {/* Year */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-primary">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Empty space for the line */}
                    <div className="w-2/12"></div>
                    
                    {/* Description */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                      <h3 className="text-lg font-bold text-gray-900">{item.role}</h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                      <p className="mt-1 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl text-center mb-12">
            Certifications & Education
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-primary">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{cert.issuer}</p>
                  <p className="text-gray-500">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to elevate your game?</span>
            <span className="block text-blue-100">Book a consultation session today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/training-programs"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-opacity-90"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;