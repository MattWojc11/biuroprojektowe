'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Home,
  Building,
  Ruler,
  Warehouse,
  Lightbulb,
  TreePine,
  Info,
  Calculator as CalcIcon
} from 'lucide-react'
import Link from 'next/link'

type CalculatorOptions = {
  houseType: 'modern' | 'traditional' | 'minimalist'
  style: 'standard' | 'premium' | 'luxury'
  floors: number
  rooms: number
  bathrooms: number
  garage: boolean
  garden: boolean
  smartHome: boolean
  sustainableFeatures: boolean
}

const basePrice = {
  modern: 200,
  traditional: 180,
  minimalist: 190
} as const

const styleMultiplier = {
  standard: 1,
  premium: 1.3,
  luxury: 1.6
} as const

const features = [
  {
    key: 'garage',
    label: 'Garage',
    icon: <Warehouse className="w-5 h-5" />,
    info: 'Attached or detached garage',
    price: 35000
  },
  {
    key: 'garden',
    label: 'Garden',
    icon: <TreePine className="w-5 h-5" />,
    info: 'Landscaped garden design',
    price: 25000
  },
  {
    key: 'smartHome',
    label: 'Smart Home',
    icon: <Home className="w-5 h-5" />,
    info: 'Integrated smart home systems',
    price: 45000
  },
  {
    key: 'sustainableFeatures',
    label: 'Eco-Friendly',
    icon: <Lightbulb className="w-5 h-5" />,
    info: 'Sustainable and eco-friendly features',
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

  const [squareFeet, setSquareFeet] = useState(2000)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
  const [priceAnimation, setPriceAnimation] = useState(false)

  const calculatePrice = () => {
    let price = squareFeet * basePrice[options.houseType]
    price *= styleMultiplier[options.style]
    price *= (1 + (options.floors - 1) * 0.15)
    price += options.rooms * 15000
    price += options.bathrooms * 10000
    
    features.forEach(feature => {
      if (options[feature.key as keyof typeof options]) {
        price += feature.price
      }
    })

    return Math.round(price)
  }

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    setPriceAnimation(true)
    const timer = setTimeout(() => setPriceAnimation(false), 300)
    return () => clearTimeout(timer)
  }, [options, squareFeet])

  const estimatedPrice = calculatePrice()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Hero Section */}
      <div className="relative h-[45vh] md:h-[50vh]">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070')] bg-cover bg-center"
            style={{ backgroundPosition: '50% 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/90" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-4 md:mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Project Cost Calculator
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get an instant estimate for your dream architectural project
          </motion.p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="container mx-auto px-4 -mt-8 sm:-mt-12 md:-mt-20 relative z-10 pb-20">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-6 md:gap-8">
          {/* Form */}
          <motion.div
            className="glass-card p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Square Footage */}
            <div className="mb-8">
              <label className="block text-base md:text-lg font-medium mb-4">
                House Size
              </label>
              <input
                type="range"
                min="1000"
                max="5000"
                value={squareFeet}
                onChange={(e) => setSquareFeet(Number(e.target.value))}
                className="w-full h-2 bg-background-card rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between mt-2 text-sm text-text-secondary">
                <span>1,000 sq ft</span>
                <span className="text-accent font-medium">{formatNumber(squareFeet)} sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>

            {/* House Type */}
            <div className="mb-8">
              <label className="block text-base md:text-lg font-medium mb-4">
                House Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'modern', label: 'Modern', icon: <Building className="w-5 h-5" /> },
                  { value: 'traditional', label: 'Traditional', icon: <Home className="w-5 h-5" /> },
                  { value: 'minimalist', label: 'Minimalist', icon: <Ruler className="w-5 h-5" /> }
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setOptions({ ...options, houseType: type.value as CalculatorOptions['houseType'] })}
                    className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-lg border transition-all
                      ${options.houseType === type.value 
                        ? 'border-accent bg-accent/10 text-accent' 
                        : 'border-white/10 hover:border-accent/50'}`}
                  >
                    {type.icon}
                    <span className="text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Level */}
            <div className="mb-8">
              <label className="block text-base md:text-lg font-medium mb-4">
                Style Level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'standard', label: 'Standard' },
                  { value: 'premium', label: 'Premium' },
                  { value: 'luxury', label: 'Luxury' }
                ].map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setOptions({ ...options, style: style.value as CalculatorOptions['style'] })}
                    className={`p-3 md:p-4 rounded-lg border transition-all text-center
                      ${options.style === style.value 
                        ? 'border-accent bg-accent/10 text-accent' 
                        : 'border-white/10 hover:border-accent/50'}`}
                  >
                    <span className="text-sm">{style.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Room Configuration */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Floors */}
                <div>
                  <label className="block text-base md:text-lg font-medium mb-4">
                    Floors
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        onClick={() => setOptions({...options, floors: num})}
                        className={`flex-1 p-3 rounded-lg border transition-all
                          ${options.floors === num 
                            ? 'border-accent bg-accent/10 text-accent' 
                            : 'border-white/10 hover:border-accent/50'}
                        `}
                      >
                        <span className="text-sm md:text-base">{num}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-base md:text-lg font-medium mb-4">
                    Bedrooms
                  </label>
                  <div className="flex gap-2">
                    {[2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => setOptions({...options, rooms: num})}
                        className={`flex-1 p-3 rounded-lg border transition-all
                          ${options.rooms === num 
                            ? 'border-accent bg-accent/10 text-accent' 
                            : 'border-white/10 hover:border-accent/50'}
                        `}
                      >
                        <span className="text-sm md:text-base">{num}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block text-base md:text-lg font-medium mb-4">
                    Bathrooms
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setOptions({...options, bathrooms: num})}
                        className={`flex-1 p-3 rounded-lg border transition-all
                          ${options.bathrooms === num 
                            ? 'border-accent bg-accent/10 text-accent' 
                            : 'border-white/10 hover:border-accent/50'}
                        `}
                      >
                        <span className="text-sm md:text-base">{num}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <label className="block text-base md:text-lg font-medium mb-4">
                Additional Features
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature.key} className="relative">
                    <button
                      onClick={() => setOptions(prev => ({
                        ...prev,
                        [feature.key]: !prev[feature.key as keyof typeof prev]
                      }))}
                      onMouseEnter={() => setShowTooltip(feature.key)}
                      onMouseLeave={() => setShowTooltip(null)}
                      className={`w-full p-3 md:p-4 rounded-lg border flex items-center gap-3 transition-all
                        ${options[feature.key as keyof typeof options]
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-white/10 hover:border-accent/50'}`}
                    >
                      {feature.icon}
                      <span className="text-sm">{feature.label}</span>
                      <Info className="w-4 h-4 ml-auto text-text-secondary" />
                    </button>
                    {showTooltip === feature.key && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 p-2 rounded-lg bg-background-dark text-xs">
                        {feature.info}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            className="glass-card p-6 lg:p-8 lg:sticky lg:top-24 h-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center text-center">
              <CalcIcon className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-xl font-medium mb-2">Estimated Cost</h2>
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-accent mb-4"
                animate={priceAnimation ? { scale: [1, 1.1, 1] } : {}}
              >
                ${formatNumber(estimatedPrice)}
              </motion.div>
              <p className="text-sm text-text-secondary mb-6">
                This is an estimated cost based on your selections. Contact us for a detailed quote.
              </p>
              <Link
                href="/contact"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3 px-6 rounded-lg transition-colors text-center"
              >
                Get Detailed Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}