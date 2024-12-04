'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
  },
  {
    id: 2,
    title: 'Minimalist Kitchen',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3'
  },
  {
    id: 3,
    title: 'Contemporary Facade',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
  },
  {
    id: 4,
    title: 'Garden Design',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695481'
  }
]

const categories = ['All', 'Interior', 'Exterior', 'Landscape']

export default function InteractiveGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = galleryItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  )

  return (
    <section className="py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h2>

        <motion.div 
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === category
                  ? 'bg-[#C4A484] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/60 flex items-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#C4A484]">{item.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 