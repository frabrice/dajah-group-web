import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, ClipboardList, Building2, FileSpreadsheet, Briefcase } from 'lucide-react';

function ServiceCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent-500 group">
      <div className="flex items-center space-x-4">
        <div className="bg-primary-50 p-3 rounded-lg group-hover:bg-accent-50 transition-colors">
          <Icon className="w-6 h-6 text-accent-500" />
        </div>
        <h3 className="text-lg font-semibold text-primary-900 group-hover:text-accent-600 transition-colors">{title}</h3>
      </div>
    </div>
  );
}

function AuditPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { icon: FileCheck, title: "Audit, Review & Compilation" },
    { icon: ClipboardList, title: "Entrepreneurial Services" },
    { icon: FileSpreadsheet, title: "Specialized Attest Engagements" },
    { icon: Building2, title: "Employee Benefit Engagements" },
    { icon: Briefcase, title: "Public Companies" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Audit & Accounting</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Professional audit and accounting services for enhanced transparency and compliance
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-primary-600 leading-relaxed mb-8">
            With increasing demand on transparency you need a professional team who knows the regulations and knows your firm. Our professionals understand that your time is a precious commodity. We look well beyond the preparation of financial statements. You will benefit from our deep industry knowledge and will receive the reports, tools, and systems needed to give your lenders, investors, and boards the confidence they need to support you.
          </p>
          
          <p className="text-lg text-primary-600 leading-relaxed">
            Dajah group's accounting services are built on a bedrock of personal and professional insight. For clients—including individuals, sole proprietorships, corporations, partnerships, estates, and trusts—these services can be key to enhancing efficiency and profitability. To that end, the firm assesses client needs and provides customized solutions ranging from basic bookkeeping to comprehensive financial systems.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Audit & Accounting Experts Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-2">Your Audit & Accounting Experts</h2>
            <p className="text-primary-600">Leading expertise in audit and accounting services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Herve%20Muvunyi.jpg"
                    alt="Herve Clister Muvunyi"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-primary-900 mb-1">Herve Clister Muvunyi</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Senior Accountant</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Financial Analysis</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Strategic Planning</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Leadership</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/WhatsApp Image 2025-06-15 at 16.25.17_15d6df48.jpg"
                    alt="CPA Laurent Munyawera"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-primary-900 mb-1">CPA Laurent Munyawera</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Partner - Audit & Accounting</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Financial Audits</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Compliance</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Risk Assessment</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/Vedaste Nshimiyimana 123.jpeg"
                    alt="Vedaste Nshimiyimana"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-primary-900 mb-1">Vedaste Nshimiyimana</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Audit & Accounting Specialist</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Financial Statements</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Internal Controls</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Assurance</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src="/WhatsApp Image 2025-06-15 at 16.26.28_de10f61e.jpg"
                    alt="Henry Luc Mugabe"
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-primary-900 mb-1">Henry Luc Mugabe</h3>
                  <p className="text-sm text-accent-600 font-medium mb-2">Junior Accountant</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Data Analysis</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Report Preparation</span>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Ready to Enhance Your Financial Transparency?</h2>
              <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
                Let our expert team help you maintain compliance and build stakeholder confidence
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

export default AuditPage;