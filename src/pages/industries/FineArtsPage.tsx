import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Calculator, Scale, FileCheck, Heart, Building2 } from 'lucide-react';

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

function FineArtsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Scale,
      title: "Assurance Services",
      description: "Comprehensive audit, review, and compilation services tailored for galleries and collectors."
    },
    {
      icon: Calculator,
      title: "Capital Gains Planning",
      description: "Strategic planning to optimize capital gains and tax implications for art transactions."
    },
    {
      icon: Heart,
      title: "Gifting & Estate Plans",
      description: "Expert guidance on art gifting strategies and estate planning for collections."
    },
    {
      icon: Building2,
      title: "Inventory Management",
      description: "Specialized inventory system consulting for galleries and dealers."
    },
    {
      icon: FileCheck,
      title: "Succession Planning",
      description: "Comprehensive succession planning for galleries and private collections."
    },
    {
      icon: Palette,
      title: "Startup Services",
      description: "Specialized support for new galleries and art businesses."
    }
  ];

  const additionalServices = [
    "Business valuations",
    "Payroll processing",
    "Tax planning and compliance",
    "Collection management",
    "Insurance consulting",
    "International art transactions",
    "Authentication documentation",
    "Provenance verification"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1594733803361-3c1c9b5e494b?auto=format&fit=crop&q=80&w=2000"
            alt="Fine Arts Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Fine Arts & Antiques Expertise</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We understand your passion for the arts and antiques. Our expert team works with galleries, collectors, and charitable giving foundations to ensure your arts and antiques are managed with the care they deserve.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            At Dajah Group, we have worked closely with galleries ranging in size from small to large, and with individual dealers and collectors for decades. Our team can help you reach your financial goals, so you can focus on the arts and antiques that you love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16">
          <FeatureList title="Additional Services" items={additionalServices} />
        </div>
      </div>

      {/* CTA Section */}
      {/* Industry Expert Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-military-900 mb-2">Your Fine Arts & Antiques Expert</h2>
            <p className="text-military-600">Leading expertise in fine arts and antiques financial management</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-military-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/Profile Picture - Jean Luc.JPG"
                    alt="Jean Luc Habimana"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-military-900 mb-1">Jean Luc Habimana</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Fine Arts & Antiques Specialist</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">Art Valuation</span>
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">Collection Management</span>
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">Estate Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-military-900 via-military-800 to-military-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-military-600/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-8">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Preserve Your Artistic Legacy?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your passion for art deserves expert financial stewardship. Let us help you protect, grow, and share your collection while maximizing its value for generations to come.
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
              <span className="text-military-200 text-sm">Where art meets financial excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FineArtsPage;