import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Music, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ContactCard({ icon: Icon, title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 ${className}`}
    >
      <div className="bg-yellow-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-yellow-500" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

function ContactPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-full px-6 py-3 mb-8">
              <Music className="h-5 w-5 text-yellow-500" />
              <span className="text-yellow-500 font-medium">Get In Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Music</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to take control of your music rights? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ContactCard icon={Phone} title="Call Us">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-2 text-sm">Main Office:</p>
                  <a href="tel:+250795450640" className="text-yellow-500 hover:text-yellow-400 transition-colors text-lg font-semibold block">
                    +250 795 450 640
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard icon={Mail} title="Email Us">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-2 text-sm">General Inquiries:</p>
                  <a href="mailto:info@dajahgroup.com" className="text-yellow-500 hover:text-yellow-400 transition-colors text-lg font-semibold break-all block">
                    info@dajahgroup.com
                  </a>
                </div>
              </div>
            </ContactCard>

            <ContactCard icon={Clock} title="Business Hours" className="md:col-span-2 lg:col-span-1">
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Monday - Friday:</span>
                  <br />9:00 AM - 6:00 PM (EAT)
                </p>
                <p>
                  <span className="font-semibold text-white">Saturday:</span>
                  <br />10:00 AM - 2:00 PM (EAT)
                </p>
                <p>
                  <span className="font-semibold text-white">Sunday:</span>
                  <br />Closed
                </p>
              </div>
            </ContactCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-12 hover:border-yellow-500/50 transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-8 w-8 text-yellow-500" />
                  <h3 className="text-2xl font-bold text-white">Our Office</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-white font-semibold mb-2">Kigali Office</p>
                    <p className="leading-relaxed">
                      1 KN 78 St<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                  <div>
                    <a href="tel:+250795450640" className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold">
                      +250 795 450 640
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 border border-gray-800 rounded-xl p-8">
                <h4 className="text-lg font-bold text-white mb-4">Global Presence</h4>
                <p className="text-gray-400 mb-6">
                  While headquartered in Kigali, Rwanda, our services extend to creators in over 120 countries worldwide through our network of global partners and collection societies.
                </p>
                <div className="text-center bg-yellow-500/10 rounded-lg p-6">
                  <div className="text-5xl font-bold text-yellow-500 mb-2">120+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
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
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-12 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-black/80 mb-8 leading-relaxed">
                  Book a consultation with our team to discuss how we can help you maximize your music's earning potential worldwide.
                </p>
                <ul className="space-y-4 text-black/90">
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    <span>Personalized music rights strategy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    <span>Global collection opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    <span>Distribution platform overview</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ArrowRight className="h-5 w-5 flex-shrink-0" />
                    <span>No obligation consultation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="mb-8">
                  <div className="text-6xl font-bold text-black mb-4">Let's Talk</div>
                  <p className="text-lg text-black/80">
                    Connect with our team today
                  </p>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:+250795450640"
                    className="block w-full px-8 py-4 bg-black text-yellow-500 font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@dajahgroup.com"
                    className="block w-full px-8 py-4 bg-black/20 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/30 transition-all duration-300"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
