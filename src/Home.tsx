import React from 'react';
import { SEO } from '@/components/SEO';
import HeroSection from '@/components/home/HeroSection';
import ClientsSection from '@/components/home/ClientsSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import PlanningAreas from '@/components/home/PlanningAreas';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Punith Mithra',
    description: 'Professional Architecture & Planning Services - Transforming Visions into Reality',
    url: 'https://punith-mithra.github.io',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://punith-mithra.github.io/projects?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <div>
      <SEO
        title="Home"
        description="Professional Architecture & Planning Services - Expert design solutions for residential, commercial, and infrastructure projects. Transform your vision into reality with our innovative approach."
        keywords="architecture, planning, design, construction, civil engineering, residential design, commercial planning, infrastructure development"
        schema={homeSchema}
      />
      <HeroSection />
      <ClientsSection />
      <ServicesOverview />
      <PlanningAreas />
      <WhyChooseUs />
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white-blur rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white-blur rounded-full blur-3xl translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Facility?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Let's discuss your kitchen and laundry requirements. Get a free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+96812345678"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors border border-blue-500"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}