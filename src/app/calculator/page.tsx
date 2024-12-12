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
  const [formattedValues, setFormattedValues] = useState({
    squareFeet: '1500',
    price: '0'
  })

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

  const formatNumber = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  useEffect(() => {
    setFormattedValues({
      squareFeet: formatNumber(squareFeet),
      price: formatNumber(calculatePrice())
    })
  }, [squareFeet, options])

  const estimatedPrice = calculatePrice()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link href="/" className="text-accent hover:text-accent-hover flex items-center gap-2 mb-6 md:mb-12">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Project Calculator
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get an instant estimate for your architectural project with our advanced calculator.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 md:-mt-20 relative z-10 pb-12 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Calculator Form */}
          <motion.div 
            className="glass-card p-4 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Square Feet Slider */}
            <div className="mb-8 md:mb-12">
              <label className="block text-text-primary mb-4 md:mb-6 text-base md:text-lg font-medium">House Size</label>
              <div className="relative">
                <input
                  type="range"
                  min="1000"
                  max="5000"
                  value={squareFeet}
                  onChange={(e) => setSquareFeet(Number(e.target.value))}
                  className="w-full h-2 bg-background-card rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-text-secondary mt-4 text-sm md:text-base">
                  <span>1,000 sq ft</span>
                  <motion.span 
                    className="text-accent font-bold text-base md:text-lg"
                    animate={animatePrice ? { scale: [1, 1.2, 1] } : {}}
                  >
                    {formattedValues.squareFeet} sq ft
                  </motion.span>
                  <span>5,000 sq ft</span>
                </div>
              </div>
            </div>

            {/* House Type */}
            <div className="mb-8 md:mb-12">
              <label className="block text-text-primary mb-4 md:mb-6 text-base md:text-lg font-medium">House Type</label>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {[
                  { value: 'modern', label: 'Modern', icon: <Building className="w-5 h-5 md:w-6 md:h-6" /> },
                  { value: 'traditional', label: 'Traditional', icon: <Home className="w-5 h-5 md:w-6 md:h-6" /> },
                  { value: 'minimalist', label: 'Minimalist', icon: <Ruler className="w-5 h-5 md:w-6 md:h-6" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setOptions({...options, houseType: type.value})}
                    className={`bg-[#1e293b] border border-white/10 rounded-lg p-3 md:p-4 flex flex-col items-center gap-2 transition-colors hover:bg-accent/5 ${
                      options.houseType === type.value ? 'ring-2 ring-accent bg-accent/10' : ''
                    }`}
                  >
                    {type.icon}
                    <span className="text-xs md:text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="mb-8 md:mb-12">
              <label className="block text-text-primary mb-4 md:mb-6 text-base md:text-lg font-medium">Style</label>
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {[
                  { value: 'standard', label: 'Standard' },
                  { value: 'premium', label: 'Premium' },
                  { value: 'luxury', label: 'Luxury' }
                ].map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setOptions({...options, style: style.value})}
                    className={`bg-[#1e293b] border border-white/10 rounded-lg p-3 md:p-4 text-center transition-colors hover:bg-accent/5 ${
                      options.style === style.value ? 'ring-2 ring-accent bg-accent/10' : ''
                    }`}
                  >
                    <span className="text-xs md:text-sm">{style.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Floors and Rooms */}
            <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <div>
                <label className="block text-text-primary mb-4 text-base md:text-lg font-medium">Floors</label>
                <div className="flex gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setOptions({...options, floors: num})}
                      className={`bg-[#1e293b] border border-white/10 rounded-lg flex-1 p-2 md:p-3 text-center transition-colors hover:bg-accent/5 ${
                        options.floors === num ? 'ring-2 ring-accent bg-accent/10' : ''
                      }`}
                    >
                      <span className="text-xs md:text-sm">{num}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-text-primary mb-4 text-base md:text-lg font-medium">Rooms</label>
                <div className="flex gap-2">
                  {[2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setOptions({...options, rooms: num})}
                      className={`bg-[#1e293b] border border-white/10 rounded-lg flex-1 p-2 md:p-3 text-center transition-colors hover:bg-accent/5 ${
                        options.rooms === num ? 'ring-2 ring-accent bg-accent/10' : ''
                      }`}
                    >
                      <span className="text-xs md:text-sm">{num}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bathrooms */}
            <div className="mb-8 md:mb-12">
              <label className="block text-text-primary mb-4 text-base md:text-lg font-medium">Bathrooms</label>
              <div className="flex gap-2 md:gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setOptions({...options, bathrooms: num})}
                    className={`bg-[#1e293b] border border-white/10 rounded-lg flex-1 p-2 md:p-3 text-center transition-colors hover:bg-accent/5 ${
                      options.bathrooms === num ? 'ring-2 ring-accent bg-accent/10' : ''
                    }`}
                  >
                    <span className="text-xs md:text-sm">{num}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <label className="block text-text-primary mb-4 text-base md:text-lg font-medium">Additional Features</label>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {features.map((feature) => (
                  <button
                    key={feature.key}
                    onClick={() => setOptions({
                      ...options,
                      [feature.key]: !options[feature.key as keyof typeof options]
                    })}
                    onMouseEnter={() => setShowTooltip(feature.key)}
                    onMouseLeave={() => setShowTooltip(null)}
                    className={`bg-[#1e293b] border border-white/10 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 transition-colors hover:bg-accent/5 relative ${
                      options[feature.key as keyof typeof options] ? 'ring-2 ring-accent bg-accent/10' : ''
                    }`}
                  >
                    {feature.icon}
                    <span className="text-xs md:text-sm">{feature.label}</span>
                    <Info className="w-4 h-4 ml-auto text-text-secondary" />
                    
                    <AnimatePresence>
                      {showTooltip === feature.key && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 glass-card p-2 md:p-3 text-xs md:text-sm whitespace-nowrap z-10"
                        >
                          {feature.info}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 bg-background-card" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div 
            className="glass-card p-4 md:p-8 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Calculator className="w-12 h-12 md:w-16 md:h-16 text-accent mb-4 md:mb-6" />
            <h2 className="text-lg md:text-xl font-medium text-text-primary mb-2 md:mb-4">Estimated Project Cost</h2>
            <motion.div 
              className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6"
              animate={animatePrice ? { scale: [1, 1.1, 1] } : {}}
            >
              ${formattedValues.price}
            </motion.div>
            <p className="text-sm md:text-base text-text-secondary max-w-md">
              This is an estimated cost based on your selections. Contact us for a detailed quote.
            </p>
            <Link 
              href="/contact" 
              className="mt-6 md:mt-8 flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Plus size={20} />
              Get Detailed Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 