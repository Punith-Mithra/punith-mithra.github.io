import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageHero from '@/components/common/PageHero';
import { 
  ArrowRight, 
  Building2, 
  MapPin, 
  Calendar,
  Grid3X3,
  List,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => base44.entities.Project.list('-created_date'),
  });

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects Portfolio',
    description: 'Browse our portfolio of completed architecture and planning projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.slice(0, 10).map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          locationCreated: project.location,
        },
      })),
    },
  };

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'hotel', label: 'Hotels' },
    { value: 'restaurant', label: 'Restaurants' },
    { value: 'hospital', label: 'Hospitals' },
    { value: 'commercial_kitchen', label: 'Commercial Kitchens' },
    { value: 'laundry', label: 'Laundries' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Placeholder images for projects
  const placeholderImages = [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80',
    'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&q=80',
    'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
    'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  ];

  // Sample projects for display if no data exists
  const sampleProjects = [
    { id: 1, title: 'Grand Hyatt Hotel Kitchen', category: 'hotel', location: 'Muscat', year: '2023', image_url: placeholderImages[0], description: 'Complete commercial kitchen setup with state-of-the-art equipment' },
    { id: 2, title: 'Al Nahda Restaurant', category: 'restaurant', location: 'Salalah', year: '2023', image_url: placeholderImages[1], description: 'Modern restaurant kitchen with efficient workflow design' },
    { id: 3, title: 'Royal Hospital Laundry', category: 'hospital', location: 'Muscat', year: '2022', image_url: placeholderImages[4], description: 'High-capacity laundry facility for hospital linens' },
    { id: 4, title: 'Muscat Marriott Kitchen', category: 'hotel', location: 'Muscat', year: '2022', image_url: placeholderImages[2], description: 'Full turnkey kitchen solution for 5-star hotel' },
    { id: 5, title: 'Central Food Court', category: 'commercial_kitchen', location: 'Sohar', year: '2023', image_url: placeholderImages[3], description: 'Multi-station commercial kitchen for food court' },
    { id: 6, title: 'Premier Inn Laundry', category: 'laundry', location: 'Muscat', year: '2022', image_url: placeholderImages[5], description: 'Industrial laundry setup with automated systems' },
  ];

  const displayProjects = projects.length > 0 ? filteredProjects : sampleProjects.filter(p => activeFilter === 'all' || p.category === activeFilter);

  const categoryColors = {
    hotel: 'bg-blue-100 text-blue-700',
    restaurant: 'bg-amber-100 text-amber-700',
    hospital: 'bg-emerald-100 text-emerald-700',
    commercial_kitchen: 'bg-purple-100 text-purple-700',
    laundry: 'bg-rose-100 text-rose-700',
    school: 'bg-cyan-100 text-cyan-700',
    villa: 'bg-indigo-100 text-indigo-700',
  };

  return (
    <div>
      <SEO
        title="Projects"
        description="Explore our diverse portfolio of architecture and planning projects including hotels, restaurants, hospitals, and commercial kitchens. View our completed work and success stories."
        keywords="architecture projects, planning portfolio, commercial projects, hotel design, restaurant design, hospital projects"
        schema={projectsSchema}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Our Projects"
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projects Gallery
            </h1>
            <p className="text-xl text-slate-300">
              Explore our completed projects across hotels, restaurants, hospitals, 
              and commercial facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={activeFilter === cat.value ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(cat.value)}
                  className={`px-4 py-2 ${activeFilter === cat.value ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-slate-100' : ''}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-slate-100' : ''}`}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-64 bg-slate-200" />
                  <div className="p-6">
                    <div className="h-4 bg-slate-200 rounded w-1/4 mb-4" />
                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-slate-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : displayProjects.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No projects found</h3>
              <p className="text-slate-500">Try selecting a different category</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={viewMode === 'grid' 
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'
                }
              >
                {displayProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={viewMode === 'grid'
                      ? 'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300'
                      : 'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row'
                    }
                  >
                    <div className={viewMode === 'grid' ? 'relative h-64 overflow-hidden' : 'relative h-48 md:h-auto md:w-80 flex-shrink-0 overflow-hidden'}>
                      <img
                        src={project.image_url || placeholderImages[index % placeholderImages.length]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-project-overlay" />
                      <Badge className={`absolute top-4 left-4 ${categoryColors[project.category] || 'bg-slate-100 text-slate-700'}`}>
                        {project.category?.replace(/_/g, ' ')}
                      </Badge>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        {project.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </div>
                        )}
                        {project.year && (
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-slate-600 mb-8">
            Let's discuss your next kitchen or laundry project.
          </p>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}