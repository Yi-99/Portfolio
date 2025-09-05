import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section when hash changes
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/${sectionId}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xs border-b border-gray-100 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img src="/y-logo.png" alt="Yirang Lim" className="w-10 h-10 hover:cursor-pointer" />
          </Link>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => handleSectionClick('#about')}
              className="text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick('#experience')}
              className="text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer"
            >
              Experience
            </button>
            <button 
              onClick={() => handleSectionClick('#work')}
              className="text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer"
            >
              Work
            </button>
            <button 
              onClick={() => handleSectionClick('#contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer"
            >
              Contact
            </button>
            <Link to="/thoughts" className="text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer">
              Thoughts
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
