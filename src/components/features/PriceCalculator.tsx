'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home,
  Building2,
  Ruler,
  Palette,
  Lightbulb,
  TreePine,
  Info,
  Calculator
} from 'lucide-react'
import Link from 'next/link'

interface CalculatorOptions {
  houseType: string
  style: string
  floors: number
  rooms: number
  bathrooms: number
  garage: boolean
  garden: boolean
  smartHome: boolean
  sustainableFeatures: boolean
}

const basePrice = {
  modern: 2000,
  traditional: 1800,
  minimalist: 2200
} as const

const styleMultiplier = {
  premium: 1.3,
  standard: 1.0,
  luxury: 1.5
} as const

const features = [
  {
    key: 'garage',
    label: 'Garage',
    icon: <Home className="w-5 h-5" />,
    info: 'Two-car garage with storage space',
    price: 35000
  },
  {
    key: 'garden',
    label: 'Landscaping',
    icon: <TreePine className="w-5 h-5" />,
    info: 'Professional landscape design and implementation',
    price: 25000
  },
  {
    key: 'smartHome',
    label: 'Smart Home',
    icon: <Lightbulb className="w-5 h-5" />,
    info: 'Complete home automation system',
    price: 45000
  },
  {
    key: 'sustainableFeatures',
    label: 'Eco Features',
    icon: <Palette className="w-5 h-5" />,
    info: 'Solar panels and energy-efficient systems',
    price: 55000
  }
] as const

const houseTypes = [
  { value: 'modern', label: 'Modern', icon: <Building2 className="w-5 h-5" /> },
  { value: 'traditional', label: 'Traditional', icon: <Home className="w-5 h-5" /> },
  { value: 'minimalist', label: 'Minimalist', icon: <Ruler className="w-5 h-5" /> }
] as const

const styleLevels = [
  { value: 'standard', label: 'Standard', description: 'Quality materials and finishes' },
  { value: 'premium', label: 'Premium', description: 'High-end materials and custom details' },
  { value: 'luxury', label: 'Luxury', description: 'Exclusive materials and bespoke design' }
] as const

export default function PriceCalculator() {
  const [options, setOptions] = useState<CalculatorOptions>({
    houseType: 'modern',
    style: 'standard',
    floors: 1,
    rooms: 3,
    bathrooms: 2,
    garage: false,
    garden: false,
    smartHome: false,
    sustainableFeatures: false
  })

  const [squareMeters, setSquareMeters] = useState(150)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [animatePrice, setAnimatePrice] = useState(false)

  const calculatePrice = () => {
    let price = squareMeters * basePrice[options.houseType as keyof typeof basePrice]
    price *= styleMultiplier[options.style as keyof typeof styleMultiplier]
    price *= (1 + (options.floors - 1) * 0.15)
    price += options.rooms * 15000
    price += options.bathrooms * 20000
    
    features.forEach(feature => {
      if (options[feature.key as keyof typeof options]) {
        price += feature.price
      }
    })

    return Math.round(price)
  }

  useEffect(() => {
    setAnimatePrice(true)
    const timer = setTimeout(() => setAnimatePrice(false), 600)
    return () => clearTimeout(timer)
  }, [options, squareMeters])

  const estimatedPrice = calculatePrice()

  return (
    <section className="py-32 bg-gradient-to-b from-background via-background-light to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary rounded-full filter blur-[100px]" />
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
            Project Estimation
          </motion.span>
          <motion.h2 
            className="mt-4 text-4xl font-bold text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Calculate Your Project Cost
          </motion.h2>
          <motion.p 
            className="mt-4 text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get an instant estimate for your dream home project. Customize all aspects 
            to get a detailed price breakdown.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Square Meters Slider */}
            <div>
              <label className="block text-text-primary mb-4 text-lg">House Size</label>
              <div className="relative glass-card p-6">
                <input
                  type="range"
                  min="100"
                  max="500"
                  value={squareMeters}
                  onChange={(e) => setSquareMeters(Number(e.target.value))}
                  className="w-full h-2 bg-background-card rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-text-secondary mt-4">
                  <span>100 m²</span>
                  <span className="text-accent font-bold">{squareMeters} m²</span>
                  <span>500 m²</span>
                </div>
              </div>
            </div>

            {/* Main Options */}
            <div className="space-y-8">
              {/* House Type Select */}
              <div>
                <label className="block text-text-primary mb-4">House Type</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {houseTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setOptions({...options, houseType: type.value})}
                      className={`glass-card p-4 transition-all duration-300 ${
                        options.houseType === type.value 
                          ? 'ring-2 ring-accent bg-accent/10' 
                          : 'hover:bg-background-card'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          options.houseType === type.value ? 'bg-accent text-white' : 'bg-accent/10 text-accent'
                        }`}>
                          {type.icon}
                        </div>
                        <span className={`font-medium ${
                          options.houseType === type.value ? 'text-accent' : 'text-text-primary'
                        }`}>
                          {type.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Level Select */}
              <div>
                <label className="block text-text-primary mb-4">Style Level</label>
                <div className="grid md:grid-cols-3 gap-4">
                  {styleLevels.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => setOptions({...options, style: style.value})}
                      className={`glass-card p-4 transition-all duration-300 ${
                        options.style === style.value 
                          ? 'ring-2 ring-accent bg-accent/10' 
                          : 'hover:bg-background-card'
                      }`}
                    >
                      <div className="text-left">
                        <div className={`font-medium mb-1 ${
                          options.style === style.value ? 'text-accent' : 'text-text-primary'
                        }`}>
                          {style.label}
                        </div>
                        <p className="text-sm text-text-secondary">
                          {style.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Numeric Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-primary mb-4">Number of Floors</label>
                  <div className="flex gap-4">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setOptions({...options, floors: num})}
                        className={`flex-1 glass-card py-3 px-6 transition-all duration-300 ${
                          options.floors === num 
                            ? 'ring-2 ring-accent bg-accent/10 text-accent' 
                            : 'text-text-primary hover:bg-background-card'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-text-primary mb-4">Bedrooms</label>
                  <div className="flex gap-4 flex-wrap">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => setOptions({...options, rooms: num})}
                        className={`w-14 h-14 glass-card flex items-center justify-center transition-all duration-300 ${
                          options.rooms === num 
                            ? 'ring-2 ring-accent bg-accent/10 text-accent' 
                            : 'text-text-primary hover:bg-background-card'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <label className="block text-text-primary mb-4">Additional Features</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature.key}
                      className={`glass-card p-4 cursor-pointer transition-all duration-300 ${
                        options[feature.key as keyof CalculatorOptions]
                          ? 'ring-2 ring-accent bg-accent/10'
                          : 'hover:bg-background-card'
                      }`}
                      onClick={() => setOptions({
                        ...options,
                        [feature.key]: !options[feature.key as keyof CalculatorOptions]
                      })}
                      onMouseEnter={() => setShowTooltip(feature.key)}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-text-primary">
                          <div className="text-accent">
                            {feature.icon}
                          </div>
                          <span>{feature.label}</span>
                        </div>
                        <Info 
                          size={16} 
                          className="text-text-secondary"
                        />
                      </div>
                      <AnimatePresence>
                        {showTooltip === feature.key && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute mt-2 p-2 glass-card text-sm text-text-secondary shadow-lg z-10"
                          >
                            {feature.info}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div 
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Price Estimate</h3>
              </div>
              
              <motion.div
                className="text-5xl font-bold gradient-text mb-8"
                animate={animatePrice ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                ${estimatedPrice.toLocaleString()}
              </motion.div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-text-secondary">
                  <span>Base Price ({squareMeters} m²)</span>
                  <span>${(squareMeters * basePrice[options.houseType as keyof typeof basePrice]).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-text-secondary">
                  <span>Style Level ({options.style})</span>
                  <span>+{((styleMultiplier[options.style as keyof typeof styleMultiplier] - 1) * 100).toFixed(0)}%</span>
                </div>
                {features.map(feature => (
                  options[feature.key as keyof CalculatorOptions] && (
                    <div key={feature.key} className="flex justify-between text-text-secondary">
                      <span>{feature.label}</span>
                      <span>+${feature.price.toLocaleString()}</span>
                    </div>
                  )
                ))}
              </div>

              <Link
                href="/contact"
                className="button-primary w-full flex items-center justify-center"
              >
                Get Detailed Quote
              </Link>
              <p className="text-text-secondary text-sm text-center mt-4">
                * This is an estimate. Final price may vary based on specific requirements and location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 