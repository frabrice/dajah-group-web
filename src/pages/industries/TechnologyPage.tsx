import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Calculator, FileCheck, Globe, Lightbulb, FileSpreadsheet } from 'lucide-react';

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

function TechnologyPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: FileCheck,
      title: "Audit and Accounting",
      description: "Comprehensive audit services including financial statements, contract evaluations, and management reports focused on operational efficiency."
    },
    {
      icon: Calculator,
      title: "Tax Compliance",
      description: "Strategic tax planning and compliance services, including R&D tax credits and international tax considerations for tech companies."
    },
    {
      icon: Globe,
      title: "International Services",
      description: "Expert guidance on cross-border operations, including mergers, acquisitions, and global corporate structuring."
    }
  ];

  const specializedServices = [
    {
      icon: Lightbulb,
      title: "R&D Optimization",
      description: "Maximize benefits from research and development expenditures through strategic planning and tax incentives."
    },
    {
      icon: FileSpreadsheet,
      title: "Financial Planning",
      description: "Comprehensive financial planning including cash flow projections and operating budgets tailored for tech companies."
    },
    {
      icon: Laptop,
      title: "Tech Advisory",
      description: "Strategic insight and knowledge to help you gain an advantage over your competitors in the technology sector."
    }
  ];

  const auditServices = [
    "Audited financial statements for investors and creditors",
    "Compilation and review services",
    "Contract and claims evaluation",
    "Management reports and efficiency analysis",
    "Operating control improvements",
    "Best practices implementation",
    "Cash flow projections",
    "Operating budgets"
  ];

  const internationalServices = [
    "Cross-border merger and acquisitions",
    "Corporate organization and restructuring",
    "International tax planning and structuring",
    "International tax treaty analysis",
    "Direct and indirect foreign tax credit analysis",
    "International tax withholding analysis",
    "Foreign earnings and profit analysis",
    "Global corporate structuring",
    "International customs and duties planning"
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="Technology industry"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 font-playfair">Technology & ERP Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              As a technology company, you are always looking to push boundaries. At Dajah Group, we understand this and offer strategic insight and knowledge to help you gain an advantage over your competitors.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            Your Dajah Group team will look beyond the realm of traditional accounting to help you benefit from unique tax situations, including research-and-development tax incentives, and advise you on how to maximize benefits from research-and-development expenditures.
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
          <FeatureList title="International Services" items={internationalServices} />
        </div>
      </div>

      {/* CTA Section */}
      {/* Industry Expert Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-military-900 mb-2">Your Technology & ERP Services Expert</h2>
            <p className="text-military-600">Leading expertise in technology and ERP implementation</p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-military-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/Fabrice Shoraspace.jpeg"
                    alt="Niyigena Fabric"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-military-900 mb-1">Niyigena Fabric</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Technology & ERP Services Specialist</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">ERP Implementation</span>
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">System Integration</span>
                    <span className="inline-block bg-military-100 text-military-700 text-xs px-2 py-1 rounded-full">Tech Consulting</span>
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
              <Laptop className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Disrupt Your Financial Future?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovation never sleeps, and neither does our commitment to your success. Let our tech-savvy financial experts accelerate your growth and optimize your path to market dominance.
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
              <span className="text-military-200 text-sm">Where technology meets financial innovation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPage;