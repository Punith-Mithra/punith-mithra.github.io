import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const services = [
    'Kitchen Design & Layout',
    'Laundry Planning',
    'Equipment Supply',
    'Installation & Commissioning',
    'Maintenance & AMC',
  ];

  const quickLinks = [
    { name: 'About Us', path: 'About' },
    { name: 'Services', path: 'Services' },
    { name: 'Projects', path: 'Projects' },
    { name: 'Contact', path: 'Contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-blue-horizontal">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mt-2">Let's discuss your kitchen & laundry requirements.</p>
          </div>
          <Link
            to={createPageUrl('Contact')}
            className="flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-blue-icon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">AL IMTIYAZ</h3>
                <p className="text-xs text-slate-400">PROFESSIONAL SOLUTIONS</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Complete kitchen and laundry solutions for residential and commercial projects. 
              We specialize in workflow design, layout planning, equipment supply, and after-sales service.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Visit our LinkedIn page" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Visit our Facebook page" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Visit our Instagram page" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={createPageUrl('Services')}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={createPageUrl(link.path)}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+96812345678" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-0.5 text-blue-500" />
                <span className="text-sm">+968 1234 5678</span>
              </a>
              <a href="mailto:info@alimtiyaz.com" className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 mt-0.5 text-blue-500" />
                <span className="text-sm">info@alimtiyaz.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">Muscat, Sultanate of Oman</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AL IMTIYAZ. All rights reserved.</p>
          <p>Professional Kitchen & Laundry Solutions</p>
        </div>
      </div>
    </footer>
  );
}