'use client'

import { motion } from 'framer-motion'
import { Compass, Palette, HardHat, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Architectural Design',
    icon: <Compass className="w-12 h-12" />,
    description: 'Complete architectural design services for residential and commercial projects',
    features: [
      'Custom design solutions',
      '3D visualization',
      'Technical documentation',
      'Building permits assistance'
    ],
    link: '/services#architectural'
  },
  {
    title: 'Interior Design',
    icon: <Palette className="w-12 h-12" />,
    description: 'Full-service interior design and space planning for modern living',
    features: [
      'Space planning',
      'Material selection',
      'Furniture design',
      'Lighting design'
    ],
    link: '/services#interior'
  },
  {
    title: 'Construction Management',
    icon: <HardHat className="w-12 h-12" />,
    description: 'Professional oversight of your construction project from start to finish',
    features: [
      'Project coordination',
      'Quality control',
      'Timeline management',
      'Cost optimization'
    ],
    link: '/services#construction'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-background-light to-background relative overflow-hidden">
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
          <motion.span 
            className="text-accent text-sm font-semibold tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl font-bold text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive Architectural Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From concept to completion, we provide end-to-end architectural solutions 
            tailored to your unique vision and requirements.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-8 group card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-text-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Link 
                href={service.link}
                className="inline-flex items-center text-accent hover:text-accent-light transition-colors group/link"
              >
                Learn more 
                <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="button-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 