import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" onClick={scrollToTop} className="flex items-center group">
                <span className="font-cinzel font-bold text-3xl text-military-900 group-hover:text-military-800 transition-colors tracking-wider">
                  DAJAH CONSULTANCY
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" onClick={scrollToTop} className="text-military-700 hover:text-military-600 transition-colors">About Us</Link>
              <Link to="/services" onClick={scrollToTop} className="text-military-700 hover:text-military-600 transition-colors">Services</Link>
              <Link to="/industries" onClick={scrollToTop} className="text-military-700 hover:text-military-600 transition-colors">Industries</Link>
              <Link to="/contact" onClick={scrollToTop} className="text-military-700 hover:text-military-600 transition-colors">Contact</Link>
              <Link 
                to="/schedule"
                onClick={scrollToTop}
                className="px-4 py-2 bg-military-600 text-white rounded-md hover:bg-military-700 transition-colors shadow-sm hover:shadow-md"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-military-700 hover:text-military-600 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-military-100">
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-military-700 hover:text-military-600 hover:bg-military-50 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-military-700 hover:text-military-600 hover:bg-military-50 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className="block px-3 py-2 rounded-md text-military-700 hover:text-military-600 hover:bg-military-50 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Industries
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-military-700 hover:text-military-600 hover:bg-military-50 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Contact
            </Link>
            <Link 
              to="/schedule"
              className="block px-3 py-2 rounded-md text-white bg-military-600 hover:bg-military-700 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-military-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <span className="font-cinzel font-bold text-2xl text-white">DAJAH CONSULTANCY</span>
              </div>
              <p className="mt-4 text-military-200">
                Professional accounting and financial advisory services for businesses of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/services" onClick={scrollToTop} className="text-military-200 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" onClick={scrollToTop} className="text-military-200 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" onClick={scrollToTop} className="text-military-200 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <p className="text-military-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-military-200">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-military-200">Sunday: Closed</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-military-800 text-center text-military-200">
            <p>&copy; {new Date().getFullYear()} DAJAH CONSULTANCY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}