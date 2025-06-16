import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function TaxPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Tax Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Strategic tax planning and compliance solutions for your success
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-primary-600 leading-relaxed mb-8">
            Any accounting firm can prepare your tax returns, but at Dajah group we believe in taking the time to know our clients and understand their specific needs. Our tax experts combine their comprehensive tax knowledge and planning experience to bring you the best tax strategy and structure to achieve your goals and make your world worth more.
          </p>
          
          <p className="text-lg text-primary-600 leading-relaxed">
            At Dajah group, we know that tax planning is year-round, and we will work closely with you to create a comprehensive plan so that you can take advantage of all the credits and deductions that you work hard to deserve. We emphasize local and international planning at both the personal and business level so that your tax obligations can be reduced, deferred, or eliminated.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Need Tax Planning Assistance?</h2>
              <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
                Let our tax experts help you optimize your tax position and ensure compliance
              </p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxPage;