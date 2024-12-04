'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Users2, Building2, Lightbulb, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'Principal Architect',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069',
    description: 'With over 20 years of experience, John leads our architectural vision.'
  },
  {
    name: 'Sarah Miller',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2069',
    description: 'Sarah brings spaces to life with her innovative design approach.'
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    description: 'Michael ensures projects are delivered on time and within budget.'
  }
]

const values = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Design Excellence',
    description: 'We create innovative and sustainable architectural solutions that exceed expectations.'
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: 'Client Focus',
    description: 'Your vision and satisfaction are at the heart of everything we do.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We embrace new technologies and approaches to push architectural boundaries.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Quality',
    description: 'Uncompromising attention to detail in every project we undertake.'
  }
]

const milestones = [
  {
    year: '2003',
    title: 'Foundation',
    description: 'ARCHIX was established with a vision to transform architectural design.'
  },
  {
    year: '2008',
    title: 'First Major Project',
    description: 'Completed our first award-winning commercial building.'
  },
  {
    year: '2015',
    title: 'International Expansion',
    description: 'Opened offices in major cities worldwide.'
  },
  {
    year: '2023',
    title: 'Sustainability Focus',
    description: 'Committed to 100% sustainable design practices.'
  }
]

const expertise = [
  {
    title: 'Residential Architecture',
    description: 'Custom homes and multi-family developments that blend comfort with innovation.',
    stats: [
      { value: '250+', label: 'Homes Designed' },
      { value: '98%', label: 'Client Satisfaction' }
    ]
  },
  {
    title: 'Commercial Projects',
    description: 'Modern office spaces and retail environments that inspire productivity.',
    stats: [
      { value: '150+', label: 'Commercial Buildings' },
      { value: '2M+', label: 'Square Feet Developed' }
    ]
  },
  {
    title: 'Sustainable Design',
    description: 'Eco-friendly solutions that minimize environmental impact.',
    stats: [
      { value: '80%', label: 'Energy Efficiency' },
      { value: '40+', label: 'LEED Certified Projects' }
    ]
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-12">
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              <motion.h1 
                className="text-8xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                We Design
                <span className="gradient-text block">Tomorrow&apos;s</span>
                Spaces
              </motion.h1>
              <motion.p 
                className="text-xl text-text-secondary max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                20 years of architectural excellence, creating spaces that inspire and endure.
              </motion.p>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4 self-center">
              {[
                { label: 'Projects', value: '500+' },
                { label: 'Years', value: '20+' },
                { label: 'Awards', value: '25+' },
                { label: 'Team Members', value: '50+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide our work and define our approach to architecture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 flex gap-6 items-start group hover:bg-accent/5 transition-colors"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex-shrink-0 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-32 bg-background-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The creative minds behind our architectural masterpieces.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                    <div className="text-accent mb-4">{member.role}</div>
                    <p className="text-text-secondary">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent/20" />
              <div className="space-y-24">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-1 glass-card p-8">
                      <div className="text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">{milestone.title}</h3>
                      <p className="text-text-secondary">{milestone.description}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent relative z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="relative py-32 bg-background-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Specialized knowledge and experience across various architectural domains.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {expertise.map((area, index) => (
              <motion.div
                key={index}
                className="glass-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-text-primary mb-4">{area.title}</h3>
                <p className="text-text-secondary mb-8">{area.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {area.stats.map((stat, idx) => (
                    <div key={idx} className="glass-card p-4 text-center">
                      <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
            alt="CTA Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-text-secondary mb-12 max-w-2xl mx-auto text-lg">
              Let&apos;s collaborate to bring your architectural vision to life. Our team is ready 
              to create something extraordinary together.
            </p>
            <Link 
              href="/contact" 
              className="button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 