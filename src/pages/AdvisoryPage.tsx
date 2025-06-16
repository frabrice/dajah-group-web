import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Briefcase, LineChart, FileText, Scale, AlertCircle, Coins, Globe2, Search, BarChart as ChartBar, ClipboardCheck, Building2, Users, FileBarChart, Landmark, Receipt, ShieldCheck, FileCheck2, Calculator } from 'lucide-react';

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

function AdvisoryPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { icon: ClipboardCheck, title: "Agreed Upon Procedures" },
    { icon: Scale, title: "Bankruptcy" },
    { icon: Briefcase, title: "CFO Advisory Services" },
    { icon: Calculator, title: "Capital Allowance" },
    { icon: AlertCircle, title: "Crisis Management" },
    { icon: Building2, title: "Cost Segregation" },
    { icon: Globe2, title: "Environmental, Social, and Governance (ESG) Services" },
    { icon: Search, title: "Forensic and Dispute Advisory Services" },
    { icon: ChartBar, title: "Financial Forecasts & Projections" },
    { icon: ShieldCheck, title: "Internal Control Risk Assessments" },
    { icon: FileText, title: "Financial Due Diligence" },
    { icon: Landmark, title: "Mergers & Acquisitions" },
    { icon: Building2, title: "Public Companies" },
    { icon: Users, title: "Outsource Internal Audit" },
    { icon: FileBarChart, title: "Research Tax Incentives" },
    { icon: Building2, title: "Real & Personal Property" },
    { icon: Receipt, title: "Royalty Audit & Contract Compliance" },
    { icon: ShieldCheck, title: "Risk Advisory Services" },
    { icon: FileCheck2, title: "Reviews and Attestations" },
    { icon: LineChart, title: "Valuation & Examination Services" }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Advisory Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert guidance for enhanced business performance and strategic growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-primary-600 leading-relaxed mb-8">
            At Dajah Group we understand that you need more than just number crunching and reports. Our advisory services experts offer a variety of services that will help enhance your future.
          </p>
          
          <p className="text-lg text-primary-600 leading-relaxed">
            Whether you are looking for an external review, business management, input on a new business strategy, expert testimony in hearings or trials, or cost segregation studies, Dajah Group is here for you. Our reliable insight makes it possible for us to provide advanced advisory services the way only genuine experts can.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-primary-900 mb-8">Our Advisory Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our advisory services can help you achieve your business goals
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

export default AdvisoryPage;