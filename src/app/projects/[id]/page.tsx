'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Ruler, Calendar, Building2 } from 'lucide-react'

// W prawdziwej aplikacji te dane pochodziłyby z API lub bazy danych
const projectDetails = {
  id: 1,
  title: 'Modern Villa',
  description: 'Contemporary design with sustainable materials, featuring open-plan living spaces and floor-to-ceiling windows that blur the line between indoor and outdoor living.',
  images: [
    'https://picsum.photos/id/1029/1200/800',
    'https://picsum.photos/id/1031/1200/800',
    'https://picsum.photos/id/1033/1200/800',
    'https://picsum.photos/id/1035/1200/800'
  ],
  details: 'Completed in 2023',
  location: 'Beverly Hills, CA',
  area: '450 m²',
  completion: '2023',
  architect: 'John Doe',
  features: [
    'Sustainable materials',
    'Smart home integration',
    'Energy-efficient systems',
    'Indoor-outdoor living spaces',
    'Custom furniture design',
    'Landscaped gardens'
  ],
  specifications: {
    'Building Type': 'Residential',
    'Stories': '2',
    'Bedrooms': '4',
    'Bathrooms': '3.5',
    'Garage': '2 cars',
    'Energy Rating': 'A+'
  }
}

export default function ProjectDetails() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link href="/projects" className="text-[#C4A484] hover:text-[#B39374] flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div>
            <motion.div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src={projectDetails.images[selectedImage]}
                alt={projectDetails.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {projectDetails.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[#C4A484]' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              {projectDetails.title}
            </h1>
            <p className="text-gray-400 mb-8">
              {projectDetails.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="text-[#C4A484]" />
                {projectDetails.location}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Ruler className="text-[#C4A484]" />
                {projectDetails.area}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="text-[#C4A484]" />
                {projectDetails.completion}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Building2 className="text-[#C4A484]" />
                {projectDetails.architect}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-4">
                {projectDetails.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-[#C4A484] rounded-full mr-2" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(projectDetails.specifications).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="bg-gray-900 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-gray-400 text-sm">{key}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 