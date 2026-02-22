import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

interface HeaderProps {
  isScrolled: boolean
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Header({ isScrolled, menuOpen, setMenuOpen }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleWhatsAppRedirect = () => {
  const phoneNumber = "919203326281"; // 91 + number (no + sign)
  const message = "Hello, I would like to get in touch regarding your digital marketing services.";
  
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark-lighter/80 backdrop-blur-md border-b border-accent-purple/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-display">
            <span className="gradient-text">KARM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-text-gray hover:text-accent-purple transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <motion.button
            onClick={handleWhatsAppRedirect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark hover:shadow-lg hover:shadow-accent-purple/50 transition-shadow"
            >
              Get in Touch
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-accent-purple text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 bg-dark-lighter/95 backdrop-blur-md border-b border-accent-purple/20 z-40 md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-text-gray hover:text-accent-purple transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <motion.button
              onClick={handleWhatsAppRedirect}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg font-semibold text-dark w-full"
              >
                Get in Touch
              </motion.button>
              


            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { AnimatePresence } from 'framer-motion'
