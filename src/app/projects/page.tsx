'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler,
  Filter
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
    area: '450 m²',
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
    area: '280 m²',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Eco Office Complex',
    type: 'commercial',
    description: 'Sustainable commercial building with green spaces',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    location: 'Portland, OR',
    year: '2023',
    area: '2800 m²',
    category: 'Commercial',
    featured: true
  },
  {
    id: 4,
    title: 'Minimalist House',
    type: 'residential',
    description: 'Clean lines and open spaces define this modern home',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    location: 'Seattle, WA',
    year: '2022',
    area: '320 m²',
    category: 'Residential'
  },
  {
    id: 5,
    title: 'Luxury Apartments',
    type: 'residential',
    description: 'High-end residential complex with premium amenities',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    location: 'Miami, FL',
    year: '2023',
    area: '5000 m²',
    category: 'Residential',
    featured: true
  },
  {
    id: 6,
    title: 'Tech Hub',
    type: 'commercial',
    description: 'Modern office space designed for innovation',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?q=80&w=2070',
    location: 'San Francisco, CA',
    year: '2023',
    area: '3500 m²',
    category: 'Commercial'
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
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
          alt="Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-12">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <motion.h1 
              className="text-6xl font-bold text-text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore our portfolio of innovative architectural designs and successful projects.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Filter */}
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Filter className="text-accent" />
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-background-card text-text-secondary hover:bg-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`group ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative aspect-[4/3] glass-card overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="space-y-4">
                          <div>
                            <div className="text-accent text-sm mb-2">{project.category}</div>
                            <h3 className="text-2xl font-bold text-text-primary mb-2">
                              {project.title}
                            </h3>
                            <p className="text-text-secondary">
                              {project.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm text-text-secondary">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-accent" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-accent" />
                              {project.year}
                            </div>
                            <div className="flex items-center gap-2">
                              <Ruler className="w-4 h-4 text-accent" />
                              {project.area}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Have a Project in Mind?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let s discuss how we can help bring your architectural vision to life.
          </p>
          <Link 
            href="/contact" 
            className="button-primary inline-flex items-center gap-2 group"
          >
            Start a Project
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 