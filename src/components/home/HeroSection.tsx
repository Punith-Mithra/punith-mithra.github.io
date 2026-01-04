import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const highlights = [
    'Professional Planning',
    'End-to-End Solutions',
    'Quality Equipment',
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
          alt="Commercial Kitchen"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay - inline to prevent stripping */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgb(15, 23, 42))',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.3), transparent)',
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2), transparent)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                color: 'rgb(96, 165, 250)',
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'rgb(96, 165, 250)' }}
              />
              Professional Kitchen & Laundry Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Complete Kitchen &<br />
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))',
              }}
            >
              Laundry Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed"
          >
            From design and planning to equipment supply, installation, and after-sales service. 
            We deliver turnkey solutions for hotels, restaurants, hospitals, and commercial facilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 
                  className="w-5 h-5"
                  style={{ color: 'rgb(96, 165, 250)' }}
                />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: 'rgb(37, 99, 235)',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(29, 78, 216)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(37, 99, 235)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={createPageUrl('Services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '100+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}