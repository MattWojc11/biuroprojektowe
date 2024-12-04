'use client'

import { motion } from 'framer-motion'
import { CircleDot, ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and budget to understand your project needs.',
    icon: <CircleDot className="w-8 h-8" />
  },
  {
    number: '02',
    title: 'Concept Design',
    description: 'Our team creates initial designs and 3D visualizations for your review.',
    icon: <CircleDot className="w-8 h-8" />
  },
  {
    number: '03',
    title: 'Development',
    description: 'We refine the designs based on your feedback and prepare detailed plans.',
    icon: <CircleDot className="w-8 h-8" />
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Our experts oversee the construction process to ensure quality execution.',
    icon: <CircleDot className="w-8 h-8" />
  }
]

export default function Process() {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-background-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold gradient-text mb-4">Our Process</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We follow a systematic approach to bring your architectural dreams to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/0 transform -translate-y-1/2 -translate-x-8" />
              )}
              
              <div className="glass-card p-6 relative group card-hover">
                {/* Step number */}
                <motion.div 
                  className="absolute -top-4 left-6 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-bold py-1 px-3 rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.number}
                </motion.div>

                <div className="pt-4">
                  <motion.h3 
                    className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.4 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Step indicator */}
                <motion.div 
                  className="absolute top-1/2 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hidden lg:flex"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button className="button-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
} 