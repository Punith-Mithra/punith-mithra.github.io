import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Cog, 
  Target, 
  Shield,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Professional Planning Experts',
      description: 'Our team brings years of experience in commercial kitchen and laundry facility planning.',
    },
    {
      icon: Cog,
      title: 'End-to-End Solutions',
      description: 'From initial consultation to installation and after-sales support, we handle everything.',
    },
    {
      icon: Target,
      title: 'Practical & Efficient Designs',
      description: 'We focus on workflow optimization and cost-effective solutions that work in real-world scenarios.',
    },
    {
      icon: Shield,
      title: 'Quality Service & Support',
      description: 'Premium equipment from trusted brands with comprehensive maintenance and support.',
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'We work closely with you to understand your needs and deliver customized solutions.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Partner for<br />
              <span className="text-blue-400">Professional Solutions</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              With over 15 years of experience in the industry, AL IMTIAZ TRADING has established itself as 
              a leading provider of kitchen and laundry solutions in the region. We pride ourselves 
              on delivering quality, efficiency, and exceptional customer service.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{reason.title}</h4>
                    <p className="text-slate-400 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=80"
                  alt="Commercial Kitchen Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&q=80"
                  alt="Kitchen Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&q=80"
                  alt="Professional Chef Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80"
                  alt="Modern Kitchen Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}