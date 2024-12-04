'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Home,
  Building2,
  Palette,
  Users2,
  ChevronDown
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  projectType: string
}

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
]

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'contact@archix.com',
    link: 'mailto:contact@archix.com'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Address',
    value: '123 Architecture Street, Design District, DC 12345',
    link: 'https://maps.google.com'
  }
]

const projectTypes = [
  { value: 'residential', label: 'Residential', icon: <Home className="w-5 h-5" /> },
  { value: 'commercial', label: 'Commercial', icon: <Building2 className="w-5 h-5" /> },
  { value: 'interior', label: 'Interior', icon: <Palette className="w-5 h-5" /> },
  { value: 'consultation', label: 'Consultation', icon: <Users2 className="w-5 h-5" /> }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'residential'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-[-100px]">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
          alt="Contact"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Let&apos;s Create
                <span className="gradient-text block">Something Great</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-text-secondary max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transform your architectural vision into reality. Our team is ready to bring 
                innovation and expertise to your next project.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Contact Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.label === 'Address' ? '_blank' : undefined}
                className="glass-card p-8 group hover:bg-accent/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                rel="noreferrer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="text-text-secondary text-sm">{info.label}</div>
                </div>
                <div className="text-text-primary font-medium text-lg group-hover:text-accent transition-colors">
                  {info.value}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />
                <h2 className="text-3xl font-bold text-text-primary mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-text-primary font-medium">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="input-field"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-text-primary font-medium">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-field"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-text-primary font-medium">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-field"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-text-primary font-medium">Project Type</label>
                      <div className="relative">
                        <motion.button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 glass-card hover:bg-background-card/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-accent">
                              {projectTypes.find(type => type.value === formData.projectType)?.icon}
                            </div>
                            <span className="text-text-primary">
                              {projectTypes.find(type => type.value === formData.projectType)?.label}
                            </span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${
                              isDropdownOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </motion.button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-10 w-full mt-2 glass-card overflow-hidden"
                            >
                              {projectTypes.map((type) => (
                                <motion.button
                                  key={type.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({...formData, projectType: type.value});
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                                    formData.projectType === type.value
                                      ? 'bg-accent/10 text-accent'
                                      : 'hover:bg-background-card/50 text-text-secondary'
                                  }`}
                                  whileHover={{ x: 4 }}
                                >
                                  {type.icon}
                                  <span className="font-medium">{type.label}</span>
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-text-primary font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="input-field"
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-text-primary font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="input-field h-40 resize-none"
                      required
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="button-primary w-full flex items-center justify-center gap-2 py-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Office Hours and Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 lg:sticky lg:top-24"
            >
              {/* Office Hours */}
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center glass-card p-4">
                      <span className="text-text-primary font-medium">{schedule.day}</span>
                      <span className="text-text-secondary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-2 overflow-hidden h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2spl!4v1647043099813!5m2!1sen!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 