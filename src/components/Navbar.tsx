import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Calculator, Briefcase, FileCheck,
  Shirt, Palette, Heart, Building2, Stethoscope,
  GraduationCap, Music2, Crown, Lightbulb, Laptop,
  Home, Truck, ChevronDown, ChevronRight
} from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showIndustriesDropdown, setShowIndustriesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const industriesDropdownRef = useRef<HTMLDivElement>(null);
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

  const services = [
    { name: 'TAX', icon: Calculator, path: '/services/tax' },
    { name: 'Advisory', icon: Briefcase, path: '/services/advisory' },
    { name: 'Audit & Accounting', icon: FileCheck, path: '/services/audit' }
  ];

  const industries = [
    // Professional Services
    {
      category: "Professional Services",
      items: [
        { name: 'Professional Services', icon: GraduationCap, path: '/industries/professional-services' },
        { name: 'Healthcare', icon: Stethoscope, path: '/industries/healthcare' },
        { name: 'Technology & ERP Services', icon: Laptop, path: '/industries/technology' },
        { name: 'Real Estate', icon: Home, path: '/industries/real-estate' },
        { name: 'Logistics & Transport', icon: Truck, path: '/industries/logistics-transport' }
      ]
    },
    // Creative Industries
    {
      category: "Creative & Luxury",
      items: [
        { name: 'Fashion', icon: Shirt, path: '/industries/fashion' },
        { name: 'Fine Arts & Antiques', icon: Palette, path: '/industries/fine-arts' },
        { name: 'Entertainment & Music', icon: Music2, path: '/industries/entertainment' }
      ]
    },
    // Specialized Services
    {
      category: "Specialized Services",
      items: [
        { name: 'High-Net-Worth', icon: Crown, path: '/industries/high-net-worth' },
        { name: 'Non Profit', icon: Heart, path: '/industries/non-profit' },
        { name: 'Construction', icon: Building2, path: '/industries/construction' },
        { name: 'Entrepreneurial Services', icon: Lightbulb, path: '/industries/entrepreneurial' }
      ]
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', dropdown: 'services' },
    { name: 'Industries', path: '/industries', dropdown: 'industries' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  const handleDropdownEnter = (type: 'services' | 'industries') => {
    if (type === 'services') {
      setShowServicesDropdown(true);
      setShowIndustriesDropdown(false);
    } else {
      setShowIndustriesDropdown(true);
      setShowServicesDropdown(false);
    }
  };

  const handleDropdownLeave = (type: 'services' | 'industries') => {
    setTimeout(() => {
      if (type === 'services' && !servicesDropdownRef.current?.matches(':hover')) {
        setShowServicesDropdown(false);
      } else if (type === 'industries' && !industriesDropdownRef.current?.matches(':hover')) {
        setShowIndustriesDropdown(false);
      }
    }, 100);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setShowServicesDropdown(false);
    setShowIndustriesDropdown(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    scrollToTop();
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowServicesDropdown(!showServicesDropdown);
    setShowIndustriesDropdown(false);
  };

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowIndustriesDropdown(!showIndustriesDropdown);
    setShowServicesDropdown(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
    setMobileIndustriesOpen(false);
  };

  const toggleMobileIndustries = () => {
    setMobileIndustriesOpen(!mobileIndustriesOpen);
    setMobileServicesOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo and Company Name */}
          <Link to="/" onClick={handleLinkClick} className="flex flex-col flex-shrink-0">
            <h1 className={`font-playfair text-2xl md:text-3xl lg:text-4xl font-bold ${
              isHomePage 
                ? isScrolled ? 'text-black' : 'text-white'
                : 'text-black'
            }`}>
              Dajah Group
            </h1>
            <div className={`h-px w-full ${isHomePage ? 'bg-accent-400' : 'bg-accent-500'} my-1`}></div>
            <p className={`text-xs md:text-sm font-lato tracking-wider ${
              isHomePage
                ? isScrolled ? 'text-gray-600' : 'text-white'
                : 'text-gray-600'
            }`}>
              Certified Public Accountants
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => 
              link.dropdown ? (
                <div 
                  key={link.path}
                  className="relative"
                  ref={link.dropdown === 'services' ? servicesDropdownRef : industriesDropdownRef}
                  onMouseEnter={() => handleDropdownEnter(link.dropdown as 'services' | 'industries')}
                  onMouseLeave={() => handleDropdownLeave(link.dropdown as 'services' | 'industries')}
                >
                  <button
                    onClick={link.dropdown === 'services' ? handleServicesClick : handleIndustriesClick}
                    className={`font-lato text-sm tracking-wide flex items-center ${
                      location.pathname === link.path
                        ? 'text-accent-600 font-semibold'
                        : isHomePage && !isScrolled
                        ? 'text-white hover:text-accent-300'
                        : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {link.dropdown === 'services' && showServicesDropdown && (
                    <div 
                      className="absolute left-1/2 mt-2 w-64 bg-primary-900 rounded-lg shadow-xl py-2 z-50"
                      style={{ transform: 'translateX(-50%)' }}
                    >
                      {services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center px-4 py-3 hover:bg-primary-800 transition-colors group"
                            onClick={handleLinkClick}
                          >
                            <Icon className="w-5 h-5 text-accent-400 group-hover:text-accent-300 mr-3" />
                            <span className="text-white/90 group-hover:text-white">{service.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {link.dropdown === 'industries' && showIndustriesDropdown && (
                    <div 
                      className="fixed left-[55%] mt-2 w-[90vw] max-w-[800px] bg-primary-900 rounded-lg shadow-xl py-6 z-50"
                      style={{ transform: 'translateX(-50%)' }}
                    >
                      <div className="grid md:grid-cols-3 gap-6 px-6">
                        {industries.map((category, idx) => (
                          <div key={idx} className="space-y-4">
                            <h3 className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
                              {category.category}
                            </h3>
                            <div className="space-y-1">
                              {category.items.map((industry) => {
                                const Icon = industry.icon;
                                return (
                                  <Link
                                    key={industry.path}
                                    to={industry.path}
                                    className="flex items-center px-3 py-2 rounded-md hover:bg-primary-800 transition-colors group"
                                    onClick={handleLinkClick}
                                  >
                                    <Icon className="w-5 h-5 text-accent-400 group-hover:text-accent-300 mr-3" />
                                    <span className="text-white/90 group-hover:text-white whitespace-normal text-sm">
                                      {industry.name}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`font-lato text-sm tracking-wide ${
                    location.pathname === link.path
                      ? 'text-accent-600 font-semibold'
                      : isHomePage && !isScrolled
                      ? 'text-white hover:text-accent-300'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${
              isHomePage && !isScrolled ? 'text-white' : 'text-gray-700'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => 
                link.dropdown ? (
                  <div key={link.path} className="space-y-1">
                    <button
                      onClick={link.dropdown === 'services' ? toggleMobileServices : toggleMobileIndustries}
                      className="w-full flex items-center justify-between px-3 py-3 text-left font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronRight 
                        className={`h-5 w-5 transition-transform ${
                          (link.dropdown === 'services' && mobileServicesOpen) || 
                          (link.dropdown === 'industries' && mobileIndustriesOpen) 
                            ? 'rotate-90' 
                            : ''
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {link.dropdown === 'services' && mobileServicesOpen && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-md py-2">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-center px-3 py-2 text-gray-600 hover:text-black hover:bg-white rounded-md transition-colors"
                              onClick={handleLinkClick}
                            >
                              <Icon className="w-5 h-5 text-accent-500 mr-3" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Mobile Industries Dropdown */}
                    {link.dropdown === 'industries' && mobileIndustriesOpen && (
                      <div className="pl-4 space-y-3 bg-gray-50 rounded-md py-3">
                        {industries.map((category) => (
                          <div key={category.category} className="space-y-2">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
                              {category.category}
                            </h4>
                            <div className="space-y-1">
                              {category.items.map((industry) => {
                                const Icon = industry.icon;
                                return (
                                  <Link
                                    key={industry.path}
                                    to={industry.path}
                                    className="flex items-center px-3 py-2 text-gray-600 hover:text-black hover:bg-white rounded-md transition-colors"
                                    onClick={handleLinkClick}
                                  >
                                    <Icon className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                                    <span className="text-sm">{industry.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-accent-600 bg-accent-50 font-semibold'
                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;