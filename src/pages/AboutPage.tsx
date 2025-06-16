import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Target, Lightbulb, Shield, Heart, Handshake, Trophy, Globe2, ArrowRight, Users, Award, Briefcase, Scale, Calculator, Building2, Crown, GraduationCap, Zap, TrendingUp, CheckCircle, FileText } from 'lucide-react';

function StatCard({ number, label, suffix = "" }: { number: number; label: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-black/90 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-3">
        <CountUp end={number} duration={2.5} suffix={suffix} />
      </div>
      <div className="text-white font-medium text-sm md:text-base">{label}</div>
    </motion.div>
  );
}

function TeamMemberCard({ name, role, image, delay }: { 
  name: string; 
  role: string; 
  image: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-military-900 mb-2 font-playfair group-hover:text-accent-600 transition-colors">
              {name}
            </h3>
            <div className="h-1 w-12 bg-accent-500 mx-auto mb-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            <p className="text-military-600 font-medium text-sm uppercase tracking-wider">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ValueCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="bg-military-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-accent-50 transition-colors">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-military-600 group-hover:text-accent-500 transition-colors" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-military-900 mb-3 md:mb-4">{title}</h3>
      <p className="text-sm md:text-base text-military-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function AboutPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teamMembers = [
    {
      name: "HERVE CLISTER MUVUNYI",
      role: "Chief Executive Officer",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Herve%20Muvunyi.jpg"
    },
    {
      name: "BUNTU JULES",
      role: "Operations Manager",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Buntu%20Giles.jpg"
    },
    {
      name: "CPA LAURENT MUNYAWERA",
      role: "Senior Accountant",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Laurent%20Munyawera.jpg"
    },
    {
      name: "RODRIGUE MUGISHA",
      role: "Senior Accountant",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Rodrigue%20Mugisha.jpg"
    },
    {
      name: "NKURUNZIZA DIANE",
      role: "Senior Accountant",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Nkurunziza%20Diane.jpg"
    },
    {
      name: "MIHIGO CHARMANT",
      role: "Legal & IP Compliance",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Mihigo%20Charmant.png"
    },
    {
      name: "BYUSA DIAMANT GISELE",
      role: "Legal & IP Compliance",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Byusa%20Gise.jpg"
    },
    {
      name: "HENRY LUC MARIE MUGABE",
      role: "Junior Accountant",
      image: "https://raw.githubusercontent.com/frabrice/dajah/refs/heads/main/Henry%20Mugabe%20.jpg"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest standards of professional integrity and transparency in all our dealings, ensuring trust and confidence in every interaction."
    },
    {
      icon: Heart,
      title: "Client Focus",
      description: "Your success is our priority. We deliver personalized solutions that exceed expectations and help you achieve your financial goals."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We pursue excellence in every aspect of our service delivery, maintaining the highest standards of professional conduct and expertise."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We build lasting relationships with our clients, working together as trusted partners to achieve sustainable success."
    }
  ];

  return (
    <div className="min-h-screen bg-military-50 pt-16 md:pt-24">
      {/* Hero Section */}
      <div className="relative bg-military-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
            alt="Professional team meeting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 md:mb-6">
              <Globe2 className="h-4 w-4 md:h-5 md:w-5 text-accent-400" />
              <span className="text-accent-400 font-medium text-sm md:text-base">Leading Financial Excellence in East Africa</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-playfair leading-tight">Transforming Business Through Financial Expertise</h1>
            <p className="text-base md:text-lg lg:text-xl text-military-100 leading-relaxed">
              With over a decade of experience, DAJAH Group has been at the forefront of providing innovative financial solutions and expert guidance to businesses across East Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-military-50 to-white p-6 md:p-8 rounded-xl shadow-lg"
            >
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-accent-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-military-900 mb-3 md:mb-4">Our Mission</h3>
              <p className="text-sm md:text-base text-military-700 leading-relaxed">
                To empower businesses with exceptional financial guidance and innovative solutions, fostering growth and sustainable success across East Africa. We are committed to delivering excellence through personalized service and deep industry expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-military-50 to-white p-6 md:p-8 rounded-xl shadow-lg"
            >
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-accent-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-military-900 mb-3 md:mb-4">Our Vision</h3>
              <p className="text-sm md:text-base text-military-700 leading-relaxed">
                To be the leading financial advisory firm in East Africa, recognized for our innovation, integrity, and commitment to client success. We aspire to shape the future of financial services through technology and expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-military-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-military-900 mb-4">Our Core Values</h2>
            <p className="text-base md:text-lg text-military-700 max-w-2xl mx-auto">
              The principles that guide our work and shape our relationships with clients
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 md:py-24 bg-military-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCard number={10} label="Years of Experience" suffix="+" />
            <StatCard number={100} label="Satisfied Customers" suffix="+" />
            <StatCard number={12} label="Industries Served" />
            <StatCard number={8} label="Expert Team Members" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 md:py-32 bg-gradient-to-b from-military-50 via-white to-military-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-military-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-accent-400 to-military-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-military-900 to-military-800 rounded-full px-6 md:px-8 py-2 md:py-3 mb-6 md:mb-8 shadow-xl">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-accent-400" />
              <span className="text-accent-400 font-semibold text-base md:text-lg">Meet Our Expert Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-military-900 mb-4 md:mb-6 font-playfair">The Faces Behind Your Success</h2>
            <div className="h-1 md:h-2 w-24 md:w-32 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-lg lg:text-xl text-military-700 max-w-4xl mx-auto leading-relaxed">
              Our exceptional team of certified professionals brings together decades of experience, deep industry knowledge, and unwavering commitment to your financial success. Each member is dedicated to delivering excellence and building lasting partnerships.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 md:mb-20">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index} 
                {...member} 
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Team Strength Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 via-military-600/10 to-accent-500/10 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl mb-4 md:mb-6 shadow-xl">
                  <Zap className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-military-900 mb-3 md:mb-4 font-playfair">Our Collective Strength</h3>
                <p className="text-base md:text-lg text-military-600">United expertise driving extraordinary results</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center group">
                  <div className="relative mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto opacity-50 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-military-900 mb-2 md:mb-3">Elite Certifications</h4>
                  <p className="text-sm md:text-base text-military-600 leading-relaxed">CPA, ACCA, and specialized industry certifications representing the highest standards of professional excellence</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-military-600 to-military-700 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Globe2 className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-military-600 to-military-700 w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto opacity-50 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-military-900 mb-2 md:mb-3">Global Standards</h4>
                  <p className="text-sm md:text-base text-military-600 leading-relaxed">International best practices seamlessly integrated with deep local market expertise and cultural understanding</p>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4 md:mb-6">
                    <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 w-16 h-16 md:w-20 md:h-20 rounded-2xl mx-auto opacity-50 blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-military-900 mb-2 md:mb-3">Proven Results</h4>
                  <p className="text-sm md:text-base text-military-600 leading-relaxed">Unified team approach delivering measurable success and sustainable growth for every client partnership</p>
                </div>
              </div>

              {/* Success metrics */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-military-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-accent-600 mb-2">100%</div>
                    <div className="text-military-600 text-xs md:text-sm">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-military-700 mb-2">60+</div>
                    <div className="text-military-600 text-xs md:text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-accent-600 mb-2">13</div>
                    <div className="text-military-600 text-xs md:text-sm">Industry Specializations</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-military-700 mb-2">24/7</div>
                    <div className="text-military-600 text-xs md:text-sm">Expert Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-military-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-military-50 rounded-2xl p-8 md:p-12 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-military-900 mb-4 md:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-base md:text-lg text-military-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's work together to achieve your financial goals and drive sustainable growth.
            </p>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-military-600 text-white rounded-lg hover:bg-military-700 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;