import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ArrowRight, Award, Users, Globe, BarChart as ChartBar, CheckCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "TAX",
    description: "Expert tax planning and compliance services to optimize your financial position. We ensure your business stays compliant while maximizing tax efficiency.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=2000",
    link: "/services/tax"
  },
  {
    title: "ADVISORY",
    description: "Strategic business consulting to drive growth and maximize efficiency. Our experienced team provides insights to help you make informed decisions.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2000",
    link: "/services/advisory"
  },
  {
    title: "AUDIT & ACCOUNTING",
    description: "Comprehensive audit solutions ensuring accuracy and compliance. We deliver thorough financial analysis and reporting to maintain your business integrity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    link: "/services/audit"
  }
];

function HomePage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <div className="relative h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          speed={1000}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 transform transition-transform duration-[8000ms] group-hover:scale-110">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 md:pt-32">
                    <div className="max-w-3xl">
                      <h2 className="text-accent-400 text-sm md:text-lg lg:text-xl font-lato mb-4 tracking-wider opacity-0 animate-[fadeInUp_0.5s_0.5s_forwards]">
                        PROFESSIONAL SERVICES
                      </h2>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 md:mb-6 opacity-0 animate-[fadeInUp_0.5s_0.7s_forwards] leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl text-white/90 font-lato max-w-2xl leading-relaxed opacity-0 animate-[fadeInUp_0.5s_0.9s_forwards] mb-6 md:mb-8">
                        {slide.description}
                      </p>
                      <Link
                        to="/about"
                        onClick={scrollToTop}
                        className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-all duration-300 font-lato tracking-wide opacity-0 animate-[fadeInUp_0.5s_1.1s_forwards] group text-sm md:text-base"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose Dajah Group</h2>
            <p className="text-base md:text-lg text-primary-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional financial services tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: "Expert Team",
                description: "Our certified professionals bring years of experience and deep industry knowledge."
              },
              {
                icon: Globe,
                title: "Global Standards",
                description: "We adhere to international accounting standards while understanding local market needs."
              },
              {
                icon: Users,
                title: "Client-Focused",
                description: "Your success is our priority. We provide personalized solutions for your unique challenges."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary-50 p-6 md:p-8 rounded-xl"
              >
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-accent-500 mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-primary-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16 md:py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "100+", label: "Satisfied Customers" },
              { number: "12", label: "Industries Served" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-bold text-accent-400 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-primary-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: ChartBar,
                title: "Financial Advisory",
                description: "Strategic guidance for business growth and optimization",
                link: "/services/advisory"
              },
              {
                icon: CheckCircle,
                title: "Audit & Assurance",
                description: "Comprehensive audit services ensuring compliance and accuracy",
                link: "/services/audit"
              },
              {
                icon: Calendar,
                title: "Tax Planning",
                description: "Expert tax strategies to optimize your financial position",
                link: "/services/tax"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-accent-500"
              >
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-accent-500 mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-primary-600 mb-4 md:mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  onClick={scrollToTop}
                  className="inline-flex items-center text-accent-500 hover:text-accent-600 transition-colors text-sm md:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-base md:text-lg text-primary-600 mb-6 md:mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your financial goals
              </p>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;