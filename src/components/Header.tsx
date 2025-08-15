import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xs border-b border-gray-100 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/">
            <img src="/y-logo.png" alt="Yirang Lim" className="w-10 h-10 hover:cursor-pointer" />
          </a>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">
              Experience
            </a>
            <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">
              Work
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
