import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  Ruler, 
  Truck, 
  Wrench, 
  ClipboardCheck, 
  ArrowRight,
  ChefHat,
  Sparkles
} from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      icon: Ruler,
      title: 'Design & Planning',
      description: 'Professional workflow design and layout planning for optimal efficiency and functionality.',
      color: 'bg-primary',
    },
    {
      icon: Truck,
      title: 'Equipment Supply',
      description: 'Premium quality kitchen and laundry equipment from leading international brands.',
      color: 'bg-accent-success',
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Expert installation and commissioning with proper training for your team.',
      color: 'bg-accent-warning',
    },
    {
      icon: ClipboardCheck,
      title: 'Maintenance & AMC',
      description: 'Comprehensive after-sales service, repair, and annual maintenance contracts.',
      color: 'bg-accent-info',
    },
  ];

  return (
    <section className="py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-primary-solid mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Complete End-to-End Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            From concept to completion, we provide comprehensive kitchen and laundry solutions 
            tailored to your specific requirements.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Feature */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-primary rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 decorative-blur-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <ChefHat className="w-12 h-12 text-primary-light mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Commercial Kitchen</h3>
              <p className="text-text-on-primary/80 mb-6 leading-relaxed">
                Complete kitchen solutions for hotels, restaurants, cafés, hospitals, and institutional facilities. 
                We handle everything from design to installation.
              </p>
              <Link
                to={createPageUrl('Services')}
                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-slate-dark rounded-2xl p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 decorative-blur-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <Sparkles className="w-12 h-12 text-text-tertiary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Commercial Laundry</h3>
              <p className="text-text-tertiary mb-6 leading-relaxed">
                Professional laundry setup for hotels, hospitals, and large facilities. 
                Efficient workflow design for sorting, washing, drying, and ironing.
              </p>
              <Link
                to={createPageUrl('Services')}
                className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}