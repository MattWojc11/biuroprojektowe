'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Ruler,
  Plus,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  type: 'residential' | 'commercial'
  description: string
  mainImage: string
  images: string[]
  location: string
  year: string
  area: string
  category: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Villa',
    type: 'residential',
    description: 'Contemporary design with sustainable materials',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070',
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070'
    ],
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
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
      'https://images.unsplash.com/photo-1600607687644-c94bf5566e14?q=80&w=2070',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070'
    ],
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
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069'
    ],
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
    mainImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566752734-2a0cd53d1f89?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566752229-250ed26470e2?q=80&w=2070'
    ],
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
    mainImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      'https://images.unsplash.com/photo-1613490493412-b04303056592?q=80&w=2071',
      'https://images.unsplash.com/photo-1613490493472-96f62e8dbe24?q=80&w=2071',
      'https://images.unsplash.com/photo-1613490493544-0c4e3d8c4f39?q=80&w=2071'
    ],
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
    mainImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070',
      'https://images.unsplash.com/photo-1536768139911-e290a59011e4?q=80&w=2070'
    ],
    location: 'Aspen, CO',
    year: '2023',
    area: '4,200 sq ft',
    category: 'Residential'
  }
]

const categories = ['All', 'Residential', 'Commercial']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = projects.filter(
    project => selectedCategory === 'All' || project.type === selectedCategory.toLowerCase()
  )

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
          alt="Projects"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-8 md:mb-12">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <motion.div 
                className="mb-4 md:mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-accent text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-accent/20 bg-accent/5">
                  OUR PORTFOLIO
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Crafting
                <span className="gradient-text block">Architectural</span>
                Excellence
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl"
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
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-accent to-transparent animate-float" />
            <span className="text-xs md:text-sm">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Filter */}
        <motion.div 
          className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-1.5 bg-background-card/50 rounded-full backdrop-blur-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-text-primary">{project.title}</h3>
                      <p className="text-sm md:text-base text-text-secondary">{project.description}</p>
                    </div>
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 text-xs md:text-sm text-text-secondary">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1 text-xs md:text-sm text-text-secondary">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1 text-xs md:text-sm text-text-secondary">
                        <Ruler className="w-3 h-3 md:w-4 md:h-4" />
                        {project.area}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl bg-background rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 text-text-primary hover:bg-background-light transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Image Gallery */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-text-primary hover:bg-background-light transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-text-primary hover:bg-background-light transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-text-secondary">{selectedProject.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Location</span>
                      </div>
                      <p className="text-text-primary">{selectedProject.location}</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">Year</span>
                      </div>
                      <p className="text-text-primary">{selectedProject.year}</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <Ruler className="w-4 h-4" />
                        <span className="text-sm font-medium">Area</span>
                      </div>
                      <p className="text-text-primary">{selectedProject.area}</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent mb-1">
                        <Plus className="w-4 h-4" />
                        <span className="text-sm font-medium">Category</span>
                      </div>
                      <p className="text-text-primary">{selectedProject.category}</p>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="grid grid-cols-4 gap-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden ${
                          currentImageIndex === index ? 'ring-2 ring-accent' : ''
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}