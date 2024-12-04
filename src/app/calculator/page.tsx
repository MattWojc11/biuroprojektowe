'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft,
  Home,
  Building,
  Ruler,
  Palette,
  Lightbulb,
  TreePine,
  Info,
  Calculator,
  Plus
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
}

const styleMultiplier = {
  premium: 1.3,
  standard: 1.0,
  luxury: 1.5
}

const features = [
  {
    key: 'garage',
    label: 'Garage',
    icon: <Home size={20} />,
    info: 'Two-car garage with storage space',
    price: 35000
  },
  {
    key: 'garden',
    label: 'Landscaping',
    icon: <TreePine size={20} />,
    info: 'Professional landscape design and implementation',
    price: 25000
  },
  {
    key: 'smartHome',
    label: 'Smart Home',
    icon: <Lightbulb size={20} />,
    info: 'Complete home automation system',
    price: 45000
  },
  {
    key: 'sustainableFeatures',
    label: 'Eco Features',
    icon: <Palette size={20} />,
    info: 'Solar panels and energy-efficient systems',
    price: 55000
  }
] as const

export default function CalculatorPage() {
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

  const [squareFeet, setSquareFeet] = useState(1500)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [animatePrice, setAnimatePrice] = useState(false)

  const calculatePrice = () => {
    let price = squareFeet * (basePrice[options.houseType as keyof typeof basePrice])
    price *= styleMultiplier[options.style as keyof typeof styleMultiplier]
    price *= (1 + (options.floors - 1) * 0.15)
    price += options.rooms * 15000
    price += options.bathrooms * 20000
    if (options.garage) price += 35000
    if (options.garden) price += 25000
    if (options.smartHome) price += 45000
    if (options.sustainableFeatures) price += 55000
    return Math.round(price)
  }

  useEffect(() => {
    setAnimatePrice(true)
    const timer = setTimeout(() => setAnimatePrice(false), 600)
    return () => clearTimeout(timer)
  }, [options, squareFeet])

  const estimatedPrice = calculatePrice()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-12">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <motion.h1 
            className="text-6xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Project Calculator
          </motion.h1>
          <motion.p 
            className="text-xl text-text-secondary max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get an instant estimate for your architectural project with our advanced calculator.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Square Feet Slider */}
            <div className="mb-12">
              <label className="block text-text-primary mb-6 text-lg font-medium">House Size</label>
              <div className="relative">
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(Number(e.target.value))}
                  className="w-full h-2 bg-background-card rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-text-secondary mt-4">
                  <span>1,000 sq ft</span>
                  <motion.span 
                    className="text-accent font-bold text-lg"
                    animate={animatePrice ? { scale: [1, 1.2, 1] } : {}}
                  >
                    {squareFeet.toLocaleString()} sq ft
                  </motion.span>
                  <span>5,000 sq ft</span>
                </div>
              </div>
            </div>

            {/* House Type */}
            <div className="mb-12">
              <label className="block text-text-primary mb-6 text-lg font-medium">House Type</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'modern', label: 'Modern', icon: <Building className="w-6 h-6" /> },
                  { value: 'traditional', label: 'Traditional', icon: <Home className="w-6 h-6" /> },
                  { value: 'minimalist', label: 'Minimalist', icon: <Ruler className="w-6 h-6" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setOptions({...options, houseType: type.value})}
                    className={`glass-card p-6 transition-all duration-300 ${
                      options.houseType === type.value 
                        ? 'ring-2 ring-accent bg-accent/10' 
                        : 'hover:bg-background-card'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
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

            {/* Style Level */}
            <div className="mb-12">
              <label className="block text-text-primary mb-6 text-lg font-medium">Style Level</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'standard', label: 'Standard', description: 'Quality materials' },
                  { value: 'premium', label: 'Premium', description: 'High-end finishes' },
                  { value: 'luxury', label: 'Luxury', description: 'Exclusive design' }
                ].map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setOptions({...options, style: style.value})}
                    className={`glass-card p-6 transition-all duration-300 ${
                      options.style === style.value 
                        ? 'ring-2 ring-accent bg-accent/10' 
                        : 'hover:bg-background-card'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`font-medium mb-2 ${
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

            {/* Additional Features */}
            <div>
              <label className="block text-text-primary mb-6 text-lg font-medium">Additional Features</label>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <button
                    key={feature.key}
                    onClick={() => setOptions({
                      ...options,
                      [feature.key]: !options[feature.key as keyof CalculatorOptions]
                    })}
                    onMouseEnter={() => setShowTooltip(feature.key)}
                    onMouseLeave={() => setShowTooltip(null)}
                    className={`glass-card p-6 text-left transition-all duration-300 relative ${
                      options[feature.key as keyof CalculatorOptions]
                        ? 'ring-2 ring-accent bg-accent/10'
                        : 'hover:bg-background-card'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        options[feature.key as keyof CalculatorOptions]
                          ? 'bg-accent text-white'
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {feature.icon}
                      </div>
                      <div>
                        <div className={`font-medium ${
                          options[feature.key as keyof CalculatorOptions]
                            ? 'text-accent'
                            : 'text-text-primary'
                        }`}>
                          {feature.label}
                        </div>
                        <div className="text-sm text-text-secondary">
                          +${feature.price.toLocaleString()}
                        </div>
                      </div>
                      <Info 
                        size={16} 
                        className="ml-auto text-text-secondary"
                      />
                    </div>
                    <AnimatePresence>
                      {showTooltip === feature.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 p-4 glass-card text-sm text-text-secondary shadow-lg z-10 w-full"
                        >
                          {feature.info}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div 
            className="lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Price Estimate</h2>
              </div>
              
              <motion.div
                className="text-6xl font-bold gradient-text mb-12"
                animate={animatePrice ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                ${estimatedPrice.toLocaleString()}
              </motion.div>

              <div className="space-y-6 mb-12">
                {/* Price Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between text-text-secondary">
                    <span>Base Price ({squareFeet.toLocaleString()} sq ft)</span>
                    <span>${(squareFeet * basePrice[options.houseType as keyof typeof basePrice] * 0.092903).toLocaleString()}</span>
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
              </div>

              <Link
                href="/contact"
                className="button-primary w-full flex items-center justify-center gap-2 group"
              >
                Get Detailed Quote
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              </Link>
              <p className="text-text-secondary text-sm text-center mt-4">
                * This is an estimate. Final price may vary based on specific requirements and location.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 