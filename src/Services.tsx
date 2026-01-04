import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import PageHero from '@/components/common/PageHero';
import { 
  Ruler, 
  Truck, 
  Wrench, 
  ClipboardCheck,
  ChefHat,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UtensilsCrossed,
  Flame,
  SprayCan,
  Package,
  Thermometer,
  ConciergeBell,
  Layers,
  Droplets,
  Wind,
  Shirt
} from 'lucide-react';

export default function Services() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Architecture and Planning Services',
    provider: {
      '@type': 'Organization',
      name: 'Punith Mithra',
    },
    areaServed: {
      '@type': 'GeoCircle',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Architecture Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kitchen & Laundry Design',
            description: 'Professional kitchen and laundry layout planning and design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Supply & Installation',
            description: 'Complete supply and installation of equipment and materials',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Support',
            description: 'Ongoing maintenance and technical support services',
          },
        },
      ],
    },
  };

  const mainServices = [
    {
      icon: Ruler,
      title: 'Kitchen & Laundry Design and Layout Planning',
      description: 'Professional workflow design and layout planning optimized for efficiency, safety, and productivity. We analyze your space and requirements to create the perfect setup.',
      features: ['Space optimization', 'Workflow analysis', 'Equipment placement', '3D visualization'],
      color: 'blue',
    },
    {
      icon: Truck,
      title: 'Equipment Supply & Installation',
      description: 'Premium quality kitchen and laundry equipment from leading international brands. We ensure proper installation and commissioning for optimal performance.',
      features: ['Top brand equipment', 'Professional installation', 'Commissioning', 'Staff training'],
      color: 'emerald',
    },
    {
      icon: ChefHat,
      title: 'Commercial Kitchen & Laundry Setup',
      description: 'Complete turnkey solutions for commercial kitchens and laundries. From concept to completion, we handle every aspect of your project.',
      features: ['Turnkey projects', 'Custom solutions', 'Project management', 'Quality assurance'],
      color: 'amber',
    },
    {
      icon: Wrench,
      title: 'Repair, Maintenance & AMC Support',
      description: 'Comprehensive after-sales service including repairs, preventive maintenance, and annual maintenance contracts to keep your equipment running smoothly.',
      features: ['24/7 support', 'Preventive maintenance', 'Genuine spare parts', 'AMC packages'],
      color: 'purple',
    },
    {
      icon: ClipboardCheck,
      title: 'Consultation & Project Support',
      description: 'Expert consultation services for kitchen and laundry projects. We help you make informed decisions about equipment, layout, and workflow.',
      features: ['Expert advice', 'Budget planning', 'Vendor coordination', 'Compliance guidance'],
      color: 'rose',
    },
  ];

  const kitchenAreas = [
    { icon: UtensilsCrossed, name: 'Preparation Area' },
    { icon: Flame, name: 'Cooking Area' },
    { icon: SprayCan, name: 'Washing / Dishwashing' },
    { icon: Package, name: 'Receiving & Storage' },
    { icon: Thermometer, name: 'Cold & Dry Storage' },
    { icon: ConciergeBell, name: 'Service & Pickup' },
  ];

  const laundryAreas = [
    { icon: Layers, name: 'Laundry Sorting' },
    { icon: Droplets, name: 'Washing' },
    { icon: Wind, name: 'Drying' },
    { icon: Shirt, name: 'Ironing' },
  ];

  const colorClasses = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
    rose: 'bg-rose-500',
  };

  return (
    <div>
      <SEO
        title="Services"
        description="Comprehensive architecture and planning services including kitchen & laundry design, supply & installation, maintenance, and project consultation. Expert solutions for commercial and residential projects."
        keywords="architecture services, planning services, kitchen design, laundry planning, supply installation, maintenance, project consultation"
        schema={servicesSchema}
      />
      
      <PageHero
        badge="Our Services"
        title="Complete Kitchen & Laundry Solutions"
        subtitle="From design and planning to equipment supply, installation, and maintenance – we provide end-to-end solutions for all your needs."
        backgroundImage="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=1920&q=80"
      />

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 ${colorClasses[service.color]} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-slate-100 rounded-2xl h-80 flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <service.icon className="w-32 h-32 text-slate-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
            >
              Specialized Planning
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Area-Specific Planning Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg"
            >
              We design and plan every area with precision for maximum efficiency
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kitchen Areas */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Kitchen Planning Areas</h3>
              </div>
              <div className="grid gap-4">
                {kitchenAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <area.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-700">{area.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Laundry Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Laundry Planning Areas</h3>
              </div>
              <div className="grid gap-4">
                {laundryAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <area.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-medium text-slate-700">{area.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-6 rounded-xl overflow-hidden h-48">
                <img
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
                  alt="Commercial Laundry"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Every project is unique. Let's discuss your specific requirements.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Request Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}