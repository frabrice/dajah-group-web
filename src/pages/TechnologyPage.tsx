import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe2, Server, BarChart3, Shield, Zap, Database, ArrowRight, MapPin } from 'lucide-react';

function TechnologyPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3 mb-8">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-yellow-500 font-medium">Technology & Reach</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Technology. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Global Reach.</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              We ensure every stream, performance, and sync is accounted for—everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proprietary systems and integrations with global PROs and DSPs streamline royalty management like never before
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Proprietary Systems",
                description: "Custom-built technology stack designed specifically for music rights management and distribution"
              },
              {
                icon: Database,
                title: "Global Integrations",
                description: "Direct API connections with major PROs, DSPs, and collection societies worldwide"
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Live tracking and reporting dashboards giving you instant visibility into your earnings"
              },
              {
                icon: Shield,
                title: "Secure Infrastructure",
                description: "Bank-level security protecting your data and ensuring accurate royalty calculations"
              },
              {
                icon: Zap,
                title: "Automated Workflows",
                description: "Intelligent automation handles registration, monitoring, and collection 24/7"
              },
              {
                icon: Globe2,
                title: "Multi-Territory Support",
                description: "Simultaneous monitoring across 120+ countries with local expertise in each market"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="bg-yellow-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              120+ Collection Territories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Your music is everywhere. So are we. Our global network ensures you're paid for every use, in every country.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-black to-gray-900 border-2 border-yellow-500/30 rounded-3xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Global PRO Partnerships</h3>
                <div className="space-y-4 mb-8">
                  {[
                    "BMI (United States)",
                    "PRS for Music (United Kingdom)",
                    "ASCAP (United States)",
                    "SACEM (France)",
                    "GEMA (Germany)",
                    "JASRAC (Japan)",
                    "And 120+ more worldwide"
                  ].map((pro, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-300">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-7xl font-bold text-yellow-500 mb-4">120+</div>
                  <div className="text-2xl text-white">Countries</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
                    <div className="text-sm text-gray-400">Collection Societies</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the Modern Creator
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mb-6"></div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our technology platform is designed from the ground up to meet the needs of today's independent artists and songwriters.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                From automatic metadata matching to intelligent royalty splitting, every feature is crafted to save you time and maximize your earnings.
              </p>
              <Link
                to="/solutions"
                onClick={scrollToTop}
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  title: "Instant Registration",
                  description: "Register your works globally in minutes, not weeks"
                },
                {
                  title: "Transparent Reporting",
                  description: "See exactly where your money comes from, down to the penny"
                },
                {
                  title: "Smart Matching",
                  description: "AI-powered systems match your music with usage automatically"
                },
                {
                  title: "Fast Payments",
                  description: "Get paid quickly with streamlined collection processes"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </motion.div>
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
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Experience the Power of Our Platform
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join creators worldwide who trust our technology to manage their music rights efficiently and transparently.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center px-8 py-4 bg-black text-yellow-500 font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300"
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

export default TechnologyPage;
