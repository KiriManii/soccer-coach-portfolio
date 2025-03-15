import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Social media links
  const socialLinks = [
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-secondary font-bold text-xl">JM</span>
              <span className="ml-2 font-semibold">Soccer Coach</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Professional soccer coaching services in Barcelona, Spain. 
              Expert training for players of all levels, from youth development to professional enhancement.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About Me</Link></li>
              <li><Link to="/training-programs" className="text-sm text-gray-300 hover:text-white">Training Programs</Link></li>
              <li><Link to="/success-stories" className="text-sm text-gray-300 hover:text-white">Success Stories</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-300">Carrer de Provença, 123</li>
              <li className="text-sm text-gray-300">Barcelona, Spain</li>
              <li className="text-sm text-gray-300">Email: coach@javiermartinez.com</li>
              <li className="text-sm text-gray-300">Phone: +34 123 456 789</li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} className="text-gray-300 hover:text-white">
                <span className="sr-only">{link.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {link.icon === 'twitter' && (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  )}
                  {link.icon === 'instagram' && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  )}
                  {link.icon === 'youtube' && (
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  )}
                  {link.icon === 'linkedin' && (
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
          <p className="mt-4 md:mt-0 text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Javier Martínez Soccer Coach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;