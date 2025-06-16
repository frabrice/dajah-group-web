import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Shield, Calculator, FileCheck, Building2, Users, Heart } from 'lucide-react';

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

function HighNetWorthPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: Shield,
      title: "Family Office Services",
      description: "Comprehensive financial management and advisory services tailored for high-net-worth individuals and families."
    },
    {
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax planning and compliance services for personal and business interests."
    },
    {
      icon: FileCheck,
      title: "Estate Planning",
      description: "Expert guidance on gift tax and estate planning to preserve and transfer wealth effectively."
    },
    {
      icon: Building2,
      title: "Business Advisory",
      description: "Strategic business planning and succession services for privately held companies."
    },
    {
      icon: Users,
      title: "Multi-Family Office",
      description: "Coordinated wealth management services for multiple family groups and their enterprises."
    },
    {
      icon: Heart,
      title: "Philanthropic Planning",
      description: "Strategic guidance for charitable giving and foundation management."
    }
  ];

  const additionalServices = [
    "Personal financial and tax planning",
    "Individual and closely held entities",
    "International private wealth",
    "Tax-exempt organizations",
    "Tax return preparation",
    "Succession planning for businesses",
    "Coordination of insurance needs",
    "Bill payments and vendor liaison",
    "Investment oversight",
    "Risk management"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">High Net Worth Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              No two clients and situations are alike; we understand tax planning services are based upon a close and trusted relationship between client and advisor. We will get to know you, your goals, and your unique situation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            For a successful business to run properly there needs to be a Chief Financial Officer in place to handle the company's finances. Dajah Group believes that high-net-worth individuals require the same financial services as a thriving business. Our firm provides services that present you with peace of mind, knowing that your finances are being taken care of.
          </p>
          <p className="text-lg text-military-700 leading-relaxed mt-6">
            We will work together with your lawyers, banks, and insurance companies to make sure that everyone involved in your team of advisors is working with the correct financial information. Through our years of expertise, we have built relationships with a large number of professionals and can offer our trusted advice on legal services as well as financial institutions.
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
      <div className="bg-gradient-to-br from-military-900 via-military-800 to-military-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-military-600/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-8">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Secure Your Legacy?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your wealth is more than numbers—it's your life's work, your family's future, and your lasting impact. Let our elite wealth management team craft a financial strategy worthy of your success and vision.
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
              <span className="text-military-200 text-sm">Exclusive financial excellence awaits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighNetWorthPage;