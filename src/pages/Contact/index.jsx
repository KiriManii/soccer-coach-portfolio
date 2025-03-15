import React, { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    playerInfo: {
      age: '',
      position: '',
      experience: ''
    }
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested playerInfo fields
    if (name.startsWith('playerInfo.')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        playerInfo: {
          ...formData.playerInfo,
          [field]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        playerInfo: {
          age: '',
          position: '',
          experience: ''
        }
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  // Frequently asked questions
  const faqs = [
    {
      question: "What ages do you coach?",
      answer: "I work with players of all ages, from young children (6+) to adult professionals. My training programs are customized based on age, skill level, and specific goals."
    },
    {
      question: "Where do training sessions take place?",
      answer: "Training sessions are held at various facilities across Barcelona, including Campo Municipal Narcís Sala and other partner locations. For team training, I can also come to your preferred location."
    },
    {
      question: "How much do sessions cost?",
      answer: "Session prices vary based on the type of training, frequency, and whether they are individual or group sessions. Individual sessions start at €75, while small group sessions typically start at €45 per person. Please contact me for a personalized quote."
    },
    {
      question: "Do you offer online coaching?",
      answer: "Yes, I provide video analysis and remote coaching services for players who cannot attend in-person sessions. This includes personalized training plans, video feedback, and regular check-ins."
    },
    {
      question: "How frequently should I train for best results?",
      answer: "For optimal improvement, I recommend 2-3 sessions per week. However, even one consistent session per week can produce significant results over time. We'll discuss your goals and availability to create the most effective schedule."
    }
  ];
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Get in Touch</h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Have questions about training programs or want to schedule a session? Reach out through any of the channels below or fill out the contact form.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-primary sm:px-10 xl:p-12">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                <svg className="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
                  <defs>
                    <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">Contact Information</h3>
              <p className="mt-6 text-base text-blue-100">
                Reach out to schedule a session, discuss training programs, or inquire about availability.
              </p>
              <dl className="mt-8 space-y-6">
                <dt><span className="sr-only">Phone number</span></dt>
                <dd className="flex text-base text-blue-50">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-3">+34 123 456 789</span>
                </dd>
                <dt><span className="sr-only">Email</span></dt>
                <dd className="flex text-base text-blue-50">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3">coach@javiermartinez.com</span>
                </dd>
                <dt><span className="sr-only">Address</span></dt>
                <dd className="flex text-base text-blue-50">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-3">
                    Carrer de Provença, 123<br />
                    Barcelona, Spain 08015
                  </span>
                </dd>
              </dl>
              <div className="mt-12">
                <h3 className="text-lg font-medium text-white">Training Locations</h3>
                <p className="mt-3 text-base text-blue-100">
                  Sessions are conducted at various locations across Barcelona, including:
                </p>
                <ul className="mt-4 space-y-2 text-base text-blue-100">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-200 mr-2">•</span>
                    <span>Campo Municipal Narcís Sala (Sant Andreu)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-200 mr-2">•</span>
                    <span>Centre Esportiu Municipal Olímpics Vall d'Hebron</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-blue-200 mr-2">•</span>
                    <span>Camp de Futbol Municipal Nou Sardenya</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-medium text-white">Follow Me</h3>
                <ul className="mt-4 flex space-x-6">
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-200 hover:text-white">
                      <span className="sr-only">YouTube</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-2xl font-bold text-gray-900">Send me a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                {/* Player Information (Optional Section) */}
                <div className="sm:col-span-2 border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-900">Player Information (Optional)</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    If you're inquiring about training sessions, please provide the following information:
                  </p>
                  
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    <div>
                      <label htmlFor="playerInfo.age" className="block text-sm font-medium text-gray-700">
                        Age Group
                      </label>
                      <div className="mt-1">
                        <select
                          id="playerInfo.age"
                          name="playerInfo.age"
                          value={formData.playerInfo.age}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                        >
                          <option value="">Select age group</option>
                          <option value="6-8">6-8 years</option>
                          <option value="9-12">9-12 years</option>
                          <option value="13-15">13-15 years</option>
                          <option value="16-18">16-18 years</option>
                          <option value="19-23">19-23 years</option>
                          <option value="24+">24+ years</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="playerInfo.position" className="block text-sm font-medium text-gray-700">
                        Position
                      </label>
                      <div className="mt-1">
                        <select
                          id="playerInfo.position"
                          name="playerInfo.position"
                          value={formData.playerInfo.position}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                        >
                          <option value="">Select position</option>
                          <option value="goalkeeper">Goalkeeper</option>
                          <option value="defender">Defender</option>
                          <option value="midfielder">Midfielder</option>
                          <option value="forward">Forward</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="playerInfo.experience" className="block text-sm font-medium text-gray-700">
                        Experience Level
                      </label>
                      <div className="mt-1">
                        <select
                          id="playerInfo.experience"
                          name="playerInfo.experience"
                          value={formData.playerInfo.experience}
                          onChange={handleChange}
                          className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                        >
                          <option value="">Select level</option>
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                          <option value="elite">Elite/Professional</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  {/* Success message */}
                  {submitSuccess && (
                    <div className="rounded-md bg-green-50 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">
                            Your message has been sent successfully! I'll get back to you as soon as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Error message */}
                  {submitError && (
                    <div className="rounded-md bg-red-50 p-4 mb-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-800">
                            There was an error sending your message. Please try again later.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-light">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.6856806219813!2d2.1619167!3d41.3850639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f325bbdbe1%3A0xa7c0f05acfb7a1!2sCarrer%20de%20Proven%C3%A7a%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sus!4v1648050720000!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-base text-gray-500">
              Have a question not answered here?{' '}
              <button 
                className="font-medium text-primary hover:text-opacity-90"
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact me directly
              </button>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;