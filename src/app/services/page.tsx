'use client'

import { motion } from 'framer-motion'
import { 
  Compass, 
  Palette, 
  HardHat,
  ArrowLeft,
  ArrowRight,
  Plus
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 'architectural',
    title: 'Architectural Design',
    icon: <Compass className="w-12 h-12" />,
    description: 'Creating innovative spaces that inspire and endure',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    features: [
      'Conceptual Design',
      'Space Planning',
      'Technical Documentation',
      'Sustainable Solutions'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070'
    ]
  },
  {
    id: 'interior',
    title: 'Interior Design',
    icon: <Palette className="w-12 h-12" />,
    description: 'Crafting harmonious spaces that reflect your identity',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    features: [
      'Material Selection',
      'Custom Furniture',
      'Lighting Design',
      'Art Curation'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070'
    ]
  },
  {
    id: 'construction',
    title: 'Construction Management',
    icon: <HardHat className="w-12 h-12" />,
    description: 'Executing visions with precision and expertise',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070',
    features: [
      'Project Planning',
      'Quality Control',
      'Timeline Management',
      'Cost Optimization'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?q=80&w=2070',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
          alt="Architecture"
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transforming visions into architectural masterpieces through innovative design 
              and meticulous execution.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[70vh] glass-card overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-text-primary mb-2">{service.title}</h2>
                      <p className="text-text-secondary">{service.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-text-secondary">
                          <Plus className="w-4 h-4 text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link 
                      href={`/services#${service.id}`}
                      className="mt-8 inline-flex items-center gap-2 text-accent group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                {service.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden glass-card"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={image}
                      alt={`${service.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Transform Your Space?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Let s collaborate to bring your architectural vision to life. Our team is ready 
            to create something extraordinary together.
          </p>
          <Link 
            href="/contact" 
            className="button-primary inline-flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 