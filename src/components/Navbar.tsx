import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-blue-500/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3 group">
            <div>
              <h1 className={`text-2xl font-bold ${
                isHomePage && !isScrolled ? 'text-white' : 'text-white'
              }`}>
                Dajah Group
              </h1>
              <p className="text-xs text-blue-500 tracking-wider">
                Music Administration
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Solutions', path: '/solutions' },
              { name: 'Technology', path: '/technology' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-500'
                    : isHomePage && !isScrolled
                    ? 'text-white hover:text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className={`md:hidden p-2 rounded-md ${
              isHomePage && !isScrolled ? 'text-white' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Technology', path: '/technology' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-500 bg-blue-500/10'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
