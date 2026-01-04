import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ChefHat, X } from 'lucide-react';
import equipmentsData from '@/components/products/equipments.json';

interface Equipment {
  id: number;
  category: string;
  categories: string[];
  primary_category: string;
  equipment_name: string;
  professional_description: string;
  technical_specifications: string;
  image_url: string;
  slug: string;
  specifications_object: Record<string, string>;
}

// Category image mapping - high-quality images for each category
const categoryImages: Record<string, string> = {
    'Bakery': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    'Ovens': 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80',
    'Cooking Equipment': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    'Refrigeration': 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&q=80',
    'Beverage': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    'Bar': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    'Laundry': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
    'Prep': 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80',
    'Storage': 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    'Warewashing': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    'Food Holding': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    'Ventilation': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    'Tools': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    'Testing': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
};

// Fallback image for categories without specific images
const defaultCategoryImage = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  // Get all unique categories
  const categories = useMemo(() => {
    const catsSet = new Set<string>();
    equipmentsData.forEach((item: Equipment) => {
      // Add all categories from the categories array
      item.categories.forEach((cat: string) => catsSet.add(cat));
    });
    return ['All', ...Array.from(catsSet).sort()];
  }, []);

    // Search-only filtered results (without category filter) for sidebar counts
    const searchFilteredEquipments = useMemo(() => {
        if (!searchTerm.trim()) {
            return equipmentsData as Equipment[];
    }

      const search = searchTerm.toLowerCase();

      // Filter and calculate relevance score
      return (equipmentsData as Equipment[])
          .map((item) => {
              let score = 0;
              const name = item.equipment_name.toLowerCase();
              const desc = item.professional_description.toLowerCase();
              const specs = item.technical_specifications.toLowerCase();

              // Exact match in name (highest priority)
              if (name === search) score += 100;
              // Name starts with search term
              else if (name.startsWith(search)) score += 80;
              // Name contains search term
              else if (name.includes(search)) score += 60;

              // Category exact match
              if (item.categories.some(cat => cat.toLowerCase() === search)) score += 50;
              // Category contains search term
              else if (item.categories.some(cat => cat.toLowerCase().includes(search))) score += 40;

              // Description contains search term
              if (desc.includes(search)) score += 20;

              // Specifications contain search term
              if (specs.includes(search)) score += 10;

              return { item, score };
          })
          .filter(({ score }) => score > 0)
          .sort((a, b) => b.score - a.score)
          .map(({ item }) => item);
  }, [searchTerm]);

    // Filter and search logic with relevance sorting
    const filteredEquipments = useMemo(() => {
        let filtered = searchFilteredEquipments;

      // Filter by category (applied after search)
      if (selectedCategory !== 'All') {
          filtered = filtered.filter((item) =>
              item.categories.includes(selectedCategory)
          );
    }

    return filtered;
  }, [selectedCategory, searchFilteredEquipments]);

    // Get count for each category based on search results (ignoring category selection)
  const categoryCounts = useMemo(() => {
      const counts: Record<string, number> = {};
    
      // If searching, count from search results only (before category filter)
    if (searchTerm.trim()) {
        counts['All'] = searchFilteredEquipments.length;
        searchFilteredEquipments.forEach((item: Equipment) => {
        item.categories.forEach((cat: string) => {
          counts[cat] = (counts[cat] || 0) + 1;
        });
      });
    } else {
      // Otherwise count all equipment
        counts['All'] = equipmentsData.length;
      equipmentsData.forEach((item: Equipment) => {
        item.categories.forEach((cat: string) => {
          counts[cat] = (counts[cat] || 0) + 1;
        });
      });
    }
    
    return counts;
  }, [searchTerm, searchFilteredEquipments]);

  // Get visible categories (hide categories with 0 items when searching)
  const visibleCategories = useMemo(() => {
    if (searchTerm.trim()) {
      return categories.filter(cat => (categoryCounts[cat] || 0) > 0);
    }
    return categories;
  }, [categories, categoryCounts, searchTerm]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Kitchen & Laundry Equipment Catalog',
    description: 'Comprehensive catalog of professional kitchen and laundry equipment',
    url: 'https://punith-mithra.github.io/products',
  };

  return (
    <div>
      <SEO
        title="Products | Equipment Catalog"
        description="Browse our comprehensive catalog of professional kitchen and laundry equipment. Find the perfect equipment for your commercial facility."
        keywords="kitchen equipment, laundry equipment, commercial kitchen, restaurant equipment, cooking equipment, refrigeration, bakery equipment"
        schema={productSchema}
      />

      {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
            alt="Kitchen Equipment"
                      className="w-full h-full object-cover"
          />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Equipment Catalog
            </h1>
            <p className="text-xl text-slate-300">
              Explore our comprehensive range of professional kitchen and laundry equipment. 
              {equipmentsData.length}+ products across {categories.length - 1} categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, category, or specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
              {selectedCategory !== 'All' && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">1</span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="min-h-[550px] h-[calc(100vh-280px)] bg-slate-50">
        <div className="h-full px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 h-full max-w-[1440px] mx-auto">
            {/* Sidebar - Category Filters */}
            <aside className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-xl shadow-sm p-6 lg:sticky lg:top-8 max-h-[calc(100vh-320px)] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Categories</h3>
                  {selectedCategory !== 'All' && (
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="space-y-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                  {visibleCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white font-medium'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                      title={category}
                    >
                      <div className="flex items-center justify-between gap-3">
                              <span className="truncate flex-1">
                          {category}
                        </span>
                              {/* Only show count when searching */}
                              {searchTerm.trim() && (
                                  <span className={`font-medium flex-shrink-0 px-2.5 py-1 rounded-full ${selectedCategory === category
                                          ? 'bg-blue-500 text-white'
                                          : 'bg-slate-200 text-slate-600'
                                      }`}>
                                      {categoryCounts[category] || 0}
                                  </span>
                              )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid with Scroll */}
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
              {selectedCategory === 'All' && !searchTerm.trim() ? (
                /* Category Grid View - Show all categories when "All" is selected and no search */
                <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                                  {categories.filter(cat => cat !== 'All').map((category) => (
                                      <motion.div
                                          key={category}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                                          onClick={() => setSelectedCategory(category)}
                                      >
                                          {/* Category Card */}
                                          <div className="relative h-48 overflow-hidden">
                                              <img
                                                  src={categoryImages[category] || defaultCategoryImage}
                                                  alt={category}
                                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                              />
                                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-colors" />
                                              <div className="absolute bottom-4 left-4 right-4">
                                                  <h3 className="text-2xl font-bold text-white mb-1">{category}</h3>
                                                  <p className="text-blue-100 text-sm">{categoryCounts[category] || 0} products</p>
                                              </div>
                                          </div>

                                          <div className="p-6">
                                              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                                  View Products
                                              </button>
                                          </div>
                                      </motion.div>
                                  ))}
                              </div>
                          ) : filteredEquipments.length === 0 ? (
                <div className="text-center py-16">
                  <ChefHat className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                                      /* Product Grid View - Show products when a specific category is selected */
                                      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                  {filteredEquipments.map((equipment, index) => (
                    <motion.div
                      key={equipment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      {/* Image */}
                      <div className="relative h-48 bg-slate-100 overflow-hidden">
                        <img
                          src={equipment.image_url}
                          alt={equipment.equipment_name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                              {/* Only show category badges when searching within a category */}
                              {searchTerm.trim() && (
                                  <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-1">
                                      {equipment.categories.map((cat, idx) => (
                                          <span
                                              key={idx}
                                              className="px-2 py-0.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-sm truncate max-w-[120px]"
                                              title={cat}
                                          >
                                              {cat}
                                          </span>
                            ))}
                                  </div>
                              )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {equipment.equipment_name}
                        </h3>
                              <p className="text-slate-600 mb-4 line-clamp-2">
                          {equipment.professional_description}
                        </p>

                        {/* Specifications Preview */}
                              <div className="space-y-1.5 mb-4">
                          {Object.entries(equipment.specifications_object)
                            .slice(0, 2)
                            .map(([key, value]) => (
                                <div key={key} className="text-slate-500">
                                <span className="font-medium text-slate-700">{key}:</span> {value}
                              </div>
                            ))}
                        </div>

                        <button 
                          onClick={() => setSelectedEquipment(equipment)}
                          className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Details Modal */}
      <AnimatePresence>
        {selectedEquipment && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEquipment(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <button
                  onClick={() => setSelectedEquipment(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
                
                {/* Equipment Image */}
                <div className="relative h-64 bg-slate-100">
                  <img
                    src={selectedEquipment.image_url}
                    alt={selectedEquipment.equipment_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    {selectedEquipment.categories.map((cat, idx) => (
                      <span 
                        key={idx}
                            className="px-4 py-2 bg-blue-600/95 backdrop-blur-sm text-white font-semibold rounded-full shadow-lg"
                        title={cat}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
                {/* Equipment Name */}
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  {selectedEquipment.equipment_name}
                </h2>

                {/* Description */}
                <div className="mb-6">
                                  <h3 className="font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Description
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedEquipment.professional_description}
                  </p>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                                  <h3 className="font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    Technical Specifications
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    {Object.entries(selectedEquipment.specifications_object).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2">
                        <span className="font-semibold text-slate-700 min-w-[140px]">
                          {key}:
                        </span>
                        <span className="text-slate-600">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                {selectedEquipment.technical_specifications && (
                  <div className="mb-6">
                                      <h3 className="font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Additional Information
                    </h3>
                                      <p className="text-slate-600 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      {selectedEquipment.technical_specifications}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Request Quote
                  </button>
                  <button className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
                    Download Specs
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
