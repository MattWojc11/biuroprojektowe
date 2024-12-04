'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Working with ARCHIX was an incredible experience. Their attention to detail and innovative approach transformed our vision into a stunning reality.",
    author: "John Smith",
    role: "Homeowner",
    image: "https://picsum.photos/id/1012/100/100",
    rating: 5,
    project: "Modern Villa Project"
  },
  {
    id: 2,
    content: "The team's expertise in sustainable design and energy efficiency made our commercial project both beautiful and environmentally conscious.",
    author: "Emma Wilson",
    role: "Real Estate Developer",
    image: "https://picsum.photos/id/1014/100/100",
    rating: 5,
    project: "Eco Office Complex"
  },
  {
    id: 3,
    content: "Their innovative solutions and professional team made our commercial project a great success. The process was smooth from start to finish.",
    author: "Michael Brown",
    role: "Business Owner",
    image: "https://picsum.photos/id/1016/100/100",
    rating: 5,
    project: "Urban Retail Space"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background-light to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Client Testimonials</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <Quote className="absolute text-accent opacity-10 w-32 h-32 -top-16 -left-16 transform -rotate-12" />
          
          <div className="relative h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="glass-card p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent">
                          <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-text-primary font-bold">
                            {testimonials[currentIndex].author}
                          </h3>
                          <p className="text-text-secondary">
                            {testimonials[currentIndex].role}
                          </p>
                          <p className="text-accent text-sm">
                            {testimonials[currentIndex].project}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-accent"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xl text-text-secondary italic mb-6">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              className="p-3 glass-card hover:bg-accent/20 rounded-full transition-all duration-300"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-6 h-6 text-accent" />
            </motion.button>
            <motion.button
              className="p-3 glass-card hover:bg-accent/20 rounded-full transition-all duration-300"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-6 h-6 text-accent" />
            </motion.button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-accent' : 'bg-text-secondary/30'
                }`}
                onClick={() => {
                  const direction = index - currentIndex
                  setDirection(direction)
                  setCurrentIndex(index)
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 