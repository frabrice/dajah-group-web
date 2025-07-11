import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music2, Copyright, Calculator, FileSpreadsheet, Trophy, DollarSign } from 'lucide-react';

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

function EntertainmentPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: DollarSign,
      title: "Business Management",
      description: "Comprehensive business management services tailored for entertainment and music industry professionals."
    },
    {
      icon: Copyright,
      title: "Copyright & IP Valuations",
      description: "We Turn music/IP rights into bankable financial assets (e.g., for catalog sales, loans, valuation). Enables artists to monetize or collateralize their catalogs."
    },
    {
      icon: Calculator,
      title: "Tax Planning & Compliance",
      description: "Specialized tax services covering federal, state, local, and international tax planning and compliance."
    },
    {
      icon: FileSpreadsheet,
      title: "Royalty Audit & Compliance",
      description: "Detailed royalty auditing and contract compliance services to ensure fair compensation."
    },
    {
      icon: Music2,
      title: "Tour Accounting",
      description: "Specialized accounting services for touring artists and entertainment productions."
    },
    {
      icon: Trophy,
      title: "Sports Management",
      description: "Financial management and advisory services tailored for sports professionals and organizations."
    }
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-24">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=2000"
            alt="Entertainment and Music"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Entertainment & Music Industry Expertise</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We understand the complexities and challenges of the entertainment & music industries, with over a century of specialized experience serving industry leaders and icons.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-lg text-military-700 leading-relaxed">
            Dajah Group has worked with some of the leading music publishers, merchandise rights agencies, major motion picture studios, fashion designers, video game developers, and many of the most successful companies and artists.
          </p>
          <p className="text-lg text-military-700 leading-relaxed mt-6">
            That tradition continues today, as Dajah Group provides counsel to professional leaders and icons around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Expertise Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-military-900 mb-6">Our expertise spans across various entertainment sectors:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center text-military-700">
                  <ArrowRight className="h-5 w-5 text-military-600 mr-3" />
                  Music Industry
                </li>
                <li className="flex items-center text-military-700">
                  <ArrowRight className="h-5 w-5 text-military-600 mr-3" />
                  Film & Television
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center text-military-700">
                  <ArrowRight className="h-5 w-5 text-military-600 mr-3" />
                  Sports & Athletics
                </li>
                <li className="flex items-center text-military-700">
                  <ArrowRight className="h-5 w-5 text-military-600 mr-3" />
                  Digital Entertainment
                </li>
              </ul>
            </div>
          </div>
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
              <Music2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready to Take Center Stage?</h2>
            <p className="text-xl text-military-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your talent deserves a standing ovation, and your finances deserve expert management. Let us handle the business side while you focus on creating magic that moves the world.
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
              <span className="text-military-200 text-sm">Where creativity meets financial mastery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntertainmentPage;