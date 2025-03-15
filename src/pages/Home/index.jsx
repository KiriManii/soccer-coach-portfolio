import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Parallax Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Layer - Stadium */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1626248801379-51a0748e0dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(-10px) scale(2)',
          }}
        />
        
        {/* Middle Layer - Team */}
        <div 
          className="absolute inset-0 z-20 opacity-90"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(-5px) scale(1.5)',
          }}
        />
        
        {/* Foreground Layer - Coach */}
        <div 
          className="absolute inset-0 z-30 opacity-80"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0) scale(1)',
          }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Unlock Your Potential
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
              Personalized Soccer Training with Coach Javier Martínez in Barcelona
            </p>
            <Link 
              to="/contact" 
              className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition duration-300 inline-block"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Welcome to Elite Soccer Coaching</h2>
              <p className="text-lg text-gray-700 mb-6">
                I'm Javier Martínez, a professional soccer coach with over 15 years of experience training players from youth leagues to professional levels. Based in Barcelona, I offer personalized coaching that focuses on technical skills, tactical awareness, physical conditioning, and mental preparation.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                My methodology combines traditional Spanish techniques with modern training approaches, tailored to each player's unique needs and goals.
              </p>
              <Link 
                to="/about" 
                className="text-primary font-semibold border-b-2 border-secondary pb-1 hover:border-primary transition duration-300"
              >
                Learn more about my coaching philosophy →
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1526232686293-5b219ee08e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="Coach Javier explaining tactics" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Training Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from a variety of specialized programs designed to develop specific skills and meet your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Youth Development" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Youth Development</h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive training for young players focused on fundamental skills, teamwork, and fostering a love for the game.
                </p>
                <Link 
                  to="/training-programs" 
                  className="text-primary font-semibold hover:text-secondary transition duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Professional Enhancement" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Professional Enhancement</h3>
                <p className="text-gray-700 mb-4">
                  Advanced training for established players looking to refine specific skills and elevate their game to the next level.
                </p>
                <Link 
                  to="/training-programs" 
                  className="text-primary font-semibold hover:text-secondary transition duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Goalkeeper Training" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Goalkeeper Specialist</h3>
                <p className="text-gray-700 mb-4">
                  Specialized training for goalkeepers, focusing on positioning, reflexes, distribution, and commanding the defense.
                </p>
                <Link 
                  to="/training-programs" 
                  className="text-primary font-semibold hover:text-secondary transition duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/training-programs" 
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition duration-300 inline-block"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Hear what my clients have to say about their experience and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Miguel Rodriguez</h3>
                  <p className="text-sm text-gray-300">FC Barcelona Youth Player</p>
                </div>
              </div>
              <p className="italic">
                "Coach Javier's training transformed my game completely. His attention to detail and personalized approach helped me secure a spot in the FC Barcelona youth academy."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Sofia Alvarez</h3>
                  <p className="text-sm text-gray-300">Professional Player</p>
                </div>
              </div>
              <p className="italic">
                "Working with Javier helped me overcome a performance plateau I'd been stuck at for years. His tactical insights and training methods are world-class."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h3 className="font-bold">Lucas Torres</h3>
                  <p className="text-sm text-gray-300">Amateur League Player</p>
                </div>
              </div>
              <p className="italic">
                "Even as a recreational player, Coach Javier took my goals seriously. His training improved not just my skills but my confidence on the field as well."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/success-stories" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary transition duration-300 inline-block"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Ready to Elevate Your Game?</h2>
                <p className="text-lg text-primary mb-8">
                  Book a session with Coach Javier Martínez and start your journey toward soccer excellence today.
                </p>
                <div>
                  <Link 
                    to="/contact" 
                    className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition duration-300 inline-block mr-4"
                  >
                    Book Now
                  </Link>
                  <Link 
                    to="/training-programs" 
                    className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition duration-300 inline-block"
                  >
                    View Programs
                  </Link>
                </div>
              </div>
              <div className="hidden md:block" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;