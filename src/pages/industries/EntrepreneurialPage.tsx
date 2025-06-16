import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Calculator, FileCheck, Building2, Users, Brain, LineChart } from 'lucide-react';

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

function EntrepreneurialPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Comprehensive financial planning and accounting services tailored for entrepreneurial businesses."
    },
    {
      icon: FileCheck,
      title: "Tax Services",
      description: "Strategic tax planning and compliance services for businesses and entrepreneurs."
    },
    {
      icon: Building2,
      title: "Business Advisory",
      description: "Expert guidance on business growth, strategy, and operational efficiency."
    }
  ];

  const specializedServices = [
    {
      icon: Users,
      title: "Entity Selection",
      description: "Strategic guidance on choosing and structuring business entities."
    },
    {
      icon: Brain,
      title: "Strategic Planning",
      description: "Long-term planning and development strategies for business growth."
    },
    {
      icon: LineChart,
      title: "Performance Analysis",
      description: "Detailed analysis and optimization of business performance."
    }
  ];

  const services = [
    "Accounting and bookkeeping services",
    "Business valuations",
    "Buy-Sell agreements",
    "Computer software selection",
    "Entity selection",
    "Estate and gift tax planning",
    "Federal, state and local tax preparation",
    "Financial statement preparation",
    "Payroll preparation and assistance",
    "Representation before taxing authorities",
    "Retirement planning",
    "Succession planning"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
            alt="Entrepreneurial services"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 font-playfair">Entrepreneurial Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We understand that entrepreneurial businesses need practical advice that will help grow your business and succeed financially. We work closely with our entrepreneurial clients as trusted advisors to develop new strategies and opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            Your Dajah Group team stays current on the ever-changing complex accounting and tax regulations that will affect your business. Our team provides you with the technical knowledge you need and the tailored guidance, based on our knowledge of you, your business and your employees that will help your business reach your goals.
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
        <div className="mt-16">
          <FeatureList title="Additional Services" items={services} />
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
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Ignite Your Entrepreneurial Vision?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every great business starts with a bold idea and smart financial strategy. Let our entrepreneurial experts fuel your journey from startup dreams to market-leading success.
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
              <span className="text-military-200 text-sm">Where innovation meets financial excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurialPage;