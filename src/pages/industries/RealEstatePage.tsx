import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Calculator, FileCheck, Building2, Globe, LineChart } from 'lucide-react';

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

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-military-900 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <ArrowRight className="h-5 w-5 text-military-600 mr-3 mt-1 flex-shrink-0" />
            <span className="text-military-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstatePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: FileCheck,
      title: "Audit & Accounting",
      description: "Comprehensive audit services including financial statements, property transaction analysis, and compliance reporting."
    },
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Strategic tax planning and compliance services for real estate entities and transactions."
    },
    {
      icon: Globe,
      title: "International Services",
      description: "Expert guidance on cross-border real estate operations and investments."
    }
  ];

  const specializedServices = [
    {
      icon: Building2,
      title: "Property Analysis",
      description: "Detailed analysis and due diligence for property transactions and development projects."
    },
    {
      icon: LineChart,
      title: "Financial Modeling",
      description: "Comprehensive cash flow modeling and financial forecasting for real estate ventures."
    },
    {
      icon: Home,
      title: "Development Advisory",
      description: "Strategic guidance for real estate development projects and property management."
    }
  ];

  const auditServices = [
    "Audited financial statements",
    "Transaction due diligence",
    "Refinancing consultation",
    "Business valuation",
    "Cash flow modeling",
    "Internal audit services",
    "Risk consulting",
    "Special project auditing"
  ];

  const taxServices = [
    "Disposition tax planning",
    "International tax structuring",
    "Cost segregation studies",
    "Partnership tax consulting",
    "Mergers and acquisitions",
    "Property tax planning",
    "Tax return preparation",
    "REIT compliance"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Real estate development"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 font-playfair">Real Estate Expertise</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Whether you're a developer, management company, contractor or owner, you are in an industry that is constantly changing. Your success lies in the ability to forecast new trends in order to plan for and respond to changing dynamics.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            With our broad expertise, including decades of real estate audit and tax experience, the Dajah Group team provides the financial and tax guidance that owners and investors require in today's challenging environment.
          </p>
        </div>

        {/* Core Services */}
        <h2 className="text-3xl font-bold text-military-900 mb-8">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Specialized Services */}
        <h2 className="text-3xl font-bold text-military-900 mb-8">Specialized Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializedServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <FeatureList title="Audit & Accounting Services" items={auditServices} />
          <FeatureList title="Tax Services" items={taxServices} />
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
              <Home className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Build Your Property Empire?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Location, location, location—and expert financial guidance. Let our real estate specialists help you navigate market complexities and maximize your property investments for lasting wealth creation.
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
              <span className="text-military-200 text-sm">Your foundation for financial growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstatePage;