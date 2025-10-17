import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Globe2, Shield, TrendingUp, Radio, FileMusic, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
              <Music className="h-5 w-5 text-purple-500" />
              <span className="text-purple-500 font-medium">The Future of Music Rights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to the Future<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                of Music Rights
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering creators through transparent music administration, publishing, and global distribution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            <div className="w-1 h-8 bg-purple-500 animate-pulse"></div>
            <div className="w-1 h-12 bg-purple-500 animate-pulse delay-100"></div>
            <div className="w-1 h-6 bg-purple-500 animate-pulse delay-200"></div>
            <div className="w-1 h-10 bg-purple-500 animate-pulse delay-300"></div>
            <div className="w-1 h-8 bg-purple-500 animate-pulse delay-400"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mb-6"></div>
              <p className="text-base text-gray-300 leading-relaxed">
                Dajah Group is a specialized financial and administrative firm focused on empowering creators within the music industry. We provide comprehensive music administration, publishing, and distribution services that help artists and songwriters maximize their earnings worldwide while maintaining full ownership of their work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mb-6"></div>
              <div className="space-y-4">
                {[
                  { icon: FileMusic, text: "Music Administration" },
                  { icon: Shield, text: "Publishing & Licensing" },
                  { icon: Radio, text: "Distribution via DajahTunes" },
                  { icon: Globe2, text: "Global Royalty Collection" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-purple-500" />
                    </div>
                    <span className="text-base text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                We turn creativity into sustainable business
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Trusted by creators worldwide to manage their music rights with transparency and precision
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span>BMI</span>
                <span className="text-purple-500">•</span>
                <span>PRS</span>
                <span className="text-purple-500">•</span>
                <span>ASCAP</span>
                <span className="text-purple-500">•</span>
                <span>SACEM</span>
                <span className="text-purple-500">•</span>
                <span>And 120+ Global Partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A 360-Degree Solution for Creators
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed in the music industry, from rights management to global distribution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Music Administration & Publishing",
                description: "We manage the complex global tasks of registering, monitoring, and collecting royalties for your compositions across 120+ countries."
              },
              {
                icon: FileMusic,
                title: "Sync & Licensing",
                description: "We pitch your music for film, TV, games, and ads—helping you earn beyond streaming with direct sync pitching and brand partnerships."
              },
              {
                icon: TrendingUp,
                title: "DajahTunes Distribution",
                description: "Our proprietary platform gives artists full control of their recorded music with instant delivery to all major DSPs worldwide."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="bg-purple-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <service.icon className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <Link
                  to="/solutions"
                  onClick={scrollToTop}
                  className="inline-flex items-center text-purple-500 hover:text-purple-400 transition-colors font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "120+", label: "Collection Territories" },
              { number: "2018", label: "Founded" },
              { number: "24/7", label: "Royalty Monitoring" },
              { number: "100%", label: "Creator Ownership" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-2 border-purple-500 pl-6 text-left"
              >
                <div className="text-5xl font-bold text-purple-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Ready to Take Control of Your Music Rights?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of creators who trust Dajah Group to manage their music administration and maximize their earnings worldwide.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-black text-purple-500 font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
