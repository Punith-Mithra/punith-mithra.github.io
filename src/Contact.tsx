import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { useMutation } from '@tanstack/react-query';
import { base44, ContactInquiryData } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Loader2,
  Building2,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Punith Mithra',
    description: 'Get in touch with us for architecture and planning inquiries',
    mainEntity: {
      '@type': 'Organization',
      name: 'Punith Mithra',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: 'English',
      },
    },
  };

  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    enquiry_type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: ContactInquiryData) => base44.entities.ContactInquiry.create(data),
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        name: '',
        company_name: '',
        email: '',
        phone: '',
        enquiry_type: '',
        message: '',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+968 1234 5678',
      link: 'tel:+96812345678',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@alimtiyaz.com',
      link: 'mailto:info@alimtiyaz.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Muscat, Sultanate of Oman',
      link: null,
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Sun - Thu: 8:00 AM - 6:00 PM',
      link: null,
    },
  ];

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with Punith Mithra for architecture and planning inquiries. Contact us for project consultations, quotations, and professional design services."
        keywords="contact us, architecture inquiry, planning consultation, get quote, contact form, reach us"
        schema={contactSchema}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Contact Us"
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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300">
              Have a project in mind? Let's discuss how we can help you achieve 
              your kitchen and laundry facility goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-600 mb-8">
                Reach out to us through any of the following channels. 
                Our team is ready to assist you with your inquiries.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-slate-600 hover:text-blue-600 transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden h-64 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467267.6231461745!2d58.12807799999999!3d23.5859028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffd5b9bb4cd5%3A0xe2f4cbb36c0c35c!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-slate-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Company / Business Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company_name}
                          onChange={(e) => handleChange('company_name', e.target.value)}
                          placeholder="Your company name"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+968 XXXX XXXX"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="enquiry_type">Type of Enquiry</Label>
                        <select
                          id="enquiry_type"
                        value={formData.enquiry_type}
                          onChange={(e) => handleChange('enquiry_type', e.target.value)}
                          className="flex h-12 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                      >
                          <option value="">Select enquiry type</option>
                          <option value="customer">Customer Enquiry</option>
                          <option value="trade">Trade Enquiry</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements..."
                        required
                        className="min-h-[150px] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What types of projects do you handle?',
                a: 'We handle kitchen and laundry projects of all sizes - from small restaurant kitchens to large hotel facilities, hospitals, schools, and commercial establishments.',
              },
              {
                q: 'Do you provide after-sales support?',
                a: 'Yes, we offer comprehensive after-sales support including repairs, maintenance, and Annual Maintenance Contracts (AMC) to keep your equipment running smoothly.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project duration varies based on scope and complexity. A small kitchen setup might take 2-4 weeks, while large turnkey projects can take 2-6 months.',
              },
              {
                q: 'Do you offer free consultations?',
                a: 'Yes, we offer free initial consultations to understand your requirements and provide preliminary recommendations for your project.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
