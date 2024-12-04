'use client'

import { motion } from 'framer-motion'
import {  MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    title: 'Modern Architecture',
    subtitle: 'Design that Inspires',
    description: 'Creating spaces that blend innovation with functionality'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    title: 'Sustainable Living',
    subtitle: 'Eco-Friendly Solutions',
    description: 'Building tomorrow with environmental consciousness'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    title: 'Luxury Homes',
    subtitle: 'Exclusive Designs',
    description: 'Where comfort meets sophistication'
  }
]

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={slides[0].image}
          alt="Modern Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                AWARD WINNING STUDIO
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-6xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-text-primary">Creating</span>
                <br />
                <span className="gradient-text">Timeless</span>
                <br />
                <span className="text-text-primary">Architecture</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-text-secondary max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                We design spaces that inspire, innovate, and stand the test of time. 
                From concept to creation, we bring your architectural vision to life.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link 
                href="/projects"
                className="button-primary flex items-center gap-2 group"
              >
                View Our Projects
                <MousePointerClick className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 border border-border hover:border-border-hover rounded-lg text-text-primary transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { number: '15+', label: 'Years Experience' },
                { number: '150+', label: 'Projects Completed' },
                { number: '25+', label: 'Awards Won' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - can be used for additional content or left empty for balance */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden glass-card">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
                  alt="Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden glass-card">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
                  alt="Exterior Design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2 text-text-secondary">
          <div className="w-0.5 h-16 bg-gradient-to-b from-accent to-transparent animate-float" />
          <span className="text-sm">Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  )
} 