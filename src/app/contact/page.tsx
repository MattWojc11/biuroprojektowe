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
      <div className="relative h-[40vh] md:h-[60vh] mb-[-50px] md:mb-[-100px]">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-6 md:mb-12">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Let&apos;s Create
                <span className="gradient-text block">Something Great</span>
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl"
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
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-24">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.label === 'Address' ? '_blank' : undefined}
                className="glass-card p-4 md:p-8 group hover:bg-accent/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                rel="noreferrer"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div className="text-text-secondary text-xs md:text-sm">{info.label}</div>
                </div>
                <div className="text-text-primary font-medium text-sm md:text-lg group-hover:text-accent transition-colors">
                  {info.value}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-4 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="block text-text-primary text-sm md:text-base font-medium">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="input-field text-sm md:text-base"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-text-primary text-sm md:text-base font-medium">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="input-field text-sm md:text-base"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    <div className="space-y-2">
                      <label className="block text-text-primary text-sm md:text-base font-medium">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="input-field text-sm md:text-base"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-text-primary text-sm md:text-base font-medium">Project Type</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="input-field text-sm md:text-base w-full flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            {projectTypes.find(type => type.value === formData.projectType)?.icon}
                            <span>
                              {projectTypes.find(type => type.value === formData.projectType)?.label}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-[#1e293b] border border-white/10 rounded-lg overflow-hidden z-10"
                            >
                              {projectTypes.map((type) => (
                                <button
                                  key={type.value}
                                  type="button"
                                  onClick={() => {
                                    setFormData({...formData, projectType: type.value})
                                    setIsDropdownOpen(false)
                                  }}
                                  className="flex items-center gap-2 w-full p-3 text-sm md:text-base hover:bg-accent/5 transition-colors"
                                >
                                  {type.icon}
                                  {type.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-text-primary text-sm md:text-base font-medium">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="input-field text-sm md:text-base"
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-text-primary text-sm md:text-base font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="input-field text-sm md:text-base min-h-[120px]"
                      required
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8">Office Hours</h2>
                <div className="space-y-6">
                  {officeHours.map((schedule, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center gap-4 text-sm md:text-base"
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-text-primary font-medium">{schedule.day}</span>
                      </div>
                      <span className="text-text-secondary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-4 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 md:mb-8">Visit Our Office</h2>
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7963883076482!2d21.01160147677599!3d52.23213997197451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552d0026386!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1702396318893!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background to-transparent">
                    <div className="text-sm md:text-base font-medium mb-2">Our Office</div>
                    <div className="text-xs md:text-sm text-text-secondary">
                      Pałac Kultury i Nauki, plac Defilad 1, 00-901 Warszawa
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 