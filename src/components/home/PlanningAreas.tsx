import React from 'react';
import { motion } from 'framer-motion';
import { 
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

export default function PlanningAreas() {
  const kitchenAreas = [
    { icon: UtensilsCrossed, name: 'Preparation Area', desc: 'Food prep & cutting zones' },
    { icon: Flame, name: 'Cooking Area', desc: 'Ranges, ovens & fryers' },
    { icon: SprayCan, name: 'Dishwashing', desc: 'Cleaning & sanitization' },
    { icon: Package, name: 'Receiving & Storage', desc: 'Goods receiving area' },
    { icon: Thermometer, name: 'Cold & Dry Storage', desc: 'Refrigeration & pantry' },
    { icon: ConciergeBell, name: 'Service & Pickup', desc: 'Plating & dispatch' },
  ];

  const laundryAreas = [
    { icon: Layers, name: 'Laundry Sorting', desc: 'Classification area' },
    { icon: Droplets, name: 'Washing', desc: 'Commercial washers' },
    { icon: Wind, name: 'Drying', desc: 'Industrial dryers' },
    { icon: Shirt, name: 'Ironing', desc: 'Pressing & finishing' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4"
          >
            Planning Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Comprehensive Area Planning
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            We design and plan every area of your kitchen and laundry facility 
            for maximum efficiency and workflow optimization.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Kitchen Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Kitchen Areas</h3>
            </div>
            <div className="grid gap-4">
              {kitchenAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                    <area.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{area.name}</h4>
                    <p className="text-sm text-slate-500">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Laundry Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Laundry Areas</h3>
            </div>
            <div className="grid gap-4 mb-8">
              {laundryAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-purple-600 transition-colors">
                    <area.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{area.name}</h4>
                    <p className="text-sm text-slate-500">{area.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden h-48">
              <img
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
                alt="Commercial Laundry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-planning-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}