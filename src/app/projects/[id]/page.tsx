'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'

type ProjectId = '1' | '2' | '3' | '4' | '5' | '6'

interface ProjectSection {
  title: string
  content: string | string[]
  type: 'text' | 'list' | 'grid'
  image?: string
}

interface ProjectDetails {
  title: string
  description: string
  mainImage: string
  gallery: string[]
  details: {
    location: string
    area: string
    year: string
    architect: string
  }
  features: string[]
  specifications: Record<string, string>
  sections: ProjectSection[]
}

const projectsData: Record<ProjectId, ProjectDetails> = {
  '1': {
    title: 'Modern Villa',
    description: 'Contemporary design with sustainable materials, featuring open-plan living spaces and floor-to-ceiling windows that blur the line between indoor and outdoor living.',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070'
    ],
    details: {
      location: 'Beverly Hills, CA',
      area: '4,500 sq ft',
      year: '2023',
      architect: 'John Anderson'
    },
    features: [
      'Sustainable materials',
      'Smart home integration',
      'Energy-efficient systems',
      'Indoor-outdoor living',
      'Custom furniture',
      'Infinity pool'
    ],
    specifications: {
      'Building Type': 'Residential',
      'Stories': '2',
      'Bedrooms': '5',
      'Bathrooms': '5.5',
      'Garage': '3 cars',
      'Energy Rating': 'A+'
    },
    sections: [
      {
        title: 'Sustainable Design',
        content: 'Our Modern Villa project incorporates cutting-edge sustainable technologies and materials. From solar panels to rainwater harvesting systems, every aspect of this home was designed with environmental consciousness in mind.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
      },
      {
        title: 'Smart Home Integration',
        content: [
          'Automated lighting and climate control',
          'Voice-activated systems',
          'Smart security features',
          'Energy monitoring system'
        ],
        type: 'list'
      },
      {
        title: 'Luxury Amenities',
        content: [
          'Infinity pool with ocean view',
          'Home theater',
          'Wine cellar',
          'Spa bathroom',
          'Outdoor kitchen',
          'Meditation garden'
        ],
        type: 'grid'
      }
    ]
  },
  '2': {
    title: 'Urban Loft',
    description: 'Industrial style meets modern comfort in this stunning urban loft conversion. Exposed brick walls and steel beams complement contemporary finishes.',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
      'https://images.unsplash.com/photo-1600573472591-ee6c8e695481?q=80&w=2070',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070'
    ],
    details: {
      location: 'New York, NY',
      area: '2,800 sq ft',
      year: '2023',
      architect: 'Sarah Miller'
    },
    features: [
      'Original brick walls',
      'Industrial elements',
      'Open floor plan',
      'High ceilings',
      'Custom lighting',
      'Rooftop access'
    ],
    specifications: {
      'Building Type': 'Residential',
      'Stories': '1',
      'Bedrooms': '2',
      'Bathrooms': '2.5',
      'Style': 'Industrial',
      'Energy Rating': 'A'
    },
    sections: [
      {
        title: 'Industrial Heritage',
        content: 'This Urban Loft preserves the building\'s industrial character while introducing modern comfort. Original brick walls and steel beams serve as a backdrop for contemporary living.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
      },
      {
        title: 'Architectural Elements',
        content: [
          'Double-height ceilings',
          'Original steel trusses',
          'Factory-style windows',
          'Exposed ductwork',
          'Polished concrete floors',
          'Metal staircases'
        ],
        type: 'grid'
      },
      {
        title: 'Modern Amenities',
        content: [
          'Chef\'s kitchen with industrial appliances',
          'Custom steel and glass partitions',
          'Smart home automation',
          'Heated floors',
          'Built-in sound system'
        ],
        type: 'list'
      },
      {
        title: 'Rooftop Features',
        content: 'The crown jewel of this urban loft is its private rooftop terrace, offering panoramic views of the city skyline. The space includes a modern outdoor kitchen, lounge area, and a vertical garden that brings nature to this urban oasis.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3'
      }
    ]
  },
  '3': {
    title: 'Tech Hub',
    description: 'Modern office space designed for innovation and collaboration.',
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1497366754035-5f1d3a2f6d44'
    ],
    details: {
      location: 'San Francisco, CA',
      area: '3,500 sq ft',
      year: '2023',
      architect: 'Michael Chen'
    },
    features: [
      'Open workspace',
      'Meeting rooms',
      'Innovation lab',
      'Relaxation areas',
      'Smart office system',
      'Green spaces'
    ],
    specifications: {
      'Building Type': 'Commercial',
      'Stories': '1',
      'Workstations': '50',
      'Meeting Rooms': '6',
      'Style': 'Modern',
      'Energy Rating': 'A+'
    },
    sections: []
  },
  '4': {
    title: 'Luxury Apartments',
    description: 'High-end residential complex with premium amenities, offering sophisticated urban living with breathtaking city views.',
    mainImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070'
    ],
    details: {
      location: 'Miami, FL',
      area: '5,000 sq ft',
      year: '2023',
      architect: 'David Rodriguez'
    },
    features: [
      'Ocean views',
      'Private balconies',
      'Smart home',
      'Luxury finishes',
      'Concierge service',
      'Spa facilities'
    ],
    specifications: {
      'Building Type': 'Multi-residential',
      'Stories': '3',
      'Units': '6',
      'Parking': 'Underground',
      'Style': 'Luxury',
      'Energy Rating': 'A+'
    },
    sections: [
      {
        title: 'Luxury Living',
        content: 'Our Luxury Apartments project redefines upscale urban living with its stunning architecture and premium amenities. Each residence offers expansive ocean views and sophisticated design elements that create an unparalleled living experience.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea'
      },
      {
        title: 'Premium Amenities',
        content: [
          'Private beach access',
          'Infinity edge pool',
          'State-of-the-art fitness center',
          'Resident lounge with bar',
          'Yoga and meditation studio',
          'Private wine storage'
        ],
        type: 'grid'
      },
      {
        title: 'Exclusive Services',
        content: [
          '24/7 concierge service',
          'Valet parking',
          'Private chef availability',
          'Spa and wellness services',
          'Pet grooming services'
        ],
        type: 'list'
      },
      {
        title: 'Residence Features',
        content: 'Each residence features premium finishes including Italian marble, custom cabinetry, and smart home integration. Floor-to-ceiling windows showcase breathtaking ocean views, while spacious terraces provide the perfect setting for outdoor entertaining.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3'
      }
    ]
  },
  '5': {
    title: 'Eco Office Complex',
    description: 'Sustainable commercial building with green spaces.',
    mainImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
    ],
    details: {
      location: 'Portland, OR',
      area: '2,800 sq ft',
      year: '2023',
      architect: 'Lisa Green'
    },
    features: [
      'Solar panels',
      'Green roof',
      'Rainwater harvesting',
      'Natural ventilation',
      'Recycled materials',
      'EV charging'
    ],
    specifications: {
      'Building Type': 'Commercial',
      'Stories': '2',
      'Offices': '8',
      'Common Areas': '4',
      'Style': 'Eco-modern',
      'Energy Rating': 'A++'
    },
    sections: []
  },
  '6': {
    title: 'Mountain Retreat',
    description: 'Luxurious mountain home combining rustic charm with modern amenities, featuring stunning panoramic views and sustainable design.',
    mainImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25'
    ],
    details: {
      location: 'Aspen, CO',
      area: '4,200 sq ft',
      year: '2023',
      architect: 'Thomas Berg'
    },
    features: [
      'Floor-to-ceiling windows',
      'Stone fireplace',
      'Heated outdoor deck',
      'Home theater',
      'Wine cellar',
      'Ski room'
    ],
    specifications: {
      'Building Type': 'Residential',
      'Stories': '2',
      'Bedrooms': '4',
      'Bathrooms': '4.5',
      'Style': 'Mountain Modern',
      'Energy Rating': 'A'
    },
    sections: [
      {
        title: 'Mountain Living',
        content: 'This mountain retreat seamlessly blends indoor and outdoor living with expansive windows that frame breathtaking mountain views. The design emphasizes natural materials and sustainable practices while providing modern comfort.',
        type: 'text',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
      },
      {
        title: 'Luxury Features',
        content: [
          'Gourmet kitchen with professional appliances',
          'Primary suite with mountain views',
          'Private spa bathroom',
          'Outdoor living space with fireplace',
          'Smart home automation',
          'Radiant floor heating'
        ],
        type: 'grid'
      },
      {
        title: 'Entertainment Spaces',
        content: [
          'Home theater with 4K projection',
          'Game room with billiards',
          'Climate-controlled wine cellar',
          'Outdoor kitchen and bar',
          'Heated infinity pool'
        ],
        type: 'list'
      }
    ]
  }
} as const

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const project = projectsData[params.id as ProjectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <Link href="/projects" className="button-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden mb-[-100px]">
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-24">
            <Link href="/projects" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-8">
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl font-bold text-text-primary mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-text-secondary max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Specific Sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {project.sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-16 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-8">{section.title}</h2>
            
            {section.type === 'text' && (
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <p className="text-text-secondary text-lg leading-relaxed">
                  {section.content as string}
                </p>
                {section.image && (
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden glass-card">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            )}

            {section.type === 'list' && (
              <ul className="space-y-4">
                {(section.content as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-secondary">
                    <Plus className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.type === 'grid' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(section.content as string[]).map((item, idx) => (
                  <div key={idx} className="glass-card p-6">
                    <div className="text-text-primary">{item}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden glass-card">
                <Image
                  src={project.gallery[selectedImage]}
                  alt={`${project.title} view ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden glass-card ${
                      selectedImage === index ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(project.details).map(([key, value]) => (
                <div key={key} className="glass-card p-4">
                  <div className="text-text-secondary text-sm mb-1">{key}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-text-secondary">
                    <Plus className="w-4 h-4 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-text-primary mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-text-secondary">{key}</span>
                    <span className="text-text-primary font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="button-primary w-full flex items-center justify-center gap-2"
            >
              Inquire About This Project
              <Plus className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 