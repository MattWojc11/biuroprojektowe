import Hero from '@/components/layout/Hero'
import ServicesOverview from '@/components/features/ServicesOverview'
import Statistics from '@/components/features/Statistics'
import Process from '@/components/features/Process'
import Testimonials from '@/components/features/Testimonials'
import PriceCalculator from '@/components/features/PriceCalculator'
import CallToAction from '@/components/features/CallToAction'
import InteractiveGallery from '@/components/features/InteractiveGallery'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Statistics />
      <InteractiveGallery />
      <Process />
      <Testimonials />
      <PriceCalculator />
      <CallToAction />
    </>
  )
}
