'use client'

import { motion } from 'framer-motion'
import { Building2, Users2, Award, Timer } from 'lucide-react'
import { useState, useEffect } from 'react'

interface StatItem {
  icon: JSX.Element
  value: number
  label: string
  suffix: string
}

const stats: StatItem[] = [
  {
    icon: <Building2 className="w-10 h-10" />,
    value: 150,
    label: 'Projects Completed',
    suffix: '+'
  },
  {
    icon: <Users2 className="w-10 h-10" />,
    value: 1200,
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    icon: <Award className="w-10 h-10" />,
    value: 25,
    label: 'Awards Won',
    suffix: ''
  },
  {
    icon: <Timer className="w-10 h-10" />,
    value: 15,
    label: 'Years Experience',
    suffix: '+'
  }
]

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 50
        const stepValue = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += stepValue
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(current)
            return newCounts
          })
        }, duration / steps)

        return () => clearInterval(timer)
      })
    }
  }, [isVisible])

  return (
    <section className="py-24 bg-gradient-to-br from-background to-background-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setIsVisible(true)}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center gradient-text mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center group card-hover"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10 text-accent"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div 
                className="text-4xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {counts[index]}{stat.suffix}
              </motion.div>
              
              <p className="text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 