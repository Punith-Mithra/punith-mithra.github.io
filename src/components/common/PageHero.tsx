import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
}

/**
 * Reusable Page Hero Component
 * 
 * Uses inline gradient styles to prevent react-snap from stripping them in production.
 * All gradients are defined inline with !important to ensure they survive the build process.
 */
export default function PageHero({
  badge,
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80',
  className = '',
}: PageHeroProps) {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
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
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          {badge && (
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                color: 'rgb(96, 165, 250)',
              }}
            >
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-slate-300">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
