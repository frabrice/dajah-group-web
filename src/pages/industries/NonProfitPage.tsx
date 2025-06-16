import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, FileCheck, Calculator, Users, Globe, Building2, BarChart as ChartBar, FileSpreadsheet } from 'lucide-react';

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

function NonProfitPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: FileCheck,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance and transparency for non-profit organizations."
    },
    {
      icon: Calculator,
      title: "Tax Services",
      description: "Specialized tax planning and compliance services for tax-exempt organizations."
    },
    {
      icon: Users,
      title: "Board Advisory",
      description: "Strategic guidance and training for boards of directors and management teams."
    }
  ];

  const specializedServices = [
    {
      icon: Globe,
      title: "Grant Management",
      description: "Expert assistance with grant compliance, reporting, and administration."
    },
    {
      icon: ChartBar,
      title: "Performance Analysis",
      description: "Detailed analysis of program effectiveness and financial performance."
    },
    {
      icon: FileSpreadsheet,
      title: "Financial Planning",
      description: "Strategic financial planning and budgeting for sustainable operations."
    }
  ];

  const additionalServices = [
    "Form 990 preparation and filing",
    "Internal control assessment",
    "Donor reporting and compliance",
    "Cost allocation methodologies",
    "Governance structure review",
    "Risk management",
    "Strategic planning",
    "Merger and collaboration consulting",
    "Employee benefit plan audits",
    "Technology assessment",
    "Fundraising strategy",
    "Compliance monitoring"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=2000"
            alt="Non-profit organization"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 font-playfair">Non-Profit Organization Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We understand that to best serve you, we must understand you. At Dajah Group, we do more than just talk about being there for our not-for-profit clients, we believe that such a specialized industry requires the dedication of resources to fully understand and work successfully within the area.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            Dajah Group works with a wide variety of not-for-profit organizations that educate, inspire, and support causes around the world. Personal service is integral to our relationships with our clients. We work closely with your team to understand your complex management needs and unique reporting requirements.
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
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Amplify Your Mission?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your cause deserves unwavering financial support. Let us handle the complexities of compliance and reporting, so you can focus on changing the world, one mission at a time.
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
              <span className="text-military-200 text-sm">Together, we make a difference</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonProfitPage;