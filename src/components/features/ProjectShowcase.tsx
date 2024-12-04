'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    description: 'Contemporary design with sustainable materials',
    image: 'https://picsum.photos/id/1029/1200/800',
    details: 'Completed in 2023',
    location: 'Beverly Hills, CA',
    area: '450 m²'
  },
  {
    id: 2,
    title: 'Urban Loft',
    description: 'Industrial style meets modern comfort',
    image: 'https://picsum.photos/id/1031/1200/800',
    details: 'Completed in 2023',
    location: 'New York, NY',
    area: '280 m²'
  },
  {
    id: 3,
    title: 'Eco House',
    description: 'Energy-efficient family home',
    image: 'https://picsum.photos/id/1033/1200/800',
    details: 'Completed in 2022',
    location: 'Portland, OR',
    area: '320 m²'
  }
]

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentProject((prev) => (prev + newDirection + projects.length) % projects.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background-light to-background relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover our latest architectural masterpieces
          </p>
        </motion.div>

        <div className="relative h-[70vh] overflow-hidden rounded-2xl glass-morphism">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute inset-0"
            >
              <Image
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold text-text-primary mb-4">
                      {projects[currentProject].title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-4">
                      {projects[currentProject].description}
                    </p>
                    <div className="flex gap-4 text-text-secondary">
                      <span>{projects[currentProject].location}</span>
                      <span>•</span>
                      <span>{projects[currentProject].area}</span>
                      <span>•</span>
                      <span>{projects[currentProject].details}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 flex gap-4">
            <motion.button
              className="p-3 glass-card hover:bg-accent/20 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
            >
              <ArrowLeft className="w-6 h-6 text-accent" />
            </motion.button>
            <motion.button
              className="p-3 glass-card hover:bg-accent/20 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
            >
              <ArrowRight className="w-6 h-6 text-accent" />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-8 flex gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'w-8 bg-accent' : 'bg-text-secondary/30'
                }`}
                onClick={() => {
                  const direction = index - currentProject
                  setDirection(direction)
                  setCurrentProject(index)
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 