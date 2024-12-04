import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ARCHIX</h3>
            <p className="text-gray-400">
              Modern architecture and design solutions for your dream home.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#C4A484]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#C4A484]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-[#C4A484]">
                  Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Architecture Street</p>
              <p>Design District, DC 12345</p>
              <p className="mt-2">contact@archix.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARCHIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 