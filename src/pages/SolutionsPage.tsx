import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileMusic, Radio, Globe2, TrendingUp, Headphones, Award, CheckCircle, ArrowRight, Music, DollarSign } from 'lucide-react';

function SolutionsPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const adminFeatures = [
    "Global royalty collection across 120+ countries",
    "PRO registration & rights management",
    "Cue sheet management & micro-sync tracking",
    "Transparent analytics and statements"
  ];

  const syncFeatures = [
    "Direct sync pitching to major brands",
    "Film, TV, games, and advertising placements",
    "Brand partnership opportunities",
    "Dedicated licensing team"
  ];

  const distroFeatures = [
    "Full control over your masters",
    "Instant delivery to all major DSPs",
    "Performance dashboards and analytics",
    "Automatic royalty tracking",
    "Spotify, Apple Music, TikTok, Boomplay & more"
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-teal-500" />
              <span className="text-teal-500 font-medium">Our Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">360-Degree Solution</span> for Creators
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Everything you need to manage, monetize, and distribute your music globally
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 md:p-16 hover:border-teal-500/50 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-teal-500/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Shield className="h-10 w-10 text-teal-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Music Administration & Publishing
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We manage the complex global tasks of registering, monitoring, and collecting royalties for your compositions.
                </p>
                <p className="text-base text-gray-400 mb-8">
                  Our comprehensive administration services ensure that every performance, stream, and use of your music is tracked and monetized across all territories worldwide.
                </p>
              </div>

              <div className="space-y-4">
                {adminFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-black/50 border border-gray-800 rounded-lg p-4"
                  >
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-3xl p-12 md:p-16 hover:border-teal-500/50 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-4">
                {syncFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4"
                  >
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-teal-500/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <FileMusic className="h-10 w-10 text-teal-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Sync & Licensing
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  We pitch your music for film, TV, games, and ads—helping you earn beyond streaming.
                </p>
                <p className="text-base text-gray-400">
                  Our experienced licensing team actively places your music in major productions and advertising campaigns, creating valuable revenue streams beyond traditional royalties.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black border-2 border-teal-500/30 rounded-3xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-teal-500/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                  <Radio className="h-10 w-10 text-teal-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  DajahTunes: The Distribution Advantage
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our proprietary platform for music distribution gives artists full control of their recorded music.
                </p>
                <a
                  href="https://www.dajahtunes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Visit DajahTunes.com
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="space-y-4">
                {distroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-black/50 border border-teal-500/30 rounded-lg p-4"
                  >
                    <CheckCircle className="h-6 w-6 text-teal-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive services designed to maximize your music's earning potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: "Global Reach",
                description: "Collection across 120+ territories with partnerships with major PROs and DSPs worldwide"
              },
              {
                icon: TrendingUp,
                title: "Maximize Earnings",
                description: "Multiple revenue streams from performance, mechanical, sync, and distribution royalties"
              },
              {
                icon: DollarSign,
                title: "100% Ownership",
                description: "You retain full ownership of your music. We're here to help you earn, not own your work"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="bg-teal-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Ready to Maximize Your Music's Potential?
            </h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of creators who trust Dajah Group to manage their music rights and distribution worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-black text-teal-500 font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/technology"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-black/10 backdrop-blur-sm text-black font-semibold rounded-lg border border-black/20 hover:bg-black/20 transition-all duration-300"
              >
                Explore Our Technology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
