import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Store, Home, Palmtree as PalmTree, Laptop, Sprout, Truck, Heart, GraduationCap, Users, Church, ArrowRight, CheckCircle2, Globe, Briefcase } from 'lucide-react';

interface Industry {
  icon: React.ElementType;
  name: string;
  description: string;
  features?: string[];
}

interface SectorProps {
  title: string;
  description: string;
  industries: Industry[];
  imageSrc: string;
  reversed?: boolean;
}

function IndustryCard({ icon: Icon, name, description, features }: Industry) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-military-600 group">
      <div className="flex items-center mb-6">
        <div className="bg-military-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-military-100 transition-colors">
          <Icon className="h-8 w-8 text-military-600 group-hover:text-military-700" />
        </div>
        <div className="ml-5 flex-1">
          <h3 className="text-xl font-bold text-military-900 font-cinzel">{name}</h3>
          <div className="h-1 w-12 bg-military-300 mt-2 group-hover:bg-military-600 transition-colors"></div>
        </div>
      </div>
      <p className="text-military-700 mb-6 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-3 bg-military-50/50 p-4 rounded-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-military-600 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-military-700">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SectorSection({ title, description, industries, imageSrc, reversed = false }: SectorProps) {
  return (
    <div className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-military-50/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`grid lg:grid-cols-5 gap-12 items-start ${reversed ? 'lg:grid-flow-dense' : ''}`}>
          <div className={`lg:col-span-2 ${reversed ? 'lg:col-start-4' : ''}`}>
            <div className="sticky top-24">
              <h2 className="text-4xl font-bold text-military-900 mb-4 font-cinzel leading-tight">{title}</h2>
              <div className="h-1 w-24 bg-military-600 mb-8"></div>
              <p className="text-military-700 text-lg mb-8 leading-relaxed">{description}</p>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-military-900/30 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
          <div className={`lg:col-span-3 ${reversed ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
            <div className="grid gap-8">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IndustriesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const privateSector: Industry[] = [
    {
      icon: Building2,
      name: "Small and Medium Enterprises",
      description: "Comprehensive financial solutions designed specifically for growing businesses in East Africa.",
      features: [
        "Customized accounting systems",
        "Growth-focused financial planning",
        "Tax optimization strategies",
        "Business performance analysis"
      ]
    },
    {
      icon: Factory,
      name: "Manufacturing and Production",
      description: "Specialized services for manufacturing operations with focus on cost optimization and efficiency.",
      features: [
        "Cost accounting and analysis",
        "Inventory management",
        "Production cost optimization",
        "Supply chain financial planning"
      ]
    },
    {
      icon: Store,
      name: "Retail and Wholesale Trade",
      description: "Expert support for trading businesses with emphasis on cash flow and inventory management.",
      features: [
        "Working capital optimization",
        "Inventory financing solutions",
        "Trade credit management",
        "Point of sale integration"
      ]
    },
    {
      icon: Home,
      name: "Real Estate and Construction",
      description: "Comprehensive services for property development and construction projects.",
      features: [
        "Project cost management",
        "Contract accounting",
        "Property portfolio analysis",
        "Development financing support"
      ]
    }
  ];

  const innovationSector: Industry[] = [
    {
      icon: PalmTree,
      name: "Hospitality and Tourism",
      description: "Specialized financial management solutions for the hospitality industry.",
      features: [
        "Revenue management systems",
        "Operational cost analysis",
        "Seasonal planning",
        "Industry benchmarking"
      ]
    },
    {
      icon: Laptop,
      name: "Technology & ERP Services",
      description: "Forward-thinking financial solutions for tech companies and startups.",
      features: [
        "Startup financial planning",
        "R&D tax incentives",
        "Investment readiness",
        "Scaling strategies"
      ]
    },
    {
      icon: Sprout,
      name: "Agribusiness and Sustainability",
      description: "Expert financial guidance for agricultural ventures and sustainable businesses.",
      features: [
        "Agricultural project financing",
        "Sustainability reporting",
        "Grant management",
        "Environmental compliance"
      ]
    },
    {
      icon: Truck,
      name: "Logistics and Transportation",
      description: "Comprehensive financial services for transport and logistics operations.",
      features: [
        "Fleet financial management",
        "Route profitability analysis",
        "Fuel cost optimization",
        "Asset financing support"
      ]
    }
  ];

  const socialSector: Industry[] = [
    {
      icon: Heart,
      name: "NGOs and Nonprofits",
      description: "Specialized accounting and financial management for nonprofit organizations.",
      features: [
        "Grant accounting",
        "Donor reporting",
        "Compliance management",
        "Impact measurement"
      ]
    },
    {
      icon: Users,
      name: "International Development",
      description: "Expert financial management for global development initiatives.",
      features: [
        "Multi-currency accounting",
        "Project fund tracking",
        "International compliance",
        "Partner financial management"
      ]
    },
    {
      icon: GraduationCap,
      name: "Educational Institutions",
      description: "Comprehensive financial services tailored for academic entities.",
      features: [
        "Budget planning",
        "Financial aid management",
        "Endowment accounting",
        "Regulatory compliance"
      ]
    },
    {
      icon: Church,
      name: "Religious Organizations",
      description: "Dedicated support for religious institutions with focus on transparency.",
      features: [
        "Donation management",
        "Program cost tracking",
        "Asset stewardship",
        "Community fund reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-16">
      {/* Hero Section */}
      <div className="relative bg-military-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000"
            alt="Business district"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-military-800/50 rounded-full px-6 py-2 mb-8">
              <Globe className="h-5 w-5 text-military-300" />
              <span className="text-military-300 font-medium">Global Expertise, Local Understanding</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-cinzel leading-tight">Industries We Serve</h1>
            <p className="text-xl text-military-100 leading-relaxed max-w-2xl mx-auto">
              Delivering specialized financial expertise across diverse sectors, tailored to meet the unique challenges and opportunities of each industry.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-military-50 to-transparent"></div>
      </div>

      {/* Industry Sections */}
      <SectorSection
        title="Business & Commerce"
        description="We serve a diverse range of private sector businesses, providing specialized financial solutions that drive growth and ensure compliance. Our expertise spans across various commercial sectors, helping businesses optimize their operations and achieve their financial goals."
        industries={privateSector}
        imageSrc="https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Business%20and%20Commerce%20(1).jpg"
      />

      <SectorSection
        title="Innovation & Sustainability"
        description="Supporting forward-thinking businesses in hospitality, technology, and sustainable development. We provide innovative financial solutions that help these sectors thrive while maintaining their competitive edge in rapidly evolving markets."
        industries={innovationSector}
        imageSrc="https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Hospitality%20and%20Tourism%20(1).jpg"
        reversed
      />

      <SectorSection
        title="Social Impact & Development"
        description="Empowering organizations that make a difference in society with expert financial management and compliance services. We understand the unique challenges of the social sector and provide solutions that maximize impact while ensuring accountability."
        industries={socialSector}
        imageSrc="https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Social%20Impact%20and%20development%20(1).jpg"
      />

      {/* CTA Section */}
      <div className="bg-military-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-military-600 to-military-900"></div>
          <div className="grid grid-cols-12 grid-rows-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-white/5 rounded-lg"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-military-800 rounded-full px-6 py-2 mb-8">
              <Briefcase className="h-5 w-5 text-military-300" />
              <span className="text-military-300 font-medium">Let's Work Together</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-cinzel">Ready to Excel in Your Industry?</h2>
            <p className="text-military-100 text-lg mb-12 max-w-2xl mx-auto">
              Let's discuss how our industry-specific expertise can help your organization thrive in today's competitive landscape.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-military-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Industry-Specific Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesPage;