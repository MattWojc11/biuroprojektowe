import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-24 bg-[#C4A484]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1C1C1C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
} 