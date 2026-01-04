import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { 
  Award, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Clock,
  Globe
} from 'lucide-react';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Punith Mithra',
    description: 'Learn about our journey, mission, and expertise in architecture and planning services',
    mainEntity: {
      '@type': 'Organization',
      name: 'Punith Mithra',
      foundingDate: '2008',
      description: 'Professional Architecture & Planning Services Provider',
    },
  };

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to provide quality kitchen solutions' },
    { year: '2012', title: 'Laundry Division', description: 'Expanded to include commercial laundry solutions' },
    { year: '2016', title: 'Regional Growth', description: 'Extended services across the GCC region' },
    { year: '2020', title: '500+ Projects', description: 'Reached milestone of 500 completed projects' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards.',
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Our clients are at the heart of everything we do. Their success is our success.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices.',
    },
  ];

  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Punith Mithra's journey in architecture and planning. Discover our mission, expertise, and commitment to delivering exceptional design solutions since 2008."
        keywords="about us, architecture firm, planning services, company history, professional team, design expertise"
        schema={aboutSchema}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Commercial Kitchen"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-dark-overlay" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Excellence in Kitchen & Laundry Solutions
            </h1>
            <p className="text-xl text-slate-300">
              AL IMTIYAZ has been at the forefront of commercial kitchen and laundry 
              facility planning for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  AL IMTIYAZ provides complete kitchen and laundry solutions for residential 
                  and commercial projects. We specialize in workflow design, layout planning, 
                  equipment selection, installation, commissioning, and after-sales service.
                </p>
                <p>
                  We work with hotels, restaurants, cafés, hospitals, schools, villas, and 
                  large facilities. Our focus is on efficiency, functionality, and cost-effective 
                  planning that delivers real results.
                </p>
                <p>
                  Our team of experienced professionals brings deep expertise in commercial 
                  kitchen and laundry facility planning. We understand the unique requirements 
                  of different industries and tailor our solutions accordingly.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-500 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-500 mt-1">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-slate-500 mt-1">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80"
                  alt="Our Team at Work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">15+ Years</div>
                    <div className="text-blue-100 text-sm">of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our Journey
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-blue-600 font-bold text-lg mb-1">{milestone.year}</div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h4>
                      <p className="text-slate-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Work With Us?
          </h2>
          <p className="text-slate-400 mb-8">
            Let's discuss how we can help with your next project.
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}