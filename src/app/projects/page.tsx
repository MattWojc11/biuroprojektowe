'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler,
  
  Plus
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    type: 'residential',
    description: 'Contemporary design with sustainable materials',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    location: 'Beverly Hills, CA',
    year: '2023',
    area: '4,500 sq ft',
    category: 'Residential',
    featured: true
  },
  {
    id: 2,
    title: 'Urban Loft',
    type: 'residential',
    description: 'Industrial style meets modern comfort',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    location: 'New York, NY',
    year: '2023',
    area: '2,800 sq ft',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Tech Hub',
    type: 'commercial',
    description: 'Modern office space designed for innovation',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    location: 'San Francisco, CA',
    year: '2023',
    area: '3,500 sq ft',
    category: 'Commercial'
  },
  {
    id: 4,
    title: 'Luxury Apartments',
    type: 'residential',
    description: 'High-end residential complex with premium amenities',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    location: 'Miami, FL',
    year: '2023',
    area: '5,000 sq ft',
    category: 'Residential',
    featured: true
  },
  {
    id: 5,
    title: 'Eco Office Complex',
    type: 'commercial',
    description: 'Sustainable commercial building with green spaces',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    location: 'Portland, OR',
    year: '2023',
    area: '2,800 sq ft',
    category: 'Commercial'
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    type: 'residential',
    description: 'Luxurious mountain home with panoramic views',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
    location: 'Aspen, CO',
    year: '2023',
    area: '4,200 sq ft',
    category: 'Residential'
  }
]

const categories = ['All', 'Residential', 'Commercial']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    project => selectedCategory === 'All' || project.type === selectedCategory.toLowerCase()
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
          alt="Projects"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-12">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <motion.div 
                className="mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-accent text-sm font-medium px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
                  OUR PORTFOLIO
                </span>
              </motion.div>
              <motion.h1 
                className="text-8xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Crafting
                <span className="gradient-text block">Architectural</span>
                Excellence
              </motion.h1>
              <motion.p 
                className="text-xl text-text-secondary max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Explore our diverse portfolio of innovative architectural designs and successful projects 
                that redefine modern living spaces.
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <div className="w-0.5 h-16 bg-gradient-to-b from-accent to-transparent animate-float" />
            <span className="text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Filter */}
        <motion.div 
          className="flex flex-col items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="flex gap-4 p-1.5 bg-background-card/50 rounded-full backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'hover:bg-accent/10 text-text-secondary hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`group ${project.featured ? 'md:col-span-2' : ''}`}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className={`relative glass-card overflow-hidden ${
                    project.featured ? 'h-[75vh]' : 'h-[55vh]'
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      priority={project.featured}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                        <div className="space-y-4 lg:space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                          >
                            <div className="inline-block text-accent text-sm font-medium px-4 py-2 rounded-full bg-accent/10 mb-4">
                              {project.category}
                            </div>
                            <h3 className={`font-bold text-text-primary mb-2 lg:mb-4 ${
                              project.featured ? 'text-5xl' : 'text-3xl'
                            }`}>
                              {project.title}
                            </h3>
                            <p className={`text-text-secondary ${
                              project.featured ? 'text-xl' : 'text-base'
                            } max-w-2xl`}>
                              {project.description}
                            </p>
                          </motion.div>

                          <div className="flex flex-wrap gap-6 text-text-secondary">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                <MapPin className="w-4 h-4 text-accent" />
                              </div>
                              {project.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-accent" />
                              </div>
                              {project.year}
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                <Ruler className="w-4 h-4 text-accent" />
                              </div>
                              {project.area}
                            </div>
                          </div>

                          <motion.button
                            className="button-primary mt-6 group/button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Explore Project
                            <Plus className="w-5 h-5 group-hover/button:rotate-90 transition-transform" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 