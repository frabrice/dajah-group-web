import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shirt, DollarSign, Building2, Calculator } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-military-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-military-600" />
      </div>
      <h3 className="text-xl font-bold text-military-900 mb-4">{title}</h3>
      <p className="text-military-700 leading-relaxed">{description}</p>
    </div>
  );
}

function FashionPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
            alt="Fashion industry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Fashion Industry Expertise</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Dajah Group has worked with an assortment of models, designers, and stylists. Our team of professionals has experience with manufacturers, importers, exporters, and distributors, all of which are essential to running your business in this field.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            Over the years that we have acted as their trusted advisors and have experienced numerous factors that determine the way that they do business. This experience allows us to take a practical approach and anticipate what is ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={DollarSign}
            title="Financing"
            description="We understand that this industry is unique and requires significant financial support for fabrics, materials, and production. We'll help you access the right lenders and work with factors to provide financing solutions."
          />
          <ServiceCard
            icon={Building2}
            title="Business Management"
            description="From vendor payments to inventory management, we ensure all your accounting and management needs are met. We assist with warehouse space, freight payments, distribution, and designer books."
          />
          <ServiceCard
            icon={Calculator}
            title="Tax Services"
            description="With significant earnings fluctuations common in fashion, our individual and corporate tax planning services ensure accuracy and optimization of your tax position."
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-military-900 via-military-800 to-military-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-military-600/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-8">
              <Shirt className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Elevate Your Fashion Empire?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your creative vision into financial success. Let our fashion industry specialists guide you through every season of growth, from startup dreams to global recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <span className="text-military-200 text-sm">Your runway to financial excellence begins today</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FashionPage;