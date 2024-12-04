'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar, Ruler, ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    title: 'Modern Villa',
    type: 'residential',
    description: 'Contemporary design with sustainable materials',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    location: 'Beverly Hills, CA',
    year: '2023',
    area: '4,500 sq ft',
    category: 'Residential'
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
  }
]

export default function InteractiveGallery() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-32 bg-gradient-to-br from-background to-background-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-sm font-medium px-4 py-2 rounded-full border border-accent/20 bg-accent/5">
              OUR PORTFOLIO
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover our latest architectural masterpieces that redefine modern living spaces
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group glass-card"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link href={`/projects/${item.id}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredItem === item.id ? 1 : 0, y: hoveredItem === item.id ? 0 : 20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <div className="text-accent text-sm font-medium px-4 py-2 rounded-full bg-accent/10 inline-block mb-4">
                          {item.category}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="glass-card p-3 text-center">
                          <MapPin className="w-5 h-5 text-accent mx-auto mb-1" />
                          <span className="text-sm text-gray-300">{item.location}</span>
                        </div>
                        <div className="glass-card p-3 text-center">
                          <Calendar className="w-5 h-5 text-accent mx-auto mb-1" />
                          <span className="text-sm text-gray-300">{item.year}</span>
                        </div>
                        <div className="glass-card p-3 text-center">
                          <Ruler className="w-5 h-5 text-accent mx-auto mb-1" />
                          <span className="text-sm text-gray-300">{item.area}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/projects" 
            className="button-primary inline-flex items-center gap-2 group px-8 py-4"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 