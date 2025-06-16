import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';

function ContactCard({ icon: Icon, title, children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl p-6 md:p-8 shadow-lg ${className}`}>
      <div className="bg-military-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-military-600" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-military-900 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function ContactPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-military-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Office interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ready to transform your financial operations? Our team is here to help you achieve your business goals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ContactCard icon={Phone} title="Call Us">
            <p className="text-military-700 mb-2 text-sm md:text-base">Main Office:</p>
            <a href="tel:+250795450640" className="text-military-600 hover:text-military-800 transition-colors text-base md:text-lg font-semibold block mb-3 md:mb-4">
              +250 795 450 640
            </a>
            <p className="text-military-700 mb-2 text-sm md:text-base">Support:</p>
            <a href="tel:+250789227912" className="text-military-600 hover:text-military-800 transition-colors text-base md:text-lg font-semibold">
              +250 789 227 912
            </a>
          </ContactCard>

          <ContactCard icon={Mail} title="Email Us">
            <p className="text-military-700 mb-2 text-sm md:text-base">General Inquiries:</p>
            <a href="mailto:info@dajahconsult.com" className="text-military-600 hover:text-military-800 transition-colors text-base md:text-lg font-semibold break-all block mb-3 md:mb-4">
              info@dajahconsult.com
            </a>
            <p className="text-military-700 mb-2 text-sm md:text-base">Support:</p>
            <a href="mailto:support@dajahconsult.com" className="text-military-600 hover:text-military-800 transition-colors text-base md:text-lg font-semibold break-all">
              support@dajahconsult.com
            </a>
          </ContactCard>

          <ContactCard icon={Clock} title="Business Hours" className="md:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <p className="text-military-700 text-sm md:text-base">
                <span className="font-semibold">Monday - Friday:</span>
                <br />9:00 AM - 6:00 PM
              </p>
              <p className="text-military-700 text-sm md:text-base">
                <span className="font-semibold">Saturday:</span>
                <br />10:00 AM - 2:00 PM
              </p>
              <p className="text-military-700 text-sm md:text-base">
                <span className="font-semibold">Sunday:</span>
                <br />Closed
              </p>
            </div>
          </ContactCard>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-military-900 text-center mb-12 md:mb-16">Our Office</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-military-50 rounded-xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-4 md:mb-6">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-military-600 mr-3" />
                <h3 className="text-lg md:text-xl font-semibold text-military-900">Kigali Office</h3>
              </div>
              <p className="text-military-700 whitespace-pre-line mb-3 md:mb-4 text-sm md:text-base">
                KN 1 Rd 70
                <br />Kigali, Rwanda
              </p>
              <a href="tel:+250795450640" className="text-military-600 hover:text-military-800 transition-colors font-semibold text-sm md:text-base">
                +250 795 450 640
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Consultation Section */}
      <div className="bg-military-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="bg-military-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto md:mx-0">
                  <Calendar className="h-6 w-6 md:h-8 md:w-8 text-military-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-military-900 mb-3 md:mb-4">Schedule a Consultation</h2>
                <p className="text-base md:text-lg text-military-700 mb-4 md:mb-6">
                  Book a session with our financial experts to discuss your business needs and discover how we can help you achieve your goals.
                </p>
                <ul className="space-y-2 md:space-y-3 text-military-700 mb-6 md:mb-8 text-left">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-military-600 mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">Personalized financial strategy discussion</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-military-600 mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">Industry-specific solutions and insights</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-military-600 mr-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">Comprehensive service overview</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link
                  to="/schedule"
                  onClick={scrollToTop}
                  className="block w-full md:w-auto bg-military-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-military-700 transition-colors text-center text-base md:text-lg font-semibold"
                >
                  Book Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;