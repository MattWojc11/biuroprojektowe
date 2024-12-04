import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
]

const quickLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Calculator', href: '/calculator' },
  { name: 'Contact', href: '/contact' }
]

const contactInfo = [
  { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567' },
  { icon: <Mail className="w-5 h-5" />, text: 'contact@archix.com' },
  { icon: <MapPin className="w-5 h-5" />, text: '123 Architecture Street, Design District, DC 12345' }
]

export default function Footer() {
  return (
    <footer className="bg-background-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-2xl font-bold">
                ARCH<span className="text-accent">IX</span>
              </Link>
              <div className="text-xs text-accent mt-1">ARCHITECTURAL STUDIO</div>
            </div>
            <p className="text-text-secondary">
              Creating innovative architectural solutions that inspire and endure. 
              Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center 
                           text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <div className="mt-1 text-accent">{info.icon}</div>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-text-secondary mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 glass-card text-text-primary bg-transparent 
                         border border-border focus:border-accent focus:ring-1 focus:ring-accent 
                         outline-none rounded-lg transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-accent hover:bg-accent-hover text-white 
                         rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8 text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} ARCHIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 