import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, FileSpreadsheet, Receipt, Briefcase, HeadphonesIcon, GraduationCap, PiggyBank, LineChart, Target, BarChart3, Brain, PieChart, Database } from 'lucide-react';

function ServiceCard({ title, description, icon: Icon, className = "" }) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="bg-military-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-military-600" />
      </div>
      <h3 className="text-xl font-semibold text-military-900 mb-3">{title}</h3>
      <p className="text-military-700 leading-relaxed">{description}</p>
    </div>
  );
}

function CFOServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="flex gap-4 p-6 rounded-lg hover:bg-military-50 transition-all duration-300">
      <div className="flex-shrink-0">
        <div className="bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
          <Icon className="h-6 w-6 text-military-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-military-800 mb-2">{title}</h4>
        <p className="text-military-600">{description}</p>
      </div>
    </div>
  );
}

function ServicesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainServices = [
    {
      icon: Calculator,
      title: "AD-HOC Advisory",
      description: "Expert guidance on accounting and taxation matters, available whenever you need it. Our team provides quick, accurate solutions to your financial queries."
    },
    {
      icon: FileSpreadsheet,
      title: "Bookkeeping",
      description: "Maintain accurate financial records and produce timely statements. We ensure your books are always up-to-date and compliant with accounting standards."
    },
    {
      icon: Receipt,
      title: "Tax Filing",
      description: "Comprehensive tax services including Payroll Taxes, Corporate Income Tax, Value Added Tax, and Withholding Tax calculations and declarations."
    },
    {
      icon: Briefcase,
      title: "Part-time CFO",
      description: "Professional CFO services tailored to East African business practices, providing strategic financial leadership when you need it."
    },
    {
      icon: HeadphonesIcon,
      title: "Online Assistant",
      description: "Efficient back-office support services that allow you to focus on your core business activities while we handle the financial operations."
    },
    {
      icon: GraduationCap,
      title: "Workshops and Trainings",
      description: "Professional training programs on accounting, taxation, financial management, and ERP systems to enhance your team's capabilities."
    }
  ];

  const cfoServices = [
    {
      icon: PiggyBank,
      title: "Funding Support",
      description: "Expert assistance in business plan creation and capital policy development for successful fund raising."
    },
    {
      icon: LineChart,
      title: "Cash Flow Management",
      description: "Comprehensive monitoring and management of cash flow status for optimal financial operations."
    },
    {
      icon: Target,
      title: "KPI Management",
      description: "Strategic KPI setting and performance analysis aligned with company objectives."
    },
    {
      icon: BarChart3,
      title: "Budget Management",
      description: "Detailed budget planning, allocation, and variance analysis for informed decision-making."
    },
    {
      icon: Brain,
      title: "Strategic Decision",
      description: "In-depth quantitative and qualitative analysis for optimal strategy selection."
    },
    {
      icon: PieChart,
      title: "Sectional Income Statement",
      description: "Detailed profit and loss analysis by department, product, and branch."
    },
    {
      icon: Calculator,
      title: "Cost Accounting",
      description: "Precise cost calculation and management for expenditure optimization."
    },
    {
      icon: Database,
      title: "ERP Implementation",
      description: "Expert guidance in implementing and optimizing ERP systems for efficient business operations."
    }
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-military-900 to-military-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Financial Services</h1>
            <p className="text-xl text-military-100 leading-relaxed">
              Comprehensive financial solutions tailored to your business needs. We combine expertise with innovation to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-military-900 mb-4">Our Services</h2>
          <p className="text-military-700 text-lg max-w-2xl mx-auto">
            We offer a comprehensive range of financial services designed to help your business thrive in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* CFO Services Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-military-900 mb-4">Part-time CFO Services</h2>
            <p className="text-military-700 text-lg max-w-2xl mx-auto">
              Strategic financial leadership and expertise to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cfoServices.map((service, index) => (
              <CFOServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-military-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="text-military-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business achieve its financial goals.
          </p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-military-600 transition-all duration-200"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;