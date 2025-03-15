import React from 'react';

const SuccessStories = () => {
  // Featured success stories data
  const featuredStories = [
    {
      id: 1,
      name: "Miguel Rodriguez",
      age: 17,
      position: "Midfielder",
      image: "https://images.unsplash.com/photo-1564135624576-c5c88640f235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      achievement: "Secured a spot in FC Barcelona's youth academy",
      quote: "Coach Javier's personalized training program transformed my game completely. His attention to detail and tactical knowledge helped me develop the skills and mindset needed to earn a place at La Masia.",
      stats: [
        { label: "Passing Accuracy", before: "72%", after: "89%" },
        { label: "Sprint Speed", before: "28 km/h", after: "31 km/h" },
        { label: "Decision Making", before: "65/100", after: "88/100" }
      ],
      videoId: "dQw4w9WgXcQ" // YouTube video ID
    },
    {
      id: 2,
      name: "Sofia Alvarez",
      age: 24,
      position: "Forward",
      image: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
      achievement: "Professional contract with Primera División team",
      quote: "After hitting a plateau in my career, Javier's specialized training helped me break through to the next level. His approach to the mental aspects of the game was just as valuable as the technical training.",
      stats: [
        { label: "Goals per Season", before: "8", after: "17" },
        { label: "Shot Conversion", before: "14%", after: "23%" },
        { label: "Match Stamina", before: "75/100", after: "92/100" }
      ],
      videoId: "dQw4w9WgXcQ" // YouTube video ID
    }
  ];

  // Regular testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Lucas Torres",
      age: 15,
      position: "Goalkeeper",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "Even as a young player, Coach Javier took my goals seriously. His training improved not just my skills but my confidence on the field as well."
    },
    {
      id: 2,
      name: "Isabella Ramos",
      age: 19,
      position: "Defender",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      quote: "Javier's attention to the defensive aspects of the game helped me secure a starting position on my university team. His drills and feedback were always precise and valuable."
    },
    {
      id: 3,
      name: "Marco Rossi",
      age: 28,
      position: "Forward",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "As a recreational player in my late twenties, I didn't think I could improve much, but Javier proved me wrong. His sessions were challenging, fun, and remarkably effective."
    },
    {
      id: 4,
      name: "Elena Sanchez",
      age: 16,
      position: "Midfielder",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "Working with Coach Javier helped me understand the game at a much deeper level. His tactical insights made me a smarter, more effective player."
    },
    {
      id: 5,
      name: "Carlos Mendez",
      age: 22,
      position: "Winger",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "The speed and agility training program Javier designed for me transformed my game. I'm now consistently beating defenders and creating more scoring opportunities."
    },
    {
      id: 6,
      name: "Antoni Fernandez",
      age: 34,
      position: "Coach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      quote: "As a fellow coach, I highly respect Javier's methodology and approach. His mentorship has greatly influenced my own coaching style and philosophy."
    }
  ];

  // Progress metrics
  const progressMetrics = [
    { id: 1, label: "Average skill improvement", value: "37%" },
    { id: 2, label: "Players who achieved their primary goal", value: "92%" },
    { id: 3, label: "Youth players advancing to higher levels", value: "43%" },
    { id: 4, label: "Professional careers launched", value: "18" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80"
            alt="Soccer coach with players"
          />
          <div className="absolute inset-0 bg-primary mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Success Stories</h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Discover how players of all ages and skill levels have transformed their game through personalized coaching.
            These stories showcase real results achieved through dedicated training and expert guidance.
          </p>
        </div>
      </div>

      {/* Results Overview */}
      <div className="bg-gray-light">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Proven Results Across All Levels
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              From youth players to professionals, our training programs deliver measurable improvements in technical skills, tactical awareness, physical conditioning, and mental performance.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {progressMetrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-primary">
                    {metric.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Featured Success Stories */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Success Stories
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              In-depth case studies of players who have achieved remarkable progress through our training programs.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {featuredStories.map((story, index) => (
              <div
                key={story.id}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    {story.name}
                  </h3>
                  <p className="mt-2 text-lg text-primary font-semibold">
                    {story.position} | Age: {story.age}
                  </p>
                  <p className="mt-1 text-lg text-secondary font-bold">
                    Achievement: {story.achievement}
                  </p>
                  <div className="mt-6 bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <blockquote>
                      <p className="text-xl font-medium text-gray-900 italic">
                        "{story.quote}"
                      </p>
                    </blockquote>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-gray-900">Performance Improvements:</h4>
                    <dl className="mt-4 space-y-4">
                      {story.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <dt className="text-base font-medium text-gray-700">
                            {stat.label}
                          </dt>
                          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-lg font-semibold text-primary">
                              <span className="line-through text-gray-500 mr-2">{stat.before}</span>
                              <span className="text-primary">{stat.after}</span>
                              <span className="ml-2 text-sm font-medium text-gray-500">
                                after training
                              </span>
                            </div>
                            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                              <svg className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              {Math.round(((parseFloat(stat.after) - parseFloat(stat.before)) / parseFloat(stat.before)) * 100)}%
                            </div>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <div className={`mt-10 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative aspect-w-4 aspect-h-5">
                    <img
                      className="rounded-lg shadow-xl object-cover"
                      src={story.image}
                      alt={`${story.name}, ${story.position}`}
                    />
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Training Highlights:</h4>
                    <div className="relative aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${story.videoId}`}
                        title={`${story.name} training video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute w-full h-full rounded-lg shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="bg-gray-light">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Client Testimonials
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Hear what players and coaches have to say about their experience working with Javier.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white overflow-hidden shadow rounded-lg transform transition duration-500 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-primary">
                        {testimonial.position}, {testimonial.age} years old
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <blockquote className="text-base text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
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
            <span className="block">Ready to write your own success story?</span>
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

export default SuccessStories;