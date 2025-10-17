import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Music, Calendar, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const milestones = [
    { year: "2018", event: "Dajah Group Founded", description: "Started as a financial services firm" },
    { year: "2020", event: "Music Publishing Division Launched", description: "Expanded into music rights management" },
    { year: "2025", event: "DajahTunes Platform Released", description: "Launched proprietary distribution platform" }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
              <Music className="h-5 w-5 text-purple-500" />
              <span className="text-purple-500 font-medium">About Dajah Group</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Redefining Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Administration</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              From financial services to music industry leadership, we've evolved to become a trusted 360° partner for independent creators worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mb-6"></div>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Founded in 2018, Dajah Group began as a financial services firm with a vision to empower businesses across East Africa. As we grew, we recognized a critical gap in the music industry: creators were losing substantial earnings due to complex, opaque rights management systems.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                This realization sparked our transformation into a specialized music administration and publishing company. Today, we combine our financial expertise with cutting-edge technology to help artists and songwriters navigate the complex world of music rights, ensuring they receive every dollar they've earned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-8">
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-20">
                        <div className="text-3xl font-bold text-purple-500">{milestone.year}</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-bold text-white mb-2">{milestone.event}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="bg-purple-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                To be the most trusted and efficient global partner for independent songwriters and artists, revolutionizing how music rights are managed in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="bg-purple-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                To provide transparent, state-of-the-art administration, publishing, and distribution services that empower creators to retain ownership and maximize their earnings worldwide.
              </p>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet the Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Led by industry experts passionate about empowering music creators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Muvunyi</h3>
                <p className="text-purple-500 font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-400 leading-relaxed">
                  Leading the vision and strategic direction of Dajah Group's global operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Prince</h3>
                <p className="text-purple-500 font-medium mb-4">Head of Publishing Administration</p>
                <p className="text-gray-400 leading-relaxed">
                  Managing global music administration and royalty collection operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Fabrice</h3>
                <p className="text-purple-500 font-medium mb-4">VP of Distribution (DajahTunes)</p>
                <p className="text-gray-400 leading-relaxed">
                  Overseeing the strategic growth and technical innovation of our distribution platform.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-transparent"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-2">Jean Luc</h3>
                <p className="text-purple-500 font-medium mb-4">Global Licensing Director</p>
                <p className="text-gray-400 leading-relaxed">
                  Managing sync licensing opportunities and building strategic partnerships worldwide.
                </p>
              </div>
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
            className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Why Creators Choose Dajah Group
                </h2>
                <div className="space-y-4">
                  {[
                    "Full creator ownership retained",
                    "Transparent reporting and analytics",
                    "Global collection in 120+ territories",
                    "Expert sync licensing team",
                    "24/7 royalty monitoring"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-black flex-shrink-0" />
                      <span className="text-base text-black/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="inline-block bg-black/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-6xl font-bold text-black mb-2">120+</div>
                  <div className="text-xl text-black/80 mb-6">Countries Worldwide</div>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="inline-flex items-center px-8 py-4 bg-black text-purple-500 font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300"
                  >
                    Join Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
